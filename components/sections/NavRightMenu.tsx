"use client";
import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ModeToggle } from "../ui/modeToggle";
import { SigninDialog } from "../buttons/SignInDialog";
import CartBtn from "../buttons/CartBtn";
import { auth } from "../../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { CartContext } from "@/context/cartContext";

const NavRightMenu = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut, signOutloading, error] = useSignOut(auth);
  const {ClearCartItems} = useContext(CartContext)

  const SignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
    ClearCartItems()

  };

  return (
    <div className={`flex lg:gap-5 ${!user ? "gap-2" : "gap-3"}`}>
      {user
        ? !loading && (
            <>
              <CartBtn />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar
                    className="cursor-pointer justify-center items-center flex
                  "
                  >
                    {user.photoURL && <AvatarImage src={user.photoURL} />}
                    <AvatarFallback className="">
                      {user.displayName?.charAt(0)}
                    </AvatarFallback>
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
  );
};

export default NavRightMenu;
