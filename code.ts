import { SAMPLE_TEXT_STYLES, SAMPLE_COLOR_TOKENS } from "./models";
import createTextStyles, { FALLBACK_FONT } from "./utils/create-text-styles";
import createTextDisplayFrame from "./utils/create-text-display-frame";
import createColorVariables from "./utils/create-color-variables";
import createColorDisplayFrame from "./utils/create-color-display-frame";

async function main() {
  const styles = SAMPLE_TEXT_STYLES;
  const colorTokens = SAMPLE_COLOR_TOKENS;

  // Text styles
  const { created, errors, missingFonts } = await createTextStyles(styles);
  console.log(`Created ${created} text styles`);
  if (errors.length > 0) {
    console.error("Errors:", errors);
  }

  const textFrame = await createTextDisplayFrame(styles);

  // Color variables
  createColorVariables(colorTokens);
  const colorFrame = await createColorDisplayFrame(colorTokens);

  // Position color frame to the right of the text frame
  colorFrame.x = textFrame.x + textFrame.width + 100;
  colorFrame.y = textFrame.y;

  figma.currentPage.selection = [textFrame, colorFrame];
  figma.viewport.scrollAndZoomIntoView([textFrame, colorFrame]);

  let message = `Created ${created} of ${styles.length} text styles · ${Object.keys(colorTokens).length} color variables`;
  if (errors.length > 0) {
    message += `\n\nErrors:\n• ${errors.join("\n• ")}`;
  }
  if (missingFonts.length > 0) {
    message += `\n\nMissing fonts (used ${FALLBACK_FONT.family} ${FALLBACK_FONT.style} as fallback):\n• ${missingFonts.join("\n• ")}`;
  }

  figma.closePlugin(message);
}

main();
