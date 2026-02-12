import type { ThemeColors } from "../types";

/**
 * ---------------------------------------
 * 1. PRIMITIVE TOKENS (Raw Hex Values)
 * ---------------------------------------
 * Single source of truth. Never use hex
 * anywhere else in the system.
 */
const palette = {
  white: "#FFFFFF",
  black: "#000000",

  gray50: "#F5F5F5",
  gray200: "#E5E5E5",
  gray300: "#CCCCCC",
  gray900: "#111111",

  navy900: "#101A24",
  navy800: "#1E2D37",

  teal600: "#347E8A",
  teal500: "#659BA0",
  teal700: "#026690",

  orange600: "#D97706",
  orange500: "#E69123",

  gray600: "#787878",
  blueGray400: "#869EA5",
  blueGray500: "#646E73",
  blueGray300: "#BAD8DD",
} as const;

/**
 * ---------------------------------------
 * 2. ALIAS TOKENS (Brand Naming Layer)
 * ---------------------------------------
 * Brand or legacy names referencing palette.
 */
const aliases = {
  neptune: palette.teal500,
  jaffaLight: palette.orange600,
  jaffaDark: palette.orange500,
  bahamaBlue: palette.teal700,
  ziggurat: palette.blueGray300,
  elephant: palette.navy900,
  ebony: palette.navy800,
  codGray: palette.gray900,
} as const;

/**
 * ---------------------------------------
 * 3. SEMANTIC TOKENS (Usage Layer)
 * ---------------------------------------
 * These are what the application uses.
 */
export const SAMPLE_COLOR_TOKENS: ThemeColors = {
  // Background
  background: {
    light: palette.gray50,
    dark: palette.navy900,
    description: "Primary body background",
  },

  featuredSection: {
    light: palette.navy800,
    dark: palette.navy800,
    description: "Dark featured sections and hero backgrounds",
  },

  // Text
  textPrimary: {
    light: palette.gray900,
    dark: palette.white,
    description: "Primary text for headings and body content",
  },

  textSecondary: {
    light: palette.gray600,
    dark: palette.blueGray400,
    description: "Secondary text for metadata and descriptions",
  },

  textNavigation: {
    light: palette.blueGray500,
    dark: palette.blueGray300,
    description: "Navigation menu text",
  },

  textWhiteHeading: {
    light: palette.white,
    dark: palette.white,
    description: "White headings on dark backgrounds (H2)",
  },

  // Links & Accents
  linkTeal: {
    light: palette.teal600,
    dark: palette.teal500,
    description: "Primary teal links",
  },

  linkOrange: {
    light: palette.orange600,
    dark: palette.orange500,
    description: "Orange accent links",
  },

  editorialTeal: {
    light: palette.teal700,
    dark: palette.teal700,
    description: "Editorial teal for blog/about pages",
  },

  // Buttons
  buttonBackground: {
    light: palette.orange600,
    dark: palette.orange600,
    description: "Button background color",
  },

  buttonText: {
    light: palette.white,
    dark: palette.white,
    description: "Button text color",
  },

  // Surfaces
  gallery: {
    light: palette.gray50,
    dark: palette.gray50,
    description: "Light surface - matches body background light mode",
  },

  mercury: {
    light: palette.gray200,
    dark: palette.gray200,
    description: "Light gray for dividers",
  },

  silver: {
    light: palette.gray300,
    dark: palette.gray300,
    description: "Medium gray for inactive states",
  },

  // Brand Aliases (Optional exposure)
  neptune: {
    light: aliases.neptune,
    dark: aliases.neptune,
    description: "Neptune teal accent",
  },

  jaffa: {
    light: aliases.jaffaLight,
    dark: aliases.jaffaDark,
    description: "Jaffa orange accent",
  },

  bahamaBlue: {
    light: aliases.bahamaBlue,
    dark: aliases.bahamaBlue,
    description: "Deep blue accent",
  },

  ziggurat: {
    light: aliases.ziggurat,
    dark: aliases.ziggurat,
    description: "Light blue-gray for borders and navigation",
  },

  elephant: {
    light: aliases.elephant,
    dark: aliases.elephant,
    description: "Deep navy",
  },

  ebony: {
    light: aliases.ebony,
    dark: aliases.ebony,
    description: "Dark surface",
  },

  codGray: {
    light: aliases.codGray,
    dark: aliases.codGray,
    description: "Very dark gray",
  },

  // Utility
  white: {
    light: palette.white,
    dark: palette.white,
    description: "Pure white",
  },

  black: {
    light: palette.black,
    dark: palette.black,
    description: "Pure black",
  },
};
