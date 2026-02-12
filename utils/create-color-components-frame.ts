import type { ThemeColors } from "../types";
import hexToRgba from "./hex-to-rgba";

const SWATCH_SIZE = 64;
const SWATCH_GAP = 16;
const FRAME_PADDING = 48;

const UI_FONT_BOLD: FontName = { family: "Inter", style: "Bold" };
const UI_FONT: FontName = { family: "Inter", style: "Regular" };

function createSwatchComponent(
  hex: string,
  label: string,
): ComponentNode {
  const rgb = hexToRgba(hex);

  const wrapper = figma.createFrame();
  wrapper.name = label;
  wrapper.layoutMode = "VERTICAL";
  wrapper.primaryAxisSizingMode = "AUTO";
  wrapper.counterAxisSizingMode = "AUTO";
  wrapper.itemSpacing = 6;
  wrapper.fills = [];

  const rect = figma.createRectangle();
  rect.name = `${label} swatch`;
  rect.resize(SWATCH_SIZE, SWATCH_SIZE);
  rect.cornerRadius = 8;
  rect.fills = [{ type: "SOLID", color: rgb }];
  rect.strokes = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
  rect.strokeWeight = 1;
  wrapper.appendChild(rect);

  const text = figma.createText();
  text.fontName = UI_FONT;
  text.fontSize = 11;
  text.characters = hex.toUpperCase();
  text.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
  wrapper.appendChild(text);

  const component = figma.createComponentFromNode(wrapper);
  component.name = label;
  return component;
}

export interface ColorComponentsResult {
  frame: FrameNode;
  components: Map<string, { light: ComponentNode; dark: ComponentNode }>;
}

export default async function createColorComponentsFrame(
  tokens: ThemeColors,
): Promise<ColorComponentsResult> {
  await Promise.allSettled([
    figma.loadFontAsync(UI_FONT),
    figma.loadFontAsync(UI_FONT_BOLD),
  ]);

  const frame = figma.createFrame();
  frame.name = "Color Components";
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.paddingTop = FRAME_PADDING;
  frame.paddingBottom = FRAME_PADDING;
  frame.paddingLeft = FRAME_PADDING;
  frame.paddingRight = FRAME_PADDING;
  frame.itemSpacing = 32;
  frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

  // Title
  const title = figma.createText();
  title.fontName = UI_FONT_BOLD;
  title.characters = "Color Components";
  title.fontSize = 32;
  title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
  frame.appendChild(title);

  // Divider
  const divider = figma.createRectangle();
  divider.name = "Divider";
  divider.resize(600, 1);
  divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
  frame.appendChild(divider);

  const components = new Map<
    string,
    { light: ComponentNode; dark: ComponentNode }
  >();

  for (const [name, value] of Object.entries(tokens)) {
    // Row for light + dark side by side
    const row = figma.createFrame();
    row.name = name;
    row.layoutMode = "HORIZONTAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = SWATCH_GAP;
    row.fills = [];

    const lightComp = createSwatchComponent(value.light, `${name}/Light`);
    const darkComp = createSwatchComponent(value.dark, `${name}/Dark`);

    row.appendChild(lightComp);
    row.appendChild(darkComp);
    frame.appendChild(row);

    components.set(name, { light: lightComp, dark: darkComp });
  }

  figma.currentPage.appendChild(frame);
  return { frame, components };
}
