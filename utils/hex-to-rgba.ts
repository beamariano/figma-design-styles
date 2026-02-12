function hexToRgba(hex: string): RGB {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r: r / 255, g: g / 255, b: b / 255 };
}

export default hexToRgba;
