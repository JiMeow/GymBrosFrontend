import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
} satisfies Config;
