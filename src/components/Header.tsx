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
    <header className="fixed w-full z-30 flex items-center justify-between px-3 py-[18px] dark:border-b-2 dark:border-b-accent-base dark:bg-gray-800 md:px-10">
      <div className="relative hidden md:flex lg:hidden">
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
          <ul className="absolute flex items-start flex-row rounded-md p-6 gap-4 dark:border-2 dark:border-accent-base dark:bg-gray-800">


          <div className="flex flex-col">
            {navigation.map(({ name, darkModeIcon, lightModeIcon }) => (
              <li key={name}>
                <a className="flex flex-row gap-2" href={`#${name}`}>
                  {theme === "dark" ? darkModeIcon : lightModeIcon}
                <p className="text-gray-50 dark:text-gray-300 md:text-xl" >{name}</p>
                </a>
              </li>

            ))}
          </div>

          <button
            onClick={() => setMenu((state) => !state)}
            className="text-gray-50 dark:text-gray-300 dark:hover:brightness-75"
          >
            <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M35.3476 33.4186C35.4754 33.5463 35.5767 33.698 35.6458 33.8649C35.715 34.0318 35.7506 34.2107 35.7506 34.3914C35.7506 34.5721 35.715 34.751 35.6458 34.9179C35.5767 35.0848 35.4754 35.2365 35.3476 35.3642C35.2199 35.492 35.0682 35.5933 34.9013 35.6624C34.7344 35.7316 34.5555 35.7672 34.3748 35.7672C34.1941 35.7672 34.0152 35.7316 33.8483 35.6624C33.6814 35.5933 33.5297 35.492 33.402 35.3642L21.9998 23.9603L10.5976 35.3642C10.3396 35.6222 9.98966 35.7672 9.62479 35.7672C9.25991 35.7672 8.90998 35.6222 8.65198 35.3642C8.39397 35.1062 8.24902 34.7563 8.24902 34.3914C8.24902 34.0265 8.39397 33.6766 8.65198 33.4186L20.0559 22.0164L8.65198 10.6142C8.39397 10.3562 8.24902 10.0063 8.24902 9.64139C8.24902 9.27651 8.39397 8.92658 8.65198 8.66858C8.90998 8.41057 9.25991 8.26563 9.62479 8.26562C9.98966 8.26562 10.3396 8.41057 10.5976 8.66858L21.9998 20.0725L33.402 8.66858C33.66 8.41057 34.0099 8.26562 34.3748 8.26562C34.7397 8.26563 35.0896 8.41057 35.3476 8.66858C35.6056 8.92658 35.7506 9.27651 35.7506 9.64139C35.7506 10.0063 35.6056 10.3562 35.3476 10.6142L23.9437 22.0164L35.3476 33.4186Z" 
              fill="currentColor"/>
            </svg>
          </button>

          </ul>
        )}
      </div>

      <Link href="/">
        <Image src="/logo.png" width={120} height={40} alt="Logo" />
      </Link>

      <div className="flex items-center gap-4">
            <ul className="max-[1023px]:hidden flex items-start flex-row gap-4 dark:bg-gray-800">
            {navigation.map(({ name, darkModeIcon, lightModeIcon }) => (
              <li key={name}>
                <a className="flex items-center flex-row gap-2" href={`#${name}`}>
                  {theme === "dark" ? darkModeIcon : lightModeIcon}
                <p className="text-gray-50 dark:text-gray-300 md:text-xl" >{name}</p>
                </a>
              </li>

            ))}
          </ul>


      <div className="flex gap-1 h-full">
        <a href="https://www.instagram.com/vwo_instalacoes/" className="flex shrink-0 cursor-pointer p-1 hover:brightness-125">
          <Image
            src="/instagram.png"
            width={44}
            height={44}
            alt="Instagram Logo"
          />
        </a>

        <a href="" className="flex shrink-0 cursor-pointer p-1 hover:brightness-125">
          <Image
            src="/whatsapp.png"
            width={44}
            height={44}
            alt="Whatsapp logo"
          />
        </a>

        <ThemeSwitcher theme={theme} setTheme={setTheme} />

      </div>
      </div>
    </header>
  );
};
