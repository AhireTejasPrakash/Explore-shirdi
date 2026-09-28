import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Explore Shirdi Devotee Portal",
  description:
    "Create your pilgrim account on Explore Shirdi. Join the Shirdi Privileges Club for complimentary audio guides and priority darshan updates.",
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
