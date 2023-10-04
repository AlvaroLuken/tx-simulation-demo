import { useState } from "react";

export type Theme = "dark" | "retro" | "cupcake" | "corporate" | "forest";

export default function useTheme () {
  const [theme, switchTheme] = useState<Theme>("forest");
  return {theme, switchTheme};
}