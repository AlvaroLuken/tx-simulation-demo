import Button from "@common/components/Button";
import useTheme, { Theme } from "@common/hooks/useTheme";
import { useEffect } from "react";
import Image from "next/image";
import AlchemyIcon from "public/alchemy.png";

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
        text="🐝"
        theme={"bumblebee"}
        currentTheme={theme}
      />
      {/*
        // @todo @help not sure how to switch brand logo on dark theme
        <ThemeButton
          switchTheme={switchTheme}
          text="🌳"
          theme={"forest"}
          currentTheme={theme}
        />
      */}
    </div>
  )
}

export default function Navbar() {

  return (
    <div className="navbar font-mono bg-base-200 gap-3 text-xl">
      <div>
        {/* Branding */}
        <Image src={AlchemyIcon} width={120} height={24} alt="Alchemy icon" />
      </div>
      <div className="flex-1 flex flex-row gap-3">
        <div>
          /
        </div>
        <div className="items-center">
          Code Demos
        </div>
        <div>
          /
        </div>
        <div className="">
          API: Transaction Simulation
        </div>
      </div>
      <ThemeSwitcher/>
    </div>
  );
}
