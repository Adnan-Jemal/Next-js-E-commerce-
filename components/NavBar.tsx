"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./ui/modeToggle";
import { SigninDialog } from "./SignInDialog";
import { auth } from "../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductCard from "./productCard";

const NavBar = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut, signOutloading, error] = useSignOut(auth);

  const SignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="pt-10 pb-9 lg:px-24 px-8 text-2xl shadow-md flex lg:justify-around justify-between">
      <div className="flex justify-center items-center  gap-3">
        <ShoppingBag className="h-10 w-10" />

        <h1 className="border-l hidden md:block ">ሱቅ</h1>
      </div>
      <ul className="flex items-center justify-center lg:gap-10 gap-8 ">
        <li className="hover:text-blue-500 cursor-pointer text-xl lg:text-2xl">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer text-xl lg:text-2xl">
          <Link href={"/shop"}>Shop</Link>
        </li>
      </ul>
      <div className={`flex lg:gap-5 ${!user ? "gap-2" : "gap-5"}`}>
        {user
          ? !loading && (
              <>
                <Sheet>
                  <SheetTrigger>
                    <Button variant="outline" size="icon">
                      <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Your Cart</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </SheetDescription>
                    </SheetHeader>
                    <ProductCard/>
                  </SheetContent>
                </Sheet>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      {user.photoURL && <AvatarImage src={user.photoURL} />}
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="mt-4">
                    <DropdownMenuItem>
                      <Button onClick={SignOut} variant={"destructive"}>
                        {signOutloading ? "..." : "LogOut"}
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )
          : !loading && <SigninDialog />}
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;