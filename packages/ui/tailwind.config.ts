import type { Config } from "tailwindcss";
import { shadcnConfig } from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
const config: Pick<Config, "darkMode" | "plugins" | "presets"> = {
  darkMode: "class",
  presets: [shadcnConfig]
};

export default config;
