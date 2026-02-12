/**
 * Figma TextStyle defaults, constants, validation, and factory functions
 */

import type { TextStyleModel } from "../types";

// ===== Default Values =====

export const DEFAULT_TEXT_STYLE: TextStyleModel = {
  // IDENTITY
  type: "TEXT",
  name: "New Text Style",
  description: "",
  descriptionMarkdown: "",
  documentationLinks: [],

  // FONT (Figma defaults)
  fontName: {
    family: "Inter",
    style: "Regular",
  },
  fontSize: 12,

  // SPACING
  letterSpacing: {
    unit: "PERCENT",
    value: 0,
  },
  lineHeight: {
    unit: "AUTO",
    value: 0, // Ignored when AUTO
  },
  paragraphIndent: 0,
  paragraphSpacing: 0,
  listSpacing: 0,

  // TEXT STYLING
  textCase: "ORIGINAL",
  textDecoration: "NONE",

  // ADVANCED
  leadingTrim: "NONE",
  hangingPunctuation: false,
  hangingList: false,
};

// ===== Common Font Styles =====

export const COMMON_FONT_STYLES = [
  "Thin",
  "ExtraLight",
  "Light",
  "Regular",
  "Medium",
  "SemiBold",
  "Bold",
  "ExtraBold",
  "Black",
  "Italic",
  "Bold Italic",
] as const;

// ===== Validation =====

export function validateTextStyle(style: Partial<TextStyleModel>): string[] {
  const errors: string[] = [];

  if (!style.name || style.name.trim() === "") {
    errors.push("Name is required");
  }

  if (style.fontSize !== undefined && style.fontSize <= 0) {
    errors.push("Font size must be greater than 0");
  }

  if (
    style.letterSpacing?.unit === "PERCENT" &&
    Math.abs(style.letterSpacing.value) > 500
  ) {
    errors.push("Letter spacing percent should be between -500% and 500%");
  }

  if (
    style.lineHeight?.unit !== "AUTO" &&
    style.lineHeight?.value !== undefined &&
    style.lineHeight.value < 0
  ) {
    errors.push("Line height cannot be negative");
  }

  if (style.paragraphIndent !== undefined && style.paragraphIndent < 0) {
    errors.push("Paragraph indent cannot be negative");
  }

  if (style.paragraphSpacing !== undefined && style.paragraphSpacing < 0) {
    errors.push("Paragraph spacing cannot be negative");
  }

  if (style.listSpacing !== undefined && style.listSpacing < 0) {
    errors.push("List spacing cannot be negative");
  }

  return errors;
}

// ===== Factory =====

export function createTextStyle(
  overrides: Partial<TextStyleModel> = {}
): TextStyleModel {
  return {
    ...DEFAULT_TEXT_STYLE,
    ...overrides,
    fontName: {
      ...DEFAULT_TEXT_STYLE.fontName,
      ...(overrides.fontName || {}),
    },
    letterSpacing: {
      ...DEFAULT_TEXT_STYLE.letterSpacing,
      ...(overrides.letterSpacing || {}),
    },
    lineHeight: {
      ...DEFAULT_TEXT_STYLE.lineHeight,
      ...(overrides.lineHeight || {}),
    },
  };
}
