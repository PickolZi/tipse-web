import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        background2: "var(--color-background2)",
        foreground: "var(--color-foreground)",
      },
    },
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
      mono: ["JetBrains Mono", ...fontFamily.mono],
    },
  },
  plugins: [],
} satisfies Config;
