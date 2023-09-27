import Button from "@common/Button";
import useTheme from "@common/hooks/useTheme";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const {theme, switchTheme} = useTheme();
  useEffect(() => {
    document.querySelector("html")?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="flex flex-row gap-3">
      <Button onClick={() => switchTheme("cupcake")} classNames={`btn-neutral btn-sm ${theme === "cupcake" ? `` : `btn-outline`}`}>
        🧁
      </Button>
      <Button onClick={() => switchTheme("dark")} classNames={`btn-neutral btn-sm ${theme === "dark" ? `` : `btn-outline`}`}>
        🌕
      </Button>
      <Button onClick={() => switchTheme("forest")} classNames={`btn-neutral btn-sm ${theme === "forest" ? `` : `btn-outline`}`}>
        🌳
      </Button>
    </div>
  )
}

export default function Navbar() {

  return (
    <div className="navbar font-mono bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Alchemy Code Demos ⚡️
        </a>
      </div>
      <ThemeSwitcher/>
    </div>
  );
}
