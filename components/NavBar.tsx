import Link from "next/link";
import React from "react";

import { Store } from "lucide-react";
import NavRightMenu from "./NavRightMenu";
import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className=" shadow-md pt-10 pb-9  ">
      <div className="flex justify-around items-center text-2xl lg:max-w-6xl  m-auto  ">
        <div className="flex justify-center items-center  gap-3">
          <Store className="h-10 w-10" />
          <h1 className="border-l hidden md:block ">ሱቅ</h1>
        </div>
        <nav className="hidden md:inline-block">
          <ul className="flex items-center justify-center lg:gap-10 gap-8 ">
            <li className="hover:text-blue-500 cursor-pointer text-xl lg:text-2xl">
              <Button variant="link" className="group">
                <Link
                  href={"/"}
                  className="text-2xl text-secondary-foreground group-hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </Button>
            </li>
            <li className="hover:text-blue-500 cursor-pointer text-xl lg:text-2xl ">
              <Button variant="link" className="group">
                <Link
                  href={"/shop"}
                  className="text-2xl text-secondary-foreground group-hover:text-primary transition-colors"
                >
                  Shop
                </Link>
              </Button>
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
