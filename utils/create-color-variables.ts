import type { ThemeColors } from "../types";
import hexToRgba from "./hex-to-rgba";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function createColorVariables(
  data: ThemeColors,
): Promise<{ created: number; skipped: number; errors: string[] }> {
  let created = 0;
  let skipped = 0;
  const errors: string[] = [];

  const existingNames = new Set(
    (await figma.getLocalPaintStylesAsync()).map((s) => s.name),
  );

  const entries = Object.entries(data);
  const total = entries.length * 2;
  let notice = figma.notify(`Creating color styles: 0 of ${total}…`, {
    timeout: Infinity,
  });

  for (const [name, value] of entries) {
    // Light style
    await delay(0);
    const lightName = `${name}/Light`;
    if (existingNames.has(lightName)) {
      skipped++;
    } else {
      try {
        const ps = figma.createPaintStyle();
        ps.name = lightName;
        if (value.description) ps.description = value.description;
        ps.paints = [{ type: "SOLID", color: hexToRgba(value.light) }];
        created++;
      } catch (e) {
        errors.push(`Failed to create "${lightName}": ${e}`);
      }
    }

    notice.cancel();
    notice = figma.notify(
      `Creating color styles: ${created + skipped} of ${total}…`,
      { timeout: Infinity },
    );

    // Dark style
    await delay(0);
    const darkName = `${name}/Dark`;
    if (existingNames.has(darkName)) {
      skipped++;
    } else {
      try {
        const ps = figma.createPaintStyle();
        ps.name = darkName;
        if (value.description) ps.description = value.description;
        ps.paints = [{ type: "SOLID", color: hexToRgba(value.dark) }];
        created++;
      } catch (e) {
        errors.push(`Failed to create "${darkName}": ${e}`);
      }
    }

    notice.cancel();
    notice = figma.notify(
      `Creating color styles: ${created + skipped} of ${total}…`,
      { timeout: Infinity },
    );
  }

  notice.cancel();
  return { created, skipped, errors };
}
