import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2">
        <PersonStandingIcon size={50} className="text-pink-500" />
        supportMe
      </h1>
      <p>the best dashboard to mange customer support</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <span>or</span>
        <Button asChild variant={"outline"}>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
