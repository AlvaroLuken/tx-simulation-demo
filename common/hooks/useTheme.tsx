import { useState } from "react";

export type Theme = "dark" | "retro" | "cupcake" | "corporate" | "forest";
const DEFAULT_THEME: Theme = "cupcake";

export default function useTheme () {
  const [theme, switchTheme] = useState<Theme>(DEFAULT_THEME);
  return {theme, switchTheme};
}
