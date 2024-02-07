"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

const formSchema = z.object({
  firstName: z.string(),
  fatherName: z.string(),
  country: z.string(),
  region: z.string(),
  subCityOrZone: z.string(),
  phoneNumber: z
    .string()
    .min(9, {
      message: "Please Enter a valid Phone number",
    })
    .optional(),
  email: z.string().email(),
});

const BillingForm = () => {
  const [user, loading] = useAuthState(auth);

  let userNames = user?.displayName?.split(" ");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: userNames?.[0],
      fatherName: userNames?.[1],
      country: "Ethiopia",
      region: "",
      subCityOrZone: "",
      phoneNumber: "",
      email: "",
    },
  });

  const route = useRouter();

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast("Order Placed Successfully", {
      description: "you've successfully placed an order!",
    });
    route.push("/checkout/1");
    console.log(data);
  };

  return (
    <div className="w-full h-full shadow-lg dark:border-primary-foreground border-gray-50 dark:border-4 border-2 rounded-lg px-5 py-10 mx-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-5"
          id="CheckoutForm"
        >
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input required {...field} placeholder="First Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Father's Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Father's Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      required
                      {...field}
                      placeholder=" Enter Country..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Region..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="subCityOrZone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Subcity/Zone/Woreda</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Subcity/Zone/Woreda..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Phone Number..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="Enter Email Address..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </form>
      </Form>
    </div>
  );
};

export default BillingForm;
