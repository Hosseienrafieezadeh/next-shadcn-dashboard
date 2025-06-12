"use client";

import { PersonStandingIcon } from "lucide-react";
import styles from "./menu-title.module.scss";

export default function MenuTitle() {
  return (
    <h4 className={styles.menuTitle}>
      <PersonStandingIcon className={styles.icon} size={40} />
      SupportMe
    </h4>
  );
}
