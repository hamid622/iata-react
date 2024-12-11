import type { Metadata } from "next";

import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Signup",
};

const SignupPage = () => {
  return <SignupForm />;
};

export default SignupPage;
