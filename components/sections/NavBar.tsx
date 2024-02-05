import Link from "next/link";
import React from "react";

import { Store } from "lucide-react";
import NavRightMenu from "./NavRightMenu";
import MobileMenu from "./MobileMenu";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className=" shadow-md pt-10 pb-9  ">
      <div className="flex justify-around items-center text-2xl lg:max-w-6xl  m-auto  ">
        <div className="flex justify-center items-center  gap-3">
          <Store className="h-10 w-10" />
          <h1 className=" hidden md:block select-none ">ሱቅ</h1>
        </div>
        <nav className="hidden md:inline-block">
          <ul className="flex items-center justify-center lg:gap-10 gap-8 ">
            <li className="hover:text-blue-500 cursor-pointer text-xl lg:text-2xl">
              <Link href={"/"} className="group">
                <Button
                  variant="link"
                  className="text-2xl text-secondary-foreground group-hover:text-primary transition-colors"
                >
                  Home
                </Button>
              </Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer text-xl lg:text-2xl ">
              <Link href={"/shop"} className=" group">
                <Button
                  variant="link"
                  className="text-2xl text-secondary-foreground group-hover:text-primary transition-colors"
                >
                  Shop
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
        <MobileMenu />

        <NavRightMenu />
      </div>
    </div>
  );
};

export default NavBar;
