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

export function SigninDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>Sign Up / Log in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log In / Sign Up</DialogTitle>
          <DialogDescription>Sign up or log in with Google</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button variant="secondary">Continue with Google</Button>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
