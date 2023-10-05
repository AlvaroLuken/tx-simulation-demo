import { useState } from "react";

export type Theme = "dark" | "retro" | "cupcake" | "corporate" | "forest" | "bumblebee" | "synthwave";
const DEFAULT_THEME: Theme = "bumblebee";

export default function useTheme () {
  const [theme, switchTheme] = useState<Theme>(DEFAULT_THEME);
  return {theme, switchTheme};
}
