import type { TextStyleModel, FontName } from "../types";

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

export default async function createTextDisplayFrame(
  styles: TextStyleModel[],
  components: Map<string, ComponentNode>,
): Promise<FrameNode> {
  const UI_FONT: FontName = { family: "Inter", style: "Regular" };
  const UI_FONT_BOLD: FontName = { family: "Inter", style: "Bold" };

  await Promise.allSettled([
    figma.loadFontAsync(UI_FONT),
    figma.loadFontAsync(UI_FONT_BOLD),
  ]);

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
  const title = figma.createText();
  title.fontName = UI_FONT_BOLD;
  title.characters = "Text Styles";
  title.fontSize = 32;
  title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
  frame.appendChild(title);

  // Divider
  const divider = figma.createRectangle();
  divider.name = "Divider";
  divider.resize(600, 1);
  divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
  frame.appendChild(divider);

  // Style rows
  for (const style of styles) {
    const component = components.get(style.name);
    if (!component) continue;

    // Row container
    const row = figma.createFrame();
    row.name = style.name;
    row.layoutMode = "VERTICAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 6;
    row.fills = [];

    // Instance of the original component as preview
    const instance = component.createInstance();
    row.appendChild(instance);

    // Description
    if (style.description) {
      const desc = figma.createText();
      desc.fontName = UI_FONT;
      desc.fontSize = 12;
      desc.characters = style.description;
      desc.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
      row.appendChild(desc);
    }

    // Details line
    const details = figma.createText();
    details.fontName = UI_FONT;
    details.fontSize = 11;
    details.characters = formatDetails(style);
    details.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
    row.appendChild(details);

    frame.appendChild(row);
  }

  figma.currentPage.appendChild(frame);
  return frame;
}
