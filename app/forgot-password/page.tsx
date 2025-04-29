import { PasswordResetRequestForm } from "@/components/auth/password-reset-request-form"

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <PasswordResetRequestForm />
    </main>
  )
}
