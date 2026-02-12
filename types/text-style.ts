/**
 * Figma TextStyle Type Definitions
 * Based on official Figma Plugin API
 */

// ===== Enums =====

export type TextCase = "ORIGINAL" | "UPPER" | "LOWER" | "TITLE";
export type TextDecoration = "NONE" | "UNDERLINE" | "STRIKETHROUGH";
export type LeadingTrim = "CAP_HEIGHT" | "NONE";
export type LetterSpacingUnit = "PIXELS" | "PERCENT";
export type LineHeightUnit = "PIXELS" | "PERCENT" | "AUTO";

// ===== Value Objects =====

export interface FontName {
  family: string;
  style: string; // e.g., "Regular", "Bold", "Italic", "SemiBold"
}

export interface LetterSpacing {
  unit: LetterSpacingUnit;
  value: number;
}

export interface LineHeight {
  unit: LineHeightUnit;
  value: number; // Ignored if unit is AUTO
}

export interface DocumentationLink {
  url: string;
  title?: string;
}

export interface VariableAlias {
  type: "VARIABLE_ALIAS";
  id: string;
}

export interface TextStyleBoundVariables {
  fontSize?: VariableAlias;
  letterSpacing?: VariableAlias;
  lineHeight?: VariableAlias;
  paragraphIndent?: VariableAlias;
  paragraphSpacing?: VariableAlias;
}

// ===== Main Model =====

export interface TextStyleModel {
  // IDENTITY
  readonly type: "TEXT";
  name: string;
  description: string;
  descriptionMarkdown: string;
  documentationLinks: DocumentationLink[];

  // FONT
  fontName: FontName;
  fontSize: number;

  // SPACING
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;
  paragraphIndent: number;
  paragraphSpacing: number;
  listSpacing: number;

  // TEXT STYLING
  textCase: TextCase;
  textDecoration: TextDecoration;

  // ADVANCED
  leadingTrim: LeadingTrim;
  hangingPunctuation: boolean;
  hangingList: boolean;

  // VARIABLES
  boundVariables?: TextStyleBoundVariables;
}
