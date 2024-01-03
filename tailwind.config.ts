import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        customGray: '#D8D8D8',
        inputCustomGray: '#F8F8F8'
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
