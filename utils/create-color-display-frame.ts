import type { ThemeColors } from "../types";

const UI_FONT: FontName = { family: "Inter", style: "Regular" };
const UI_FONT_BOLD: FontName = { family: "Inter", style: "Bold" };

const FRAME_PADDING = 48;
const SWATCH_GAP = 16;

export default async function createColorDisplayFrame(
  tokens: ThemeColors,
  components: Map<string, { light: ComponentNode; dark: ComponentNode }>,
): Promise<FrameNode> {
  await Promise.allSettled([
    figma.loadFontAsync(UI_FONT),
    figma.loadFontAsync(UI_FONT_BOLD),
  ]);

  const frame = figma.createFrame();
  frame.name = "Color Variables Reference";
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingTop = FRAME_PADDING;
  frame.paddingBottom = FRAME_PADDING;
  frame.paddingLeft = FRAME_PADDING;
  frame.paddingRight = FRAME_PADDING;
  frame.itemSpacing = 40;
  frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

  // Title
  const title = figma.createText();
  title.fontName = UI_FONT_BOLD;
  title.characters = "Color Variables";
  title.fontSize = 32;
  title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
  frame.appendChild(title);

  // Divider
  const divider = figma.createRectangle();
  divider.name = "Divider";
  divider.resize(600, 1);
  divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
  frame.appendChild(divider);

  for (const [name, value] of Object.entries(tokens)) {
    const pair = components.get(name);
    if (!pair) continue;

    const row = figma.createFrame();
    row.name = name;
    row.layoutMode = "VERTICAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 12;
    row.fills = [];

    // Color name
    const label = figma.createText();
    label.fontName = UI_FONT_BOLD;
    label.fontSize = 14;
    label.characters = name;
    label.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
    row.appendChild(label);

    // Description
    if (value.description) {
      const desc = figma.createText();
      desc.fontName = UI_FONT;
      desc.fontSize = 12;
      desc.characters = value.description;
      desc.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
      row.appendChild(desc);
    }

    // Swatch instances (light + dark side by side)
    const swatchRow = figma.createFrame();
    swatchRow.name = `${name} swatches`;
    swatchRow.layoutMode = "HORIZONTAL";
    swatchRow.primaryAxisSizingMode = "AUTO";
    swatchRow.counterAxisSizingMode = "AUTO";
    swatchRow.itemSpacing = SWATCH_GAP;
    swatchRow.fills = [];

    swatchRow.appendChild(pair.light.createInstance());
    swatchRow.appendChild(pair.dark.createInstance());
    row.appendChild(swatchRow);

    // Values line
    const values = figma.createText();
    values.fontName = UI_FONT;
    values.fontSize = 11;
    values.characters = `Light: ${value.light.toUpperCase()}  ·  Dark: ${value.dark.toUpperCase()}`;
    values.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
    row.appendChild(values);

    frame.appendChild(row);
  }

  figma.currentPage.appendChild(frame);
  return frame;
}
