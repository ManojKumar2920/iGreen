import Link from "next/link";
import React from "react";
import { FaGithub as Github } from "react-icons/fa";

const Contribute = () => {
  return (
    <div className=" grid place-items-center py-10">
      <div className=" bg-gradient-to-br from-jade-400 to-jade-700 w-1/2 md:w-4/5 p-4 grid place-items-center rounded-2xl">
        <div className="text-center">
          <h1 className=" font-bold text-lg">Wanna Contribute ?</h1>
          <p className=" text-base py-2">Let&apos; serve to our campus trees!</p>
        </div>
        <Link
          href={"https://github.com/ManojKumar2920/Kairos-Chatbot"}
          className=" flex border items-center justify-center gap-2 rounded-md p-2 border-slate-300 bg-white dark:text-black"
        >
          <Github />
          <span className=" font-medium text-[12px] ">GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default Contribute;
