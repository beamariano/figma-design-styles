import type { TextStyleModel, FontName } from "../types";

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

export interface TextComponentsResult {
  frame: FrameNode;
  components: Map<string, ComponentNode>;
}

export default async function createTextComponentsFrame(
  styles: TextStyleModel[],
): Promise<TextComponentsResult> {
  const UI_FONT_BOLD: FontName = { family: "Inter", style: "Bold" };

  const allFonts = uniqueFonts(styles);
  allFonts.push(UI_FONT_BOLD);

  const loadResults = await Promise.allSettled(
    allFonts.map((f) => figma.loadFontAsync(f)),
  );

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
  frame.name = "Text Style Components";
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingTop = 48;
  frame.paddingBottom = 48;
  frame.paddingLeft = 48;
  frame.paddingRight = 48;
  frame.itemSpacing = 32;
  frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

  // Title
  if (hasFontLoaded(UI_FONT_BOLD)) {
    const title = figma.createText();
    title.fontName = UI_FONT_BOLD;
    title.characters = "Text Style Components";
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

  // One component per text style
  const components = new Map<string, ComponentNode>();

  for (const style of styles) {
    if (!hasFontLoaded(style.fontName)) continue;

    const preview = figma.createText();
    preview.fontName = style.fontName;
    preview.fontSize = style.fontSize;
    preview.characters = style.name;
    preview.letterSpacing = style.letterSpacing;
    if (style.lineHeight.unit !== "AUTO") {
      preview.lineHeight = style.lineHeight;
    }
    preview.textCase = style.textCase;
    preview.textDecoration = style.textDecoration;
    preview.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];

    const component = figma.createComponentFromNode(preview);
    component.name = style.name;
    frame.appendChild(component);
    components.set(style.name, component);
  }

  figma.currentPage.appendChild(frame);
  return { frame, components };
}
