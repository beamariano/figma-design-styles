import { SAMPLE_TEXT_STYLES, SAMPLE_COLOR_TOKENS } from "./models";
import createTextStyles, { FALLBACK_FONT } from "./utils/create-text-styles";
import createTextDisplayFrame from "./utils/create-text-display-frame";
import createColorVariables from "./utils/create-color-variables";
import createColorComponentsFrame from "./utils/create-color-components-frame";
import createColorDisplayFrame from "./utils/create-color-display-frame";
import createTextComponentsFrame from "./utils/create-text-components-frame";

async function main() {
  const styles = SAMPLE_TEXT_STYLES;
  const colorTokens = SAMPLE_COLOR_TOKENS;

  // Text styles
  const { created, skipped, errors, missingFonts } = await createTextStyles(styles);
  console.log(`Created ${created} text styles (${skipped} skipped)`);
  if (errors.length > 0) {
    console.error("Errors:", errors);
  }

  // Text components first (originals), then reference frame (instances)
  const { frame: componentsFrame, components } = await createTextComponentsFrame(styles);
  const textFrame = await createTextDisplayFrame(styles, components);

  componentsFrame.x = textFrame.x + textFrame.width + 100;
  componentsFrame.y = textFrame.y;

  // Color paint styles
  const colorResult = await createColorVariables(colorTokens);

  // Color components first (originals), then reference frame (instances)
  const { frame: colorComponentsFrame, components: colorComponents } =
    await createColorComponentsFrame(colorTokens);
  const colorFrame = await createColorDisplayFrame(colorTokens, colorComponents);

  colorComponentsFrame.x = componentsFrame.x + componentsFrame.width + 100;
  colorComponentsFrame.y = textFrame.y;

  colorFrame.x = colorComponentsFrame.x + colorComponentsFrame.width + 100;
  colorFrame.y = textFrame.y;

  figma.currentPage.selection = [textFrame, componentsFrame, colorComponentsFrame, colorFrame];
  figma.viewport.scrollAndZoomIntoView([textFrame, componentsFrame, colorComponentsFrame, colorFrame]);

  const allErrors = [...errors, ...colorResult.errors];

  let message = `Created ${created} of ${styles.length} text styles`;
  if (skipped > 0) {
    message += ` (${skipped} duplicates skipped)`;
  }
  message += ` · ${colorResult.created} color styles`;
  if (colorResult.skipped > 0) {
    message += ` (${colorResult.skipped} skipped)`;
  }
  if (allErrors.length > 0) {
    message += `\n\nErrors:\n• ${allErrors.join("\n• ")}`;
  }
  if (missingFonts.length > 0) {
    message += `\n\nMissing fonts (used ${FALLBACK_FONT.family} ${FALLBACK_FONT.style} as fallback):\n• ${missingFonts.join("\n• ")}`;
  }

  figma.closePlugin(message);
}

main();
