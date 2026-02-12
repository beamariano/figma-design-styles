import type { TextStyleModel, FontName } from "../types";

const FALLBACK_FONT: FontName = { family: "Inter", style: "Regular" };

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { FALLBACK_FONT };

export default async function createTextStyles(
  styles: TextStyleModel[],
): Promise<{ created: number; skipped: number; errors: string[]; missingFonts: string[] }> {
  let created = 0;
  let skipped = 0;
  const missingFontSet = new Set<string>();
  const errors: string[] = [];

  // Pre-load the fallback font
  await figma.loadFontAsync(FALLBACK_FONT);

  // Build a set of existing style names to skip duplicates
  const existingNames = new Set(
    (await figma.getLocalTextStylesAsync()).map((s) => s.name),
  );

  const total = styles.length;
  let notice = figma.notify(`Creating text styles: 0 of ${total}…`, {
    timeout: Infinity,
  });

  for (const def of styles) {
    // Yield to let the UI thread render notification updates
    await delay(0);

    if (existingNames.has(def.name)) {
      skipped++;
      notice.cancel();
      notice = figma.notify(
        `Creating text styles: ${created} of ${total} (${skipped} skipped)…`,
        { timeout: Infinity },
      );
      continue;
    }

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

  return { created, skipped, errors, missingFonts: [...missingFontSet] };
}
