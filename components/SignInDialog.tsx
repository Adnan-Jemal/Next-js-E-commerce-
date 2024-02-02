import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignInGoogleBtn from "./SignInGoogleBtn";

export function SigninDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"default"}
          
          className="text-xs md:text-sm  text-white"
        >
          Sign Up / Log in
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log In / Sign Up</DialogTitle>
          <DialogDescription>Sign up or log in with Google</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <SignInGoogleBtn />
        </div>
      </DialogContent>
    </Dialog>
  );
}
