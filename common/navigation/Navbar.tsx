import Button from "@common/components/Button";
import useTheme, { Theme } from "@common/hooks/useTheme";
import { useEffect } from "react";

const ThemeButton = ({
  theme,
  switchTheme,
  currentTheme,
  text
}: {
  theme: Theme,
  switchTheme: (theme: Theme) => void,
  currentTheme: Theme,
  text: string
}) => {
  return (
    <Button onClick={() => switchTheme(theme)} styles={`btn-neutral btn-sm ${currentTheme === theme ? `` : `btn-outline`}`}>
      {text}
    </Button>
  )
}

const ThemeSwitcher = () => {
  const {theme, switchTheme} = useTheme();
  useEffect(() => {
    document.querySelector("html")?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="flex flex-row gap-3">
      <ThemeButton
        switchTheme={switchTheme}
        text="🧁"
        theme={"cupcake"}
        currentTheme={theme}
      />
      <ThemeButton
        switchTheme={switchTheme}
        text="🌕"
        theme={"dark"}
        currentTheme={theme}
      />
      <ThemeButton
        switchTheme={switchTheme}
        text="🌳"
        theme={"forest"}
        currentTheme={theme}
      />
      <ThemeButton
        switchTheme={switchTheme}
        text="👔"
        theme={"corporate"}
        currentTheme={theme}
      />
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
