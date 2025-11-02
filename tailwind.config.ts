import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            base: "#0a0e27",
            card: "#151932", 
            elevated: "#1e2749"
          },
          accent: {
            primary: "#00d9ff",
            secondary: "#b794f6",
            tertiary: "#ffd93d"
          },
          text: {
            heading: "#f0f6fc",
            body: "#a6b1c2",
            muted: "#6b7888"
          }
        },
        light: {
          bg: {
            base: "#ffffff",
            card: "#f7f9fc",
            elevated: "#e9ecf2"
          },
          accent: {
            primary: "#0891b2",
            secondary: "#7c3aed", 
            tertiary: "#ea580c"
          },
          text: {
            heading: "#0f172a",
            body: "#334155",
            muted: "#64748b"
          }
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;