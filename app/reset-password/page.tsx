import { PasswordResetForm } from "@/components/auth/password-reset-form"

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <PasswordResetForm />
    </main>
  )
}
