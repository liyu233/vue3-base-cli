import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: {
        danger: "#E72A4A",
        primary: "#0BA4FF",
        success: "#00AF7F",
        warning: "#FF6A14",
        normal: "#384967",
      },
    },
  },
  plugins: [formsPlugin],
  extract: {
    /*
     * accepts globs and file paths relative to project root
     * */
    /*
     * src/views/index.{vue,html,jsx,tsx}
     * 只针对index生效，改为 * 对views下所有文件生效
     * */
    include: ["index.html", "src/views/index.{vue,html,jsx,tsx}"],
    exclude: ["node_modules/**/*", ".git/**/*"],
  },
});
