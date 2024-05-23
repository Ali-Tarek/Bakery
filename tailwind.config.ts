import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpink: "#FFF8F8",
        customPurple: "#CE44E4",
      },
      container: {
        center: true,
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(206, 68, 228, 0.1), 0 2px 4px -1px rgba(206, 68, 228, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
