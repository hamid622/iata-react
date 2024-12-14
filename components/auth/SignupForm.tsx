"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const signupFormSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  country_id: z.string().nonempty({ message: "Please select a country" }),
  role: z.enum(["customer"]).default("customer"),
});

interface countriesProps {
  id: string;
  nicename: string;
}
const SignupForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [countries, setCountries] = useState<countriesProps[]>([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      country_id: countries[0]?.id || undefined,
      role: "customer",
    },
  });

  const fetchCountries = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URI}/countries`
      );
      setCountries(res.data);
    } catch (error) {
      console.error("Error fetching countries", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    try {
      setLoading(true);

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URI}/signup`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data?.status === true) {
        toast({
          title: "Signup successful",
          description: res.data.message,
        });
        console.log("Signup successful:", res.data);

        router.push("/login");
      } else {
        toast({
          title: "Signup failed",
          description: res.data.message,
        });
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[24rem] mt-[72px] mb-[10px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Label htmlFor="first-name">First Name</Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        id="first-name"
                        placeholder="First Name"
                        required
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="last_name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <Label htmlFor="last-name">Last Name</Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        id="last-name"
                        placeholder="Last Name"
                        required
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="country_id"
              render={({ field, fieldState }) => (
                <FormItem>
                  <Label htmlFor="country">Country</Label>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value ? field.value?.toString() : ""}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={"Select"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {countries.map((country) => (
                          <SelectItem
                            key={country.id}
                            value={String(country.id)}
                          >
                            {country?.nicename}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage>{fieldState?.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2 relative">
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <Label htmlFor="password">Password</Label>
                  <FormControl>
                    <Input
                      type={passwordVisible ? "text" : "password"}
                      {...field}
                      id="password"
                      required
                      placeholder="6+ characters"
                    />
                  </FormControl>
                  <FormMessage>
                    <span className="block min-h-[1.5rem]">
                      {fieldState?.error?.message}
                    </span>
                  </FormMessage>
                </FormItem>
              )}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-[45%] right-3 -translate-y-1/2 cursor-pointer text-xs text-blue-600"
            >
              {passwordVisible ? "HIDE" : "SHOW"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              onCheckedChange={() => setDisableButton((prev) => !prev)}
            />
            <Label htmlFor="terms" className="text-[0.75rem] text-[#6f6f6c]">
              By creating an account, you agree to our{" "}
              <Link
                href="/terms-and-conditions"
                className="text-[0.75rem] text-[#1c1c1c] hover:text-[#0062ff]"
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-[0.75rem] text-[#1c1c1c] hover:text-[#0062ff]"
              >
                Privacy Policy
              </Link>
              .
            </Label>
          </div>

          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              disabled={disableButton || loading}
              variant="default"
              className="w-full"
            >
              {loading ? "Loading..." : "Create Account"}
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Back to Homepage</Link>
            </Button>
          </div>

          <p className="text-center text-sm text-[#746F6F] mt-[20px]">
            Already a member?{" "}
            <Link
              href="/login"
              className="text-[#1c1c1c] hover:text-[#0d6efd] underline"
            >
              Login
            </Link>
          </p>
        </form>
      </Form>
      <div className="flex items-center justify-center px-0 py-[22px] text-xs text-[#0062ff]">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <span className="text-[#d8d8d8] py-0 px-[5px]">|</span>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <span className="text-[#d8d8d8] py-0 px-[5px]">|</span>
        <Link href="/system-status">System Status</Link>
      </div>
    </div>
  );
};

export default SignupForm;
