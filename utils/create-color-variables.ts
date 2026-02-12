import type { ThemeColors } from "../types";
import hexToRgba from "./hex-to-rgba";

function createColorVariables(data: ThemeColors) {
  // 1️⃣ Create collection
  const collection = figma.variables.createVariableCollection("Design Tokens");

  // 2️⃣ Rename default mode → Light
  collection.renameMode(collection.modes[0].modeId, "Light");
  const lightModeId = collection.modes[0].modeId;

  // 3️⃣ Add Dark mode
  const darkModeId = collection.addMode("Dark");

  // 4️⃣ Create variables
  const entries = Object.entries(data);
  const total = entries.length;
  let created = 0;

  let notice = figma.notify(`Creating color variables: 0 of ${total}…`, {
    timeout: Infinity,
  });

  for (const [name, value] of entries) {
    const variable = figma.variables.createVariable(
      name,
      collection.id,
      "COLOR",
    );

    // 5️⃣ Assign values per mode
    variable.setValueForMode(lightModeId, hexToRgba(value.light));
    variable.setValueForMode(darkModeId, hexToRgba(value.dark));

    created++;
    notice.cancel();
    notice = figma.notify(`Creating color variables: ${created} of ${total}…`, {
      timeout: Infinity,
    });
  }

  notice.cancel();
}

export default createColorVariables;
