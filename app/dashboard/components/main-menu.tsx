"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";

import { cn } from "@/lib/utils";
import { LightDarckToggle } from "@/components/ui/light-dark-toggle";
import { useAuth } from "@/context/auth-context";
import styles from "./MainMenu.module.scss";

export default function MainMenu({ className }: { className?: string }) {
  const { logout } = useAuth();

  function handleLogout() {
    localStorage.clear(); // Clear localStorage
    logout(); // Clear user context
    window.location.href = "/login"; // Force full reload and redirect
  }

  return (
    <nav className={cn(styles.menu, className)}>
      <header className={styles.header}>
        <MenuTitle />
      </header>
      <ul className={styles.menuList}>
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className={styles.footer}>
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
        <LightDarckToggle className={styles.lightDarkToggle} />
      </footer>
    </nav>
  );
}
