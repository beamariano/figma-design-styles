import type { TextStyleModel, FontName } from "./types";
import { SAMPLE_TEXT_STYLES } from "./models";
// ===== Helpers =====

function formatLineHeight(lh: TextStyleModel["lineHeight"]): string {
  if (lh.unit === "AUTO") return "Auto";
  if (lh.unit === "PERCENT") return `${lh.value}%`;
  return `${lh.value}px`;
}

function formatLetterSpacing(ls: TextStyleModel["letterSpacing"]): string {
  if (ls.value === 0) return "0";
  if (ls.unit === "PERCENT") return `${ls.value}%`;
  return `${ls.value}px`;
}

function formatDetails(style: TextStyleModel): string {
  const parts: string[] = [
    `${style.fontName.family} ${style.fontName.style}`,
    `${style.fontSize}px`,
    `LH: ${formatLineHeight(style.lineHeight)}`,
    `LS: ${formatLetterSpacing(style.letterSpacing)}`,
  ];

  if (style.textCase !== "ORIGINAL") parts.push(style.textCase);
  if (style.textDecoration !== "NONE") parts.push(style.textDecoration);
  if (style.paragraphSpacing > 0)
    parts.push(`P-Space: ${style.paragraphSpacing}px`);
  if (style.paragraphIndent > 0)
    parts.push(`P-Indent: ${style.paragraphIndent}px`);
  if (style.listSpacing > 0) parts.push(`List: ${style.listSpacing}px`);

  return parts.join("  ·  ");
}

function uniqueFonts(styles: TextStyleModel[]): FontName[] {
  const seen = new Set<string>();
  const fonts: FontName[] = [];
  for (const s of styles) {
    const key = `${s.fontName.family}::${s.fontName.style}`;
    if (!seen.has(key)) {
      seen.add(key);
      fonts.push(s.fontName);
    }
  }
  return fonts;
}

// ===== Create Figma Text Styles =====

const FALLBACK_FONT: FontName = { family: "Inter", style: "Regular" };

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createFigmaTextStyles(
  styles: TextStyleModel[],
): Promise<{ created: number; errors: string[]; missingFonts: string[] }> {
  let created = 0;
  const missingFontSet = new Set<string>();
  const errors: string[] = [];

  // Pre-load the fallback font
  await figma.loadFontAsync(FALLBACK_FONT);

  const total = styles.length;
  let notice = figma.notify(`Creating text styles: 0 of ${total}…`, {
    timeout: Infinity,
  });

  for (const def of styles) {
    // Yield to let the UI thread render notification updates
    await delay(0);

    let fontToUse = def.fontName;
    try {
      await figma.loadFontAsync(def.fontName);
    } catch {
      const fontKey = `${def.fontName.family} ${def.fontName.style}`;
      missingFontSet.add(fontKey);
      fontToUse = FALLBACK_FONT;
    }

    try {
      const ts = figma.createTextStyle();
      ts.name = def.name;
      ts.description = def.description;
      ts.fontName = fontToUse;
      ts.fontSize = def.fontSize;
      ts.letterSpacing = def.letterSpacing;

      // Figma's AUTO LineHeight type has no value field
      if (def.lineHeight.unit === "AUTO") {
        ts.lineHeight = { unit: "AUTO" };
      } else {
        ts.lineHeight = {
          unit: def.lineHeight.unit,
          value: def.lineHeight.value,
        };
      }

      ts.paragraphIndent = def.paragraphIndent;
      ts.paragraphSpacing = def.paragraphSpacing;
      ts.textCase = def.textCase;
      ts.textDecoration = def.textDecoration;

      // These properties may not exist in older plugin API versions
      try {
        ts.listSpacing = def.listSpacing;
      } catch {
        /* unsupported */
      }
      try {
        ts.leadingTrim = def.leadingTrim;
      } catch {
        /* unsupported */
      }
      try {
        ts.hangingPunctuation = def.hangingPunctuation;
      } catch {
        /* unsupported */
      }
      try {
        ts.hangingList = def.hangingList;
      } catch {
        /* unsupported */
      }

      created++;
    } catch (e) {
      errors.push(`Failed to create "${def.name}": ${e}`);
    }

    notice.cancel();
    notice = figma.notify(`Creating text styles: ${created} of ${total}…`, {
      timeout: Infinity,
    });
  }

  notice.cancel();

  return { created, errors, missingFonts: [...missingFontSet] };
}

