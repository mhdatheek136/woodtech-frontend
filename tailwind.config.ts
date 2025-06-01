import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New 60-30-10 color scheme with updated accent
        primary: "#0c2a44", // 30% - Dark navy for text, headers, navbars
        secondary: "#f0e9df", // 60% - Light cream for backgrounds
        accent: "#c84a27", // 10% - Vibrant orange for buttons, links, CTAs

        // Legacy colors for compatibility
        navy: "#0c2a44",
        cream: "#f0e9df",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        logo: ["'Playfair Display SC'", "serif"],
        primary: ["'Glacial Indifference'", "sans-serif"],
        secondary: ["'Skiff'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        fadeInOut: {
          "0%, 100%": {
            opacity: "0",
          },
          "25%, 75%": {
            opacity: "0.2",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        sparkle: {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate(var(--x-end), var(--y-end)) rotate(var(--rotation))",
            opacity: "0",
          },
        },
        fallingStar: {
          "0%": {
            transform: "translateY(-10vh) translateX(0) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100vh) translateX(var(--x-drift)) rotate(var(--rotation))",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        fadeInOut: "fadeInOut 6s ease-in-out infinite",
        rotate: "rotate 12s linear infinite",
        sparkle: "sparkle var(--duration) ease-in-out forwards",
        fallingStar: "fallingStar var(--duration) ease-in-out forwards",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(12, 42, 68, 0.08)",
        card: "0 2px 12px rgba(12, 42, 68, 0.06)",
        "magazine-edge":
          "0 1px 0 #e0e0e0, 0 2px 0 #d0d0d0, 0 3px 0 #c0c0c0, 0 4px 0 #b0b0b0, 2px 5px 5px rgba(0,0,0,0.15)",
        "magazine-inner": "inset 0 0 15px rgba(40, 120, 80, 0.2)",
      },
    },
  },
  plugins: [],
}
export default config
