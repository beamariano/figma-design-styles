export interface Color {
  r: number; // 0 → 1
  g: number; // 0 → 1
  b: number; // 0 → 1
  a?: number; // 0 → 1 (optional, defaults to 1)
}

export type ThemeColors = {
  [name: string]: {
    light: string;
    dark: string;
    description?: string;
  };
};
