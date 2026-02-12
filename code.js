"use strict";
(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // models/sample.ts
  var SAMPLE_TEXT_STYLES = [
    {
      type: "TEXT",
      name: "Headings/H1 - Large",
      description: "Homepage hero sections main page titles",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 29.8,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 30,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Headings/H1 - Editorial",
      description: "Blog posts About page main headings",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 32,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 30,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Headings/H1 - Categories",
      description: "Category listing page titles",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 20.5,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 30,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Headings/H2 - Standard",
      description: "Section headings on homepage feature sections",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 20.5,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "PIXELS", value: 23.5 },
      paragraphIndent: 0,
      paragraphSpacing: 30,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Headings/H2 - Editorial",
      description: "Blog/About page section headings",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 24,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "PIXELS", value: 32 },
      paragraphIndent: 0,
      paragraphSpacing: 30,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Headings/H3 - Collections",
      description: "Homepage collection titles",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 16,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Headings/H3 - Card Titles",
      description: "Topics Languages Film titles on cards",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Regular" },
      fontSize: 26,
      letterSpacing: { unit: "PIXELS", value: 0.2 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Body & Paragraph/Body - Standard",
      description: "General page content descriptions",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Amulya", style: "Regular" },
      fontSize: 14,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "PIXELS", value: 21 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Body & Paragraph/Body - Editorial",
      description: "Blog posts About page content",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Amulya", style: "Medium" },
      fontSize: 16,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Body & Paragraph/Section Description",
      description: "Homepage section descriptions under H2 headings",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Arial", style: "Regular" },
      fontSize: 14,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "PIXELS", value: 22.4 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Navigation & Links/Navigation Text",
      description: "Main site navigation menu items",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Amulya", style: "Light" },
      fontSize: 14,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Navigation & Links/Teal Links",
      description: "Standard hyperlinks throughout site",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Amulya", style: "Regular" },
      fontSize: 12,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "UNDERLINE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Navigation & Links/Orange Links",
      description: "Accent links CTAs",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Amulya", style: "Regular" },
      fontSize: 12,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "UNDERLINE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Navigation & Links/Editorial Teal",
      description: "Blog/About page links",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Amulya", style: "Regular" },
      fontSize: 12,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "UNDERLINE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Navigation & Links/View All Button",
      description: "Section navigation links (top-right of sections)",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 14,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "TITLE",
      textDecoration: "UNDERLINE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Card Components/Card Title (Featured)",
      description: "Video/media card titles",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "SemiBold" },
      fontSize: 18,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "PIXELS", value: 23.4 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "UNDERLINE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Card Components/Card Title (Regular)",
      description: "Video/media card titles",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Regular" },
      fontSize: 15,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Metadata/Metadata - General",
      description: "Timestamps view counts secondary info",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Arial", style: "Regular" },
      fontSize: 12,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "PIXELS", value: 21 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Metadata/Card Metadata",
      description: "Video card user/country/views/time",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Arial", style: "Regular" },
      fontSize: 13,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "PIXELS", value: 18.2 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Buttons/Primary Button",
      description: "Main CTAs submit actions",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Medium" },
      fontSize: 14,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Font Families/Headings",
      description: "All Headings (H1-H6)",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Facultad", style: "Regular" },
      fontSize: 12,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    },
    {
      type: "TEXT",
      name: "Font Families/Body Text",
      description: "Body Text & Paragraphs",
      descriptionMarkdown: "",
      documentationLinks: [],
      fontName: { family: "Amulya", style: "Regular" },
      fontSize: 12,
      letterSpacing: { unit: "PERCENT", value: 0 },
      lineHeight: { unit: "AUTO", value: 0 },
      paragraphIndent: 0,
      paragraphSpacing: 0,
      listSpacing: 0,
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      leadingTrim: "NONE",
      hangingPunctuation: false,
      hangingList: false
    }
  ];

  // models/color-tokens.ts
  var SAMPLE_COLOR_TOKENS = {
    primary: {
      light: "#dd0e0e",
      dark: "#eebcbc",
      description: "Primary brand color used for key UI elements"
    },
    background: {
      light: "#f5f5f5",
      dark: "#111111",
      description: "Default page and surface background"
    }
  };

  // utils/create-text-styles.ts
  var FALLBACK_FONT = { family: "Inter", style: "Regular" };
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function createTextStyles(styles) {
    return __async(this, null, function* () {
      let created = 0;
      let skipped = 0;
      const missingFontSet = /* @__PURE__ */ new Set();
      const errors = [];
      yield figma.loadFontAsync(FALLBACK_FONT);
      const existingNames = new Set(
        (yield figma.getLocalTextStylesAsync()).map((s) => s.name)
      );
      const total = styles.length;
      let notice = figma.notify(`Creating text styles: 0 of ${total}\u2026`, {
        timeout: Infinity
      });
      for (const def of styles) {
        yield delay(0);
        if (existingNames.has(def.name)) {
          skipped++;
          notice.cancel();
          notice = figma.notify(
            `Creating text styles: ${created} of ${total} (${skipped} skipped)\u2026`,
            { timeout: Infinity }
          );
          continue;
        }
        let fontToUse = def.fontName;
        try {
          yield figma.loadFontAsync(def.fontName);
        } catch (e) {
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
          if (def.lineHeight.unit === "AUTO") {
            ts.lineHeight = { unit: "AUTO" };
          } else {
            ts.lineHeight = {
              unit: def.lineHeight.unit,
              value: def.lineHeight.value
            };
          }
          ts.paragraphIndent = def.paragraphIndent;
          ts.paragraphSpacing = def.paragraphSpacing;
          ts.textCase = def.textCase;
          ts.textDecoration = def.textDecoration;
          try {
            ts.listSpacing = def.listSpacing;
          } catch (e) {
          }
          try {
            ts.leadingTrim = def.leadingTrim;
          } catch (e) {
          }
          try {
            ts.hangingPunctuation = def.hangingPunctuation;
          } catch (e) {
          }
          try {
            ts.hangingList = def.hangingList;
          } catch (e) {
          }
          created++;
        } catch (e) {
          errors.push(`Failed to create "${def.name}": ${e}`);
        }
        notice.cancel();
        notice = figma.notify(`Creating text styles: ${created} of ${total}\u2026`, {
          timeout: Infinity
        });
      }
      notice.cancel();
      return { created, skipped, errors, missingFonts: [...missingFontSet] };
    });
  }

  // utils/create-text-display-frame.ts
  function formatLineHeight(lh) {
    if (lh.unit === "AUTO") return "Auto";
    if (lh.unit === "PERCENT") return `${lh.value}%`;
    return `${lh.value}px`;
  }
  function formatLetterSpacing(ls) {
    if (ls.value === 0) return "0";
    if (ls.unit === "PERCENT") return `${ls.value}%`;
    return `${ls.value}px`;
  }
  function formatDetails(style) {
    const parts = [
      `${style.fontName.family} ${style.fontName.style}`,
      `${style.fontSize}px`,
      `LH: ${formatLineHeight(style.lineHeight)}`,
      `LS: ${formatLetterSpacing(style.letterSpacing)}`
    ];
    if (style.textCase !== "ORIGINAL") parts.push(style.textCase);
    if (style.textDecoration !== "NONE") parts.push(style.textDecoration);
    if (style.paragraphSpacing > 0)
      parts.push(`P-Space: ${style.paragraphSpacing}px`);
    if (style.paragraphIndent > 0)
      parts.push(`P-Indent: ${style.paragraphIndent}px`);
    if (style.listSpacing > 0) parts.push(`List: ${style.listSpacing}px`);
    return parts.join("  \xB7  ");
  }
  function createTextDisplayFrame(styles, components) {
    return __async(this, null, function* () {
      const UI_FONT3 = { family: "Inter", style: "Regular" };
      const UI_FONT_BOLD3 = { family: "Inter", style: "Bold" };
      yield Promise.allSettled([
        figma.loadFontAsync(UI_FONT3),
        figma.loadFontAsync(UI_FONT_BOLD3)
      ]);
      const frame = figma.createFrame();
      frame.name = "Text Styles Reference";
      frame.layoutMode = "VERTICAL";
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
      frame.paddingTop = 48;
      frame.paddingBottom = 48;
      frame.paddingLeft = 48;
      frame.paddingRight = 48;
      frame.itemSpacing = 40;
      frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
      const title = figma.createText();
      title.fontName = UI_FONT_BOLD3;
      title.characters = "Text Styles";
      title.fontSize = 32;
      title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
      frame.appendChild(title);
      const divider = figma.createRectangle();
      divider.name = "Divider";
      divider.resize(600, 1);
      divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
      frame.appendChild(divider);
      for (const style of styles) {
        const component = components.get(style.name);
        if (!component) continue;
        const row = figma.createFrame();
        row.name = style.name;
        row.layoutMode = "VERTICAL";
        row.primaryAxisSizingMode = "AUTO";
        row.counterAxisSizingMode = "AUTO";
        row.itemSpacing = 6;
        row.fills = [];
        const instance = component.createInstance();
        row.appendChild(instance);
        if (style.description) {
          const desc = figma.createText();
          desc.fontName = UI_FONT3;
          desc.fontSize = 12;
          desc.characters = style.description;
          desc.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
          row.appendChild(desc);
        }
        const details = figma.createText();
        details.fontName = UI_FONT3;
        details.fontSize = 11;
        details.characters = formatDetails(style);
        details.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
        row.appendChild(details);
        frame.appendChild(row);
      }
      figma.currentPage.appendChild(frame);
      return frame;
    });
  }

  // utils/hex-to-rgba.ts
  function hexToRgba(hex) {
    const cleaned = hex.replace("#", "");
    const bigint = parseInt(cleaned, 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return { r: r / 255, g: g / 255, b: b / 255 };
  }
  var hex_to_rgba_default = hexToRgba;

  // utils/create-color-variables.ts
  function delay2(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function createColorVariables(data) {
    return __async(this, null, function* () {
      let created = 0;
      let skipped = 0;
      const errors = [];
      const existingNames = new Set(
        (yield figma.getLocalPaintStylesAsync()).map((s) => s.name)
      );
      const entries = Object.entries(data);
      const total = entries.length * 2;
      let notice = figma.notify(`Creating color styles: 0 of ${total}\u2026`, {
        timeout: Infinity
      });
      for (const [name, value] of entries) {
        yield delay2(0);
        const lightName = `${name}/Light`;
        if (existingNames.has(lightName)) {
          skipped++;
        } else {
          try {
            const ps = figma.createPaintStyle();
            ps.name = lightName;
            if (value.description) ps.description = value.description;
            ps.paints = [{ type: "SOLID", color: hex_to_rgba_default(value.light) }];
            created++;
          } catch (e) {
            errors.push(`Failed to create "${lightName}": ${e}`);
          }
        }
        notice.cancel();
        notice = figma.notify(
          `Creating color styles: ${created + skipped} of ${total}\u2026`,
          { timeout: Infinity }
        );
        yield delay2(0);
        const darkName = `${name}/Dark`;
        if (existingNames.has(darkName)) {
          skipped++;
        } else {
          try {
            const ps = figma.createPaintStyle();
            ps.name = darkName;
            if (value.description) ps.description = value.description;
            ps.paints = [{ type: "SOLID", color: hex_to_rgba_default(value.dark) }];
            created++;
          } catch (e) {
            errors.push(`Failed to create "${darkName}": ${e}`);
          }
        }
        notice.cancel();
        notice = figma.notify(
          `Creating color styles: ${created + skipped} of ${total}\u2026`,
          { timeout: Infinity }
        );
      }
      notice.cancel();
      return { created, skipped, errors };
    });
  }

  // utils/create-color-components-frame.ts
  var SWATCH_SIZE = 64;
  var SWATCH_GAP = 16;
  var FRAME_PADDING = 48;
  var UI_FONT_BOLD = { family: "Inter", style: "Bold" };
  var UI_FONT = { family: "Inter", style: "Regular" };
  function createSwatchComponent(hex, label) {
    const rgb = hex_to_rgba_default(hex);
    const wrapper = figma.createFrame();
    wrapper.name = label;
    wrapper.layoutMode = "VERTICAL";
    wrapper.primaryAxisSizingMode = "AUTO";
    wrapper.counterAxisSizingMode = "AUTO";
    wrapper.itemSpacing = 6;
    wrapper.fills = [];
    const rect = figma.createRectangle();
    rect.name = `${label} swatch`;
    rect.resize(SWATCH_SIZE, SWATCH_SIZE);
    rect.cornerRadius = 8;
    rect.fills = [{ type: "SOLID", color: rgb }];
    rect.strokes = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
    rect.strokeWeight = 1;
    wrapper.appendChild(rect);
    const text = figma.createText();
    text.fontName = UI_FONT;
    text.fontSize = 11;
    text.characters = hex.toUpperCase();
    text.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
    wrapper.appendChild(text);
    const component = figma.createComponentFromNode(wrapper);
    component.name = label;
    return component;
  }
  function createColorComponentsFrame(tokens) {
    return __async(this, null, function* () {
      yield Promise.allSettled([
        figma.loadFontAsync(UI_FONT),
        figma.loadFontAsync(UI_FONT_BOLD)
      ]);
      const frame = figma.createFrame();
      frame.name = "Color Components";
      frame.layoutMode = "VERTICAL";
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
      frame.paddingTop = FRAME_PADDING;
      frame.paddingBottom = FRAME_PADDING;
      frame.paddingLeft = FRAME_PADDING;
      frame.paddingRight = FRAME_PADDING;
      frame.itemSpacing = 32;
      frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
      const title = figma.createText();
      title.fontName = UI_FONT_BOLD;
      title.characters = "Color Components";
      title.fontSize = 32;
      title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
      frame.appendChild(title);
      const divider = figma.createRectangle();
      divider.name = "Divider";
      divider.resize(600, 1);
      divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
      frame.appendChild(divider);
      const components = /* @__PURE__ */ new Map();
      for (const [name, value] of Object.entries(tokens)) {
        const row = figma.createFrame();
        row.name = name;
        row.layoutMode = "HORIZONTAL";
        row.primaryAxisSizingMode = "AUTO";
        row.counterAxisSizingMode = "AUTO";
        row.itemSpacing = SWATCH_GAP;
        row.fills = [];
        const lightComp = createSwatchComponent(value.light, `${name}/Light`);
        const darkComp = createSwatchComponent(value.dark, `${name}/Dark`);
        row.appendChild(lightComp);
        row.appendChild(darkComp);
        frame.appendChild(row);
        components.set(name, { light: lightComp, dark: darkComp });
      }
      figma.currentPage.appendChild(frame);
      return { frame, components };
    });
  }

  // utils/create-color-display-frame.ts
  var UI_FONT2 = { family: "Inter", style: "Regular" };
  var UI_FONT_BOLD2 = { family: "Inter", style: "Bold" };
  var FRAME_PADDING2 = 48;
  var SWATCH_GAP2 = 16;
  function createColorDisplayFrame(tokens, components) {
    return __async(this, null, function* () {
      yield Promise.allSettled([
        figma.loadFontAsync(UI_FONT2),
        figma.loadFontAsync(UI_FONT_BOLD2)
      ]);
      const frame = figma.createFrame();
      frame.name = "Color Variables Reference";
      frame.layoutMode = "VERTICAL";
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
      frame.paddingTop = FRAME_PADDING2;
      frame.paddingBottom = FRAME_PADDING2;
      frame.paddingLeft = FRAME_PADDING2;
      frame.paddingRight = FRAME_PADDING2;
      frame.itemSpacing = 40;
      frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
      const title = figma.createText();
      title.fontName = UI_FONT_BOLD2;
      title.characters = "Color Variables";
      title.fontSize = 32;
      title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
      frame.appendChild(title);
      const divider = figma.createRectangle();
      divider.name = "Divider";
      divider.resize(600, 1);
      divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
      frame.appendChild(divider);
      for (const [name, value] of Object.entries(tokens)) {
        const pair = components.get(name);
        if (!pair) continue;
        const row = figma.createFrame();
        row.name = name;
        row.layoutMode = "VERTICAL";
        row.primaryAxisSizingMode = "AUTO";
        row.counterAxisSizingMode = "AUTO";
        row.itemSpacing = 12;
        row.fills = [];
        const label = figma.createText();
        label.fontName = UI_FONT_BOLD2;
        label.fontSize = 14;
        label.characters = name;
        label.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        row.appendChild(label);
        if (value.description) {
          const desc = figma.createText();
          desc.fontName = UI_FONT2;
          desc.fontSize = 12;
          desc.characters = value.description;
          desc.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
          row.appendChild(desc);
        }
        const swatchRow = figma.createFrame();
        swatchRow.name = `${name} swatches`;
        swatchRow.layoutMode = "HORIZONTAL";
        swatchRow.primaryAxisSizingMode = "AUTO";
        swatchRow.counterAxisSizingMode = "AUTO";
        swatchRow.itemSpacing = SWATCH_GAP2;
        swatchRow.fills = [];
        swatchRow.appendChild(pair.light.createInstance());
        swatchRow.appendChild(pair.dark.createInstance());
        row.appendChild(swatchRow);
        const values = figma.createText();
        values.fontName = UI_FONT2;
        values.fontSize = 11;
        values.characters = `Light: ${value.light.toUpperCase()}  \xB7  Dark: ${value.dark.toUpperCase()}`;
        values.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
        row.appendChild(values);
        frame.appendChild(row);
      }
      figma.currentPage.appendChild(frame);
      return frame;
    });
  }

  // utils/create-text-components-frame.ts
  function uniqueFonts(styles) {
    const seen = /* @__PURE__ */ new Set();
    const fonts = [];
    for (const s of styles) {
      const key = `${s.fontName.family}::${s.fontName.style}`;
      if (!seen.has(key)) {
        seen.add(key);
        fonts.push(s.fontName);
      }
    }
    return fonts;
  }
  function createTextComponentsFrame(styles) {
    return __async(this, null, function* () {
      const UI_FONT_BOLD3 = { family: "Inter", style: "Bold" };
      const allFonts = uniqueFonts(styles);
      allFonts.push(UI_FONT_BOLD3);
      const loadResults = yield Promise.allSettled(
        allFonts.map((f) => figma.loadFontAsync(f))
      );
      const loadedFonts = /* @__PURE__ */ new Set();
      allFonts.forEach((f, i) => {
        if (loadResults[i].status === "fulfilled") {
          loadedFonts.add(`${f.family}::${f.style}`);
        }
      });
      const hasFontLoaded = (f) => loadedFonts.has(`${f.family}::${f.style}`);
      const frame = figma.createFrame();
      frame.name = "Text Style Components";
      frame.layoutMode = "VERTICAL";
      frame.primaryAxisSizingMode = "AUTO";
      frame.counterAxisSizingMode = "AUTO";
      frame.paddingTop = 48;
      frame.paddingBottom = 48;
      frame.paddingLeft = 48;
      frame.paddingRight = 48;
      frame.itemSpacing = 32;
      frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
      if (hasFontLoaded(UI_FONT_BOLD3)) {
        const title = figma.createText();
        title.fontName = UI_FONT_BOLD3;
        title.characters = "Text Style Components";
        title.fontSize = 32;
        title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        frame.appendChild(title);
      }
      const divider = figma.createRectangle();
      divider.name = "Divider";
      divider.resize(600, 1);
      divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
      frame.appendChild(divider);
      const components = /* @__PURE__ */ new Map();
      for (const style of styles) {
        if (!hasFontLoaded(style.fontName)) continue;
        const preview = figma.createText();
        preview.fontName = style.fontName;
        preview.fontSize = style.fontSize;
        preview.characters = style.name;
        preview.letterSpacing = style.letterSpacing;
        if (style.lineHeight.unit !== "AUTO") {
          preview.lineHeight = style.lineHeight;
        }
        preview.textCase = style.textCase;
        preview.textDecoration = style.textDecoration;
        preview.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        const component = figma.createComponentFromNode(preview);
        component.name = style.name;
        frame.appendChild(component);
        components.set(style.name, component);
      }
      figma.currentPage.appendChild(frame);
      return { frame, components };
    });
  }

  // code.ts
  function main() {
    return __async(this, null, function* () {
      const styles = SAMPLE_TEXT_STYLES;
      const colorTokens = SAMPLE_COLOR_TOKENS;
      const { created, skipped, errors, missingFonts } = yield createTextStyles(styles);
      console.log(`Created ${created} text styles (${skipped} skipped)`);
      if (errors.length > 0) {
        console.error("Errors:", errors);
      }
      const { frame: componentsFrame, components } = yield createTextComponentsFrame(styles);
      const textFrame = yield createTextDisplayFrame(styles, components);
      componentsFrame.x = textFrame.x + textFrame.width + 100;
      componentsFrame.y = textFrame.y;
      const colorResult = yield createColorVariables(colorTokens);
      const { frame: colorComponentsFrame, components: colorComponents } = yield createColorComponentsFrame(colorTokens);
      const colorFrame = yield createColorDisplayFrame(colorTokens, colorComponents);
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
      message += ` \xB7 ${colorResult.created} color styles`;
      if (colorResult.skipped > 0) {
        message += ` (${colorResult.skipped} skipped)`;
      }
      if (allErrors.length > 0) {
        message += `

Errors:
\u2022 ${allErrors.join("\n\u2022 ")}`;
      }
      if (missingFonts.length > 0) {
        message += `

Missing fonts (used ${FALLBACK_FONT.family} ${FALLBACK_FONT.style} as fallback):
\u2022 ${missingFonts.join("\n\u2022 ")}`;
      }
      figma.closePlugin(message);
    });
  }
  main();
})();
