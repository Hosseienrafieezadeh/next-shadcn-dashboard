import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import styles from "./ LandingPage.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <PersonStandingIcon size={50} className={styles.icon} />
        supportMe
      </h1>
      <p className={styles.subtitle}>
        the best dashboard to manage customer support
      </p>
      <div className={styles.actions}>
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <span className={styles.orText}>or</span>
        <Button variant="outline" disabled>
          Sign up
        </Button>
      </div>
    </div>
  );
}
