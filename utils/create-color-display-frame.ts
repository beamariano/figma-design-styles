import type { ThemeColors } from "../types";
import hexToRgba from "./hex-to-rgba";

const UI_FONT: FontName = { family: "Inter", style: "Regular" };
const UI_FONT_BOLD: FontName = { family: "Inter", style: "Bold" };

const SWATCH_SIZE = 64;
const FRAME_PADDING = 48;
const ROW_GAP = 24;
const SWATCH_GAP = 16;

function createSwatch(hex: string, label: string): FrameNode {
  const rgb = hexToRgba(hex);

  // Wrapper
  const wrapper = figma.createFrame();
  wrapper.name = label;
  wrapper.layoutMode = "VERTICAL";
  wrapper.primaryAxisSizingMode = "AUTO";
  wrapper.counterAxisSizingMode = "AUTO";
  wrapper.itemSpacing = 6;
  wrapper.fills = [];

  // Color rectangle
  const rect = figma.createRectangle();
  rect.name = `${label} swatch`;
  rect.resize(SWATCH_SIZE, SWATCH_SIZE);
  rect.cornerRadius = 8;
  rect.fills = [{ type: "SOLID", color: rgb }];
  rect.strokes = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
  rect.strokeWeight = 1;
  wrapper.appendChild(rect);

  // Hex label
  const text = figma.createText();
  text.fontName = UI_FONT;
  text.fontSize = 11;
  text.characters = hex.toUpperCase();
  text.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
  wrapper.appendChild(text);

  return wrapper;
}

export default async function createColorDisplayFrame(
  tokens: ThemeColors,
): Promise<FrameNode> {
  await figma.loadFontAsync(UI_FONT);
  await figma.loadFontAsync(UI_FONT_BOLD);

  // Main frame
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

  // Token rows
  for (const [name, value] of Object.entries(tokens)) {
    const row = figma.createFrame();
    row.name = name;
    row.layoutMode = "VERTICAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 12;
    row.fills = [];

    // Token name
    const label = figma.createText();
    label.fontName = UI_FONT_BOLD;
    label.fontSize = 14;
    label.characters = name;
    label.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
    row.appendChild(label);

    // Swatches row (light + dark side by side)
    const swatchRow = figma.createFrame();
    swatchRow.name = `${name} swatches`;
    swatchRow.layoutMode = "HORIZONTAL";
    swatchRow.primaryAxisSizingMode = "AUTO";
    swatchRow.counterAxisSizingMode = "AUTO";
    swatchRow.itemSpacing = SWATCH_GAP;
    swatchRow.fills = [];

    swatchRow.appendChild(createSwatch(value.light, "Light"));
    swatchRow.appendChild(createSwatch(value.dark, "Dark"));

    row.appendChild(swatchRow);
    frame.appendChild(row);
  }

  figma.currentPage.appendChild(frame);
  return frame;
}
