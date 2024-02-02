"use client";
import React from "react";
import { Button } from "./ui/button";
import { auth } from "../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SignInGoogleBtn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const SignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={SignIn} variant="secondary">
      {!loading?'Continue with Google':'Loading...'}
    </Button>
  );
};

export default SignInGoogleBtn;
