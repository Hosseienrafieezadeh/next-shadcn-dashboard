"use client";

import { useAuth } from "@/context/auth-context";
import { redirect } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";
import styles from "./dashboard-layout.module.scss"; // ایمپورت فایل SCSS

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) redirect("/login");

  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.dashboardContainer}>
      {/* Main Menu (Desktop) */}
      <MainMenu className={styles.mainMenuWrapper} />

      {/* Mobile Menu */}
      {!isDesktop && (
        <div className={styles.mobileMenu}>
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}

      <div className={styles.contentWrapper}>
        <div className={styles.headerContent}>
          <img
            src={user?.picture?.large ?? "/default-avatar.png"}
            alt="avatar"
            className={styles.avatar}
          />
          <h1 className={styles.greetingText}>
            Hi {user?.name.first} {user?.name.last} Dear 👋
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
}
