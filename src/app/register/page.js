import { AuthCard } from "@/components/auth/AuthCard";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Register",
  description: "Create your TIAMA account to enroll in courses and apply for certification and accreditation.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return (
    <AuthCard
      title="Create Account"
      subtitle="Join us today and get started"
      icon={
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8" r="4" />
          <path d="M2 20c0-4 3-6 7-6s7 2 7 6" />
          <path d="M19 8v6M22 11h-6" />
        </svg>
      }
    >
      <RegisterForm />
    </AuthCard>
  );
}
