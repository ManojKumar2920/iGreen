"use client";
import Image from "next/image";
import React from "react";
import iGreen from "@/assets/logo.png";
import iGreenWhite from "@/assets/logo-white.png";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import Link from "next/link";

const Nav = () => {
  const { theme } = useTheme();
  return (
    <div>
      <div className=" flex justify-between px-10">
        <Link href={'/'}>            
        <Image
          src={theme === "dark" ? iGreenWhite : iGreen}
          alt="Logo"
          width={100}
          height={100}
        ></Image>
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Nav;