// ===== Create Visual Display Frame =====

async function createDisplayFrame(
  styles: TextStyleModel[],
): Promise<FrameNode> {
  const UI_FONT: FontName = { family: "Inter", style: "Regular" };
  const UI_FONT_BOLD: FontName = { family: "Inter", style: "Bold" };

  // Load all fonts needed: style fonts + UI fonts
  const allFonts = uniqueFonts(styles);
  allFonts.push(UI_FONT, UI_FONT_BOLD);

  const loadResults = await Promise.allSettled(
    allFonts.map((f) => figma.loadFontAsync(f)),
  );

  // Track which fonts loaded successfully
  const loadedFonts = new Set<string>();
  allFonts.forEach((f, i) => {
    if (loadResults[i].status === "fulfilled") {
      loadedFonts.add(`${f.family}::${f.style}`);
    }
  });

  const hasFontLoaded = (f: FontName) =>
    loadedFonts.has(`${f.family}::${f.style}`);

  // Main frame
  const frame = figma.createFrame();
  frame.name = "Text Styles Reference";
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingTop = 48;
  frame.paddingBottom = 48;
  frame.paddingLeft = 48;
  frame.paddingRight = 48;
  frame.itemSpacing = 40;
  frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

  // Title
  if (hasFontLoaded(UI_FONT_BOLD)) {
    const title = figma.createText();
    title.fontName = UI_FONT_BOLD;
    title.characters = "Text Styles";
    title.fontSize = 32;
    title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
    frame.appendChild(title);
  }

  // Divider
  const divider = figma.createRectangle();
  divider.name = "Divider";
  divider.resize(600, 1);
  divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
  frame.appendChild(divider);

  // Style rows
  for (const style of styles) {
    const styleFont = style.fontName;
    const canShowPreview = hasFontLoaded(styleFont);
    const canShowDetails = hasFontLoaded(UI_FONT);

    if (!canShowPreview && !canShowDetails) continue;

    // Row container
    const row = figma.createFrame();
    row.name = style.name;
    row.layoutMode = "VERTICAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 6;
    row.fills = [];

    // Style name as preview (using the actual font)
    if (canShowPreview) {
      const preview = figma.createText();
      preview.fontName = styleFont;
      preview.fontSize = style.fontSize;
      preview.characters = style.name;
      preview.letterSpacing = style.letterSpacing;
      if (style.lineHeight.unit !== "AUTO") {
        preview.lineHeight = style.lineHeight;
      }
      preview.textCase = style.textCase;
      preview.textDecoration = style.textDecoration;
      preview.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
      row.appendChild(preview);

      const textComponent = figma.createComponentFromNode(preview);
      textComponent.name = style.name;
      row.appendChild(textComponent);
    }

    // Description
    if (canShowDetails && style.description) {
      const desc = figma.createText();
      desc.fontName = UI_FONT;
      desc.fontSize = 12;
      desc.characters = style.description;
      desc.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
      row.appendChild(desc);
    }

    // Details line
    if (canShowDetails) {
      const details = figma.createText();
      details.fontName = UI_FONT;
      details.fontSize = 11;
      details.characters = formatDetails(style);
      details.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
      row.appendChild(details);
    }

    frame.appendChild(row);
  }

  figma.currentPage.appendChild(frame);
  return frame;
}

// ===== Main =====

async function main() {
  const styles = SAMPLE_TEXT_STYLES;

  const { created, errors, missingFonts } = await createFigmaTextStyles(styles);
  console.log(`Created ${created} text styles`);
  if (errors.length > 0) {
    console.error("Errors:", errors);
  }

  const frame = await createDisplayFrame(styles);

  figma.currentPage.selection = [frame];
  figma.viewport.scrollAndZoomIntoView([frame]);

  let message = `Created ${created} of ${styles.length} text styles`;
  if (errors.length > 0) {
    message += `\n\nErrors:\n• ${errors.join("\n• ")}`;
  }
  if (missingFonts.length > 0) {
    message += `\n\nMissing fonts (used ${FALLBACK_FONT.family} ${FALLBACK_FONT.style} as fallback):\n• ${missingFonts.join("\n• ")}`;
  }

  figma.closePlugin(message);
}

main();
