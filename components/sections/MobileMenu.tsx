import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="text-lg flex gap-1">
            Menu
            <ArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="mt-4 ">
          <DropdownMenuItem className="">
            <Link href={"/"} className="m-auto ">
              <Button variant="link" className="text-lg">
                Home
              </Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/shop"} className="m-auto">
              <Button variant="link" className="text-lg">
                Shop
              </Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
