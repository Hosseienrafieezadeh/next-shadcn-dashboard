"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import styles from "./loading.module.scss"; // ایمپورت فایل SCSS

export default function Loading() {
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <CardTitle className={styles.cardTitle}>Employees</CardTitle>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <Skeleton className={`${styles.skeleton} ${styles.skeletonCircle}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonCircle}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
        <Skeleton className={`${styles.skeleton} ${styles.skeletonBar}`} />
      </CardContent>
    </Card>
  );
}
