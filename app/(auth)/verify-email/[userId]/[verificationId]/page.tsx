"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

import { Button } from "@/components/ui/button";

const VerifyEmail = () => {
  const router = useRouter();
  const params = useParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const userId = params.userId;
      const verificationId = params.verificationId;

      if (!userId || !verificationId) {
        setStatus("error");
        setMessage("Invalid verification link");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("userId", userId as string);
        formData.append("verificationId", verificationId as string);

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URI}/verify-email`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (res.data.status === true) {
          setStatus("success");
          setMessage(res.data.message || "Email verified");
          router.push("/login");
        } else {
          setStatus("error");
          setMessage(res.data.message || "Verification failed");

          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred during verification");
        console.error("Verification error:", error);
      }
    };

    verifyEmail();
  }, [params, router]);

  return (
    <div>
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg">
        {status === "loading" && (
          <div className="text-center">
            <div className="mb-4 text-gray-600">Verifying your email...</div>
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        )}

        {status === "success" && (
          <div className="text-center">
            <div className="text-green-500 text-4xl mb-4">✓</div>
            <div className="text-xl font-semibold text-green-600 mb-2">
              {message}
            </div>
            <div className="mt-2 text-gray-600">Redirecting to homepage...</div>
          </div>
        )}

        {status === "error" && (
          <div className="text-center">
            <div className="text-red-500 text-4xl mb-4">✗</div>
            <div className="text-xl font-semibold text-red-600 mb-4">
              {message}
            </div>
            <Button onClick={() => router.push("/")}>Return to Homepage</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
