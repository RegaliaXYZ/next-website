import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = ({ page = "" }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const changeTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap teal bg-teal-600 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <Link href="/" passHref>
          <span className="font-semibold text-xl tracking-tight">{page}</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <Link href="/projects" passHref>
          <p className="lg:inline-block lg:mt-0 text-teal-400 hover:text-white mr-4">
            Projects
          </p>
        </Link>
        <div>
          {theme === "dark" ? (
            <SunIcon
              className="h-6 w-6 text-gray-300"
              aria-hidden="true"
              onClick={() => changeTheme()}
            />
          ) : (
            <MoonIcon
              className="h-6 w-6 text-gray-700"
              aria-hidden="true"
              onClick={() => changeTheme()}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
