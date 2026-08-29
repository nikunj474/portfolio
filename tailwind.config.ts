import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Replacing rather than extending the palette: every colour on this site is
    // one of five values, and an accidental slate-500 should fail loudly.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      cream: {
        DEFAULT: "#f0ebe1", // page ground
        deep: "#ece6d8",    // alternating sections, card fills
        pale: "#f6f3ec",    // raised surfaces
      },
      charcoal: {
        DEFAULT: "#1a1a1a", // body text, every 1px rule
        soft: "#4a4744",    // secondary prose
        mute: "#7a7570",    // metadata, timeline dates
      },
      terracotta: {
        DEFAULT: "#d9534f", // accent dots, active underlines
        deep: "#b8403c",    // hover
        wash: "#f5e2e0",    // tag fills
      },
    },
    fontFamily: {
      // Wired to next/font CSS variables declared in app/layout.tsx.
      serif: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
      sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
    },
    extend: {
      fontSize: {
        // Metadata sizes carry their tracking with them so no call site forgets it.
        meta: ["0.6875rem", { lineHeight: "1.1rem", letterSpacing: "0.16em" }],
        "meta-lg": ["0.75rem", { lineHeight: "1.2rem", letterSpacing: "0.14em" }],
        display: ["clamp(3rem, 11vw, 8.5rem)", { lineHeight: "0.86", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2.25rem, 6vw, 4rem)", { lineHeight: "0.95", letterSpacing: "-0.015em" }],
      },
      borderColor: {
        DEFAULT: "#1a1a1a",
      },
      maxWidth: {
        shell: "84rem",
        prose: "38rem",
      },
      spacing: {
        nav: "4.25rem", // sticky nav height, also the scroll-margin offset
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
