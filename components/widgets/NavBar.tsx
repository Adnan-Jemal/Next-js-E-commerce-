import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/modeToggle";
import {SigninDialog} from "../signInDialog"

const NavBar = () => {
  return (
    <div className="pt-10 pb-9 px-24 text-2xl shadow-md flex justify-between">
      <div className="text-3xl">Logo</div>
      <ul className="flex items-center justify-center gap-10 ">
        <li className="hover:text-blue-500 cursor-pointer del">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link href={"/shop"}>Shop</Link>
        </li>
      </ul>
      <div className="flex gap-5">

      <SigninDialog/>
        
        {/* <Button asChild>
          <Link href={"/"}>Log In / Sign up</Link>
        </Button> */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
