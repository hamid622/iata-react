"use client";
import React, {  useState } from "react";
import Link from "next/link";

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
import { countriesList } from "@/constants";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <>
      <div className="w-full max-w-[24rem] mt-[72px] mb-[10px]">
        <form className=" space-y-3 bg-white p-6 rounded-lg shadow-md ">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={countriesList[0]} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {countriesList.map((country, index) => (
                    <SelectItem key={index} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="6+ characters"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-[60%] right-3 -translate-y-1/2 cursor-pointer text-sm text-blue-600"
            >
              {passwordValue.length > 0 && passwordVisible ? "Hide" : "Show"}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-[0.75rem] text-[#6f6f6c]">
              By creating an account, you agree to our{" "}
              <a
                href="#"
                className="text-sm text-[0.75rem] text-[#1c1c1c] hover:text-[#0062ff]"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#1c1c1c] hover:text-[#0062ff]">
                Privacy Policy
              </a>
              .
            </Label>
          </div>

          <div className="space-y-4 pt-4">
            <Button variant="default" className="w-full">
            Create Account
            </Button>
            <Button variant="outline" className="w-full">
              Back to Homepage
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
        <div className="flex items-center justify-center px-0 py-[22px] text-xs text-[#0062ff]">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className="text-[#d8d8d8] py-0 px-[5px]">|</span>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
          <span className="text-[#d8d8d8] py-0 px-[5px]">|</span>
          <Link href="/system-status">System Status</Link>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
