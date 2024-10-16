// // tailwind.config.js
// import {nextui} from "@nextui-org/react";

// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     // ...
//     // make sure it's pointing to the ROOT node_module
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()]
// }

// export default config;




import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkGray: 'var(--color-dark-gray)',
        lightGray: 'var(--color-light-gray)',
        teal: 'var(--color-teal)',
        darkBlue: 'var(--color-dark-blue)',
        lightBlue: 'var(--color-light-blue)',
        lightestBlue: 'var(--color-lightest-blue)',
        offWhite: 'var(--color-off-white)',
        white: 'var(--color-white)',
        lightTeal: 'var(--color-teal-light)',
        lightestTeal: 'rgba(1, 81, 170, 0.5)',
        lighterTeal : 'rgba(1, 81, 170, 0.4)',
        bgTeal:'rgba(1, 81, 170, 0.1)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
       colors: {
        primary: "#0151AA",
        secondary: "#f9f9f9",
        background: "#f7f7f7",
        foreground: "#333",
       }
      },
      dark: {
        colors:{
        primary: "#0151AA",
        secondary: "#f9f9f9",
        background: "#f7f7f7",
        foreground: "#333",

        }
      },
    }
  })]
};
export default config;
 