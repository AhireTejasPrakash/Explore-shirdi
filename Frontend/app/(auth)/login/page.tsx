import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Explore Shirdi Devotee Portal",
  description:
    "Sign in to your Explore Shirdi pilgrim account with Phone OTP or Email. Access VIP passes, Aarti schedule, and luxury stays.",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
