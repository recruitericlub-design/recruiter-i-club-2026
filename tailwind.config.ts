import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        card: "rgba(15, 23, 42, 0.75)",
        'warm-paper': '#fbfaf7',
        'ink-black': '#0f172a',
        'slate-gray': '#475569',
        'corporate-navy': '#0b192c',
        'emerald-growth': '#059669',
        'deep-emerald': '#047857',
        'gold-accent': '#d97706',
        'gold-light': '#fef3c7',
        ukraine: {
          blue: "#0057b7",
          gold: "#ffd700",
          amber: "#f59e0b",
        },
      },
      borderRadius: {
        'button': '9999px',
        'card': '1.25rem',
        'hero': '2rem',
      },
      fontFamily: {
        sans: ["var(--font-sans)", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
