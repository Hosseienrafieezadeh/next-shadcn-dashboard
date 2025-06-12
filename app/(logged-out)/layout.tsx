import { LightDarckToggle } from "@/components/ui/light-dark-toggle";
import styles from "./LoggedOutLayout.module.scss";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>{children}</div>
      <LightDarckToggle className={styles.toggle} />
    </>
  );
}
