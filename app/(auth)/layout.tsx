import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "auth",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F7F7]">
      {children}
    </div>
  );
}
