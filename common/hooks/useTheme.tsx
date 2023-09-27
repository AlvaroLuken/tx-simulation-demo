import { useState } from "react";

export default function useTheme () {
  type Theme = "dark" | "retro" | "cupcake" | "corporate" | "forest";
  const [theme, switchTheme] = useState<Theme>("dark");
  return {theme, switchTheme};
}