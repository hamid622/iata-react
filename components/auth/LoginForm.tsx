"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  keepmeloggedin: z.boolean().optional(),
});

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const { keepmeloggedin, ...restValues } = values;
    console.log(restValues);
    // form.reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="w-full md:w-[50%] xl:w-[41.66666667%]">
          <div className="bg-white p-6 pb-0 min-h-screen">
            <div className="box py-6 px-0 sm:px-6 md:px-3 lg:px-11">
              <h3 className="text-[#262a2e] text-[22px] md:text-2xl font-bold mb-2 text-center pt-14">
                Login to Account
              </h3>
              <p className="mb-4 text-center px-0 sm:px-2 md:px-9 lg:px-14">
                Only for registered users. If you don't have an account, sign up
                to create a new one.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3 lg:px-7 xl:px-14"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="email">Email</Label>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            required
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="password">Password</Label>
                          <FormControl>
                            <Input
                              type={passwordVisible ? "text" : "password"}
                              {...field}
                              id="password"
                              placeholder="Enter your password"
                              required
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute top-[70%] right-3 -translate-y-1/2 cursor-pointer text-xs text-[#146eff]"
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </span>
                  </div>
                  <FormField
                    control={form.control}
                    name="keepmeloggedin"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                id="keepmeloggedin"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className=""
                              />
                            </FormControl>
                            <Label
                              htmlFor="keepmeloggedin"
                              className="text-[#6f6f6f] text-sm"
                            >
                              Keep me logged in
                            </Label>
                          </div>
                          <Link
                            href="/forgot-password"
                            className="text-sm font-medium text-[#1c1c1c] hover:text-[#0062ff] hover:underline"
                          >
                            Forgot Password
                          </Link>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" variant="default" className="w-full">
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-[#6f6f6f]"
                    asChild
                  >
                    <Link href="/">Back to Homepage</Link>
                  </Button>
                  <p className="text-center text-[#000] !mt-[1.8rem]">
                    Don't have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-[#1c1c1c] hover:text-[#0062ff] font-bold underline"
                    >
                      Create Account
                    </Link>
                  </p>
                </form>
              </Form>
              <div className="flex items-center justify-center mt-10 md:mt-[0.7rem] lg:mt-[1.4rem] text-xs text-[#0062ff]">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <span className="text-[#d8d8d8] py-0 px-[5px]">|</span>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
                <span className="text-[#d8d8d8] py-0 px-[5px]">|</span>
                <Link href="/system-status">System Status</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center justify-center w-full md:w-[50%] xl:w-[58.33333333%]">
          <div className="text-center">
            <div className="w-[66%] mx-auto">
              <h2 className="text-[#262a2e] text-[28px] lg:text-[32px] font-bold mb-4 leading-[1.2]">
                Explore: Your Ultimate Travel Management Solution
              </h2>
              <p className="text-[#000] text-base font-normal mb-4">
                Streamline travel management with our all-in-one platform.
                Manage bookings, itineraries, and enhance client experiences
                effortlessly with our user-friendly tools.
              </p>
            </div>
            <p className="text-[#0062ff] text-base font-bold">Let’s Do It</p>
            <img
              src="/assets/travel.png"
              alt="travel"
              className="max-w-full w-[50%] mt-12 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
