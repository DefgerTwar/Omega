import { navigation } from "./navigation";

export const BottomBar = ({ theme }: { theme: "dark" | "light" }) => {
  return (
    <nav className="fixed bottom-0 z-20 flex w-full items-center justify-between bg-gray-200 p-3 dark:bg-gray-800 md:hidden">
      {navigation.map(({ name, darkModeIcon, lightModeIcon }) => (
        <a href={`#${name}`} key={name} className="flex flex-col items-center">
          {theme === "dark" ? darkModeIcon : lightModeIcon}

          <p className="text-xs dark:text-gray-300">{name}</p>
        </a>
      ))}
    </nav>
  );
};
