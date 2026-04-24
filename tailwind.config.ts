import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          0: "oklch(99% 0 0 / <alpha-value>)",
          50: "oklch(96% 0 0 / <alpha-value>)",
          100: "oklch(92% 0 0 / <alpha-value>)",
          200: "oklch(82% 0 0 / <alpha-value>)",
          300: "oklch(68% 0 0 / <alpha-value>)",
          400: "oklch(54% 0 0 / <alpha-value>)",
          500: "oklch(42% 0 0 / <alpha-value>)",
          600: "oklch(30% 0 0 / <alpha-value>)",
          700: "oklch(20% 0 0 / <alpha-value>)",
          800: "oklch(13% 0 0 / <alpha-value>)",
          900: "oklch(8% 0 0 / <alpha-value>)",
          950: "oklch(4% 0 0 / <alpha-value>)",
          1000: "oklch(2% 0 0 / <alpha-value>)",
        },
        bone: "oklch(95.5% 0.005 80 / <alpha-value>)",
        cream: "oklch(96.5% 0.012 80 / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Utopia-style fluid scale — clamp(min, preferred, max)
        "step--2": "clamp(0.6944rem, 0.6794rem + 0.0750vi, 0.7378rem)",
        "step--1": "clamp(0.8333rem, 0.8043rem + 0.1449vi, 0.9173rem)",
        "step-0": "clamp(1.0000rem, 0.9519rem + 0.2404vi, 1.1394rem)",
        "step-1": "clamp(1.2000rem, 1.1252rem + 0.3741vi, 1.4170rem)",
        "step-2": "clamp(1.4400rem, 1.3289rem + 0.5556vi, 1.7613rem)",
        "step-3": "clamp(1.7280rem, 1.5670rem + 0.8051vi, 2.1898rem)",
        "step-4": "clamp(2.0736rem, 1.8455rem + 1.1407vi, 2.7220rem)",
        "step-5": "clamp(2.4883rem, 2.1718rem + 1.5828vi, 3.3838rem)",
        "step-6": "clamp(2.9860rem, 2.5520rem + 2.1700vi, 4.2055rem)",
        "step-7": "clamp(3.5832rem, 2.9928rem + 2.9519vi, 5.2280rem)",
        "step-8": "clamp(4.2998rem, 3.5026rem + 3.9863vi, 6.4988rem)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        editorial: "0.32em",
        hud: "0.42em",
        meta: "0.22em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-in": "fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scroll-hint": "scrollHint 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollHint: {
          "0%, 100%": { opacity: "0.28", transform: "scaleY(0.85) translateY(-6px)" },
          "55%": { opacity: "1", transform: "scaleY(1.18) translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
