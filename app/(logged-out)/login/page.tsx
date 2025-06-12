"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/context/auth-context";

import styles from "./LoginPage.module.scss";

// Validation schema
const formSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number cannot exceed 20 digits" }),
});

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { phone: "" },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await login(data.phone);
      router.push("/dashboard");
    } catch {
      form.setError("phone", {
        type: "manual",
        message: "Login failed. Please try again.",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <PersonStandingIcon size={50} />
      <Card className={styles.card}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your mobile phone number</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className={styles.form}
            >
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 09123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className={styles.submit}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className={styles.footer}>
          <small>Dont have an account?</small>
          <Button variant="outline" disabled>
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
