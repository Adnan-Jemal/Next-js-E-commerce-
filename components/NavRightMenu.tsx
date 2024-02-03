"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ModeToggle } from "./ui/modeToggle";
import { SigninDialog } from "./SignInDialog";
import CartBtn from "./CartBtn";
import { auth } from "../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const NavRightMenu = () => {
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
    <div className={`flex lg:gap-5 ${!user ? "gap-2" : "gap-3"}`}>
      
      {user
        ? !loading && (
            <>
              <CartBtn />
              <Avatar
                    className="cursor-pointer justify-center items-center flex
                  "
                  >
                    {user.photoURL && <AvatarImage src={user.photoURL} />}
                    <AvatarFallback className="pb-1">
                      {user.displayName?.charAt(0)} 
                    </AvatarFallback>
                  </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
             
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
