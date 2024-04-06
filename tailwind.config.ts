import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

export default {
  content: ["./src/**/*.tsx",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      colors: {
        // 'gray' : "#878a92"
        link: "#5551ff",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")],
} satisfies Config;
