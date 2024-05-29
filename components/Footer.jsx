import Image from "next/image";
import Link from "next/link";
import React from "react";
import iGreenWhite from "@/assets/logo-white.png";

const Footer = () => {

  return (
    <footer className=" bg-slate-900">
      <div className="container p-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href={"/"}>
            <Image
              src={iGreenWhite}
              alt="Logo"
              width={100}
              height={100}
            ></Image>
          </Link>
        </div>

        <hr className="my-2 border-gray-600 dark:border-gray-700" />
        <p className=" pb-2 text-center text-slate-50">Made with &#128154; by Manoj Kumar</p>
        <p className=" text-sm text-gray-500 text-center">© Copyright 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
