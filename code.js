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

  // code.ts
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
  var FALLBACK_FONT = { family: "Inter", style: "Regular" };
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function createFigmaTextStyles(styles) {
    return __async(this, null, function* () {
      let created = 0;
      const missingFontSet = /* @__PURE__ */ new Set();
      const errors = [];
      yield figma.loadFontAsync(FALLBACK_FONT);
      const total = styles.length;
      let notice = figma.notify(`Creating text styles: 0 of ${total}\u2026`, {
        timeout: Infinity
      });
      for (const def of styles) {
        yield delay(0);
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
      return { created, errors, missingFonts: [...missingFontSet] };
    });
  }
  function createDisplayFrame(styles) {
    return __async(this, null, function* () {
      const UI_FONT = { family: "Inter", style: "Regular" };
      const UI_FONT_BOLD = { family: "Inter", style: "Bold" };
      const allFonts = uniqueFonts(styles);
      allFonts.push(UI_FONT, UI_FONT_BOLD);
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
      if (hasFontLoaded(UI_FONT_BOLD)) {
        const title = figma.createText();
        title.fontName = UI_FONT_BOLD;
        title.characters = "Text Styles";
        title.fontSize = 32;
        title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        frame.appendChild(title);
      }
      const divider = figma.createRectangle();
      divider.name = "Divider";
      divider.resize(600, 1);
      divider.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.85 } }];
      frame.appendChild(divider);
      for (const style of styles) {
        const styleFont = style.fontName;
        const canShowPreview = hasFontLoaded(styleFont);
        const canShowDetails = hasFontLoaded(UI_FONT);
        if (!canShowPreview && !canShowDetails) continue;
        const row = figma.createFrame();
        row.name = style.name;
        row.layoutMode = "VERTICAL";
        row.primaryAxisSizingMode = "AUTO";
        row.counterAxisSizingMode = "AUTO";
        row.itemSpacing = 6;
        row.fills = [];
        if (canShowPreview) {
          const preview = figma.createText();
          preview.fontName = styleFont;
          preview.fontSize = style.fontSize;
          preview.characters = style.name;
          preview.letterSpacing = style.letterSpacing;
          if (style.lineHeight.unit !== "AUTO") {
            preview.lineHeight = style.lineHeight;
          }
          preview.textCase = style.textCase;
          preview.textDecoration = style.textDecoration;
          preview.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
          row.appendChild(preview);
          const textComponent = figma.createComponentFromNode(preview);
          textComponent.name = style.name;
          row.appendChild(textComponent);
        }
        if (canShowDetails && style.description) {
          const desc = figma.createText();
          desc.fontName = UI_FONT;
          desc.fontSize = 12;
          desc.characters = style.description;
          desc.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
          row.appendChild(desc);
        }
        if (canShowDetails) {
          const details = figma.createText();
          details.fontName = UI_FONT;
          details.fontSize = 11;
          details.characters = formatDetails(style);
          details.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
          row.appendChild(details);
        }
        frame.appendChild(row);
      }
      figma.currentPage.appendChild(frame);
      return frame;
    });
  }
  function main() {
    return __async(this, null, function* () {
      const styles = SAMPLE_TEXT_STYLES;
      const { created, errors, missingFonts } = yield createFigmaTextStyles(styles);
      console.log(`Created ${created} text styles`);
      if (errors.length > 0) {
        console.error("Errors:", errors);
      }
      const frame = yield createDisplayFrame(styles);
      figma.currentPage.selection = [frame];
      figma.viewport.scrollAndZoomIntoView([frame]);
      let message = `Created ${created} of ${styles.length} text styles`;
      if (errors.length > 0) {
        message += `

Errors:
\u2022 ${errors.join("\n\u2022 ")}`;
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
