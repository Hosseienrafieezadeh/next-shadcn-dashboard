import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  Laptop2Icon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cm from "@/public/images/cm.jpg";
import WorkLocationTrends from "./work-location-trends";

import styles from "./EmployeesStats.module.scss";

export default function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 80;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

  return (
    <>
      <div className={styles.statsGrid}>
        <Card>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>Total employees</CardTitle>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <div className={styles.statBox}>
              <UserIcon />
              <div className={styles.statValue}>{totalEmployees}</div>
            </div>
            <Button size="xs" asChild>
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>Employee present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.statBox}>
              {employeesPresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className={styles.statValue}>{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ? (
              <span className={styles.successText}>
                <BadgeCheckIcon />
                {employeesPresentPercentage}% of employee are present
              </span>
            ) : (
              <span className={styles.warningText}>
                <AlertTriangleIcon />
                only {employeesPresentPercentage}% of employee are present
              </span>
            )}
          </CardFooter>
        </Card>

        <Card className={styles.employeeOfMonth}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>
              Employee of the month
            </CardTitle>
          </CardHeader>
          <CardContent className={styles.monthContent}>
            <Avatar>
              <Image src={cm} alt="Employee of the month avatar" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className={styles.employeeName}>Collin Murray!!</span>
          </CardContent>
          <CardFooter className={styles.monthFooter}>
            <PartyPopperIcon className={styles.celebrateIcon} />
            <span>Congratulations, Colin!</span>
          </CardFooter>
        </Card>
      </div>

      <Card className={styles.locationTrends}>
        <CardHeader>
          <CardTitle className={styles.trendTitle}>
            <Laptop2Icon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className={styles.trendChart}>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
