import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { Dispatch, SetStateAction, useState } from "react";
import { navigation } from "./navigation";

export const Header = ({
  setTheme,
  theme,
}: {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}) => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center justify-between px-3 py-[18px] dark:border-b-2 dark:border-b-accent-base dark:bg-gray-800 md:px-10">
      <div className="relative hidden md:flex">
        <button
          onClick={() => setMenu((state) => !state)}
          className="text-gray-50 dark:text-gray-300 dark:hover:brightness-75"
        >
          <svg
            width="172"
            height="24"
            viewBox="0 0 172 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 12.002C30 12.3335 29.8683 12.6514 29.6339 12.8858C29.3995 13.1203 29.0815 13.252 28.75 13.252H1.25C0.918479 13.252 0.600537 13.1203 0.366117 12.8858C0.131696 12.6514 0 12.3335 0 12.002C0 11.6704 0.131696 11.3525 0.366117 11.1181C0.600537 10.8836 0.918479 10.752 1.25 10.752H28.75C29.0815 10.752 29.3995 10.8836 29.6339 11.1181C29.8683 11.3525 30 11.6704 30 12.002ZM1.25 3.25195H28.75C29.0815 3.25195 29.3995 3.12026 29.6339 2.88584C29.8683 2.65142 30 2.33347 30 2.00195C30 1.67043 29.8683 1.35249 29.6339 1.11807C29.3995 0.883649 29.0815 0.751953 28.75 0.751953H1.25C0.918479 0.751953 0.600537 0.883649 0.366117 1.11807C0.131696 1.35249 0 1.67043 0 2.00195C0 2.33347 0.131696 2.65142 0.366117 2.88584C0.600537 3.12026 0.918479 3.25195 1.25 3.25195ZM28.75 20.752H1.25C0.918479 20.752 0.600537 20.8836 0.366117 21.1181C0.131696 21.3525 0 21.6704 0 22.002C0 22.3335 0.131696 22.6514 0.366117 22.8858C0.600537 23.1203 0.918479 23.252 1.25 23.252H28.75C29.0815 23.252 29.3995 23.1203 29.6339 22.8858C29.8683 22.6514 30 22.3335 30 22.002C30 21.6704 29.8683 21.3525 29.6339 21.1181C29.3995 20.8836 29.0815 20.752 28.75 20.752Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {menu && (
          <ul className="absolute flex flex-col rounded-md p-3 dark:border-2 dark:border-accent-base dark:bg-gray-800">
            {navigation.map(({ name, darkModeIcon, lightModeIcon }) => (
              <li key={name}>
                <a href={`#${name}`}>
                  {theme === "dark" ? darkModeIcon : lightModeIcon}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link href="/">
        <Image src="/logo.png" width={140} height={40} alt="Logo" />
      </Link>

      <div className="flex gap-1">
        <a className="flex shrink-0 cursor-pointer p-1 hover:brightness-125">
          <Image
            src="/instagram.png"
            width={44}
            height={44}
            alt="Instagram Logo"
          />
        </a>

        <a className="flex shrink-0 cursor-pointer p-1 hover:brightness-125">
          <Image
            src="/whatsapp.png"
            width={44}
            height={44}
            alt="Whatsapp logo"
          />
        </a>

        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};
