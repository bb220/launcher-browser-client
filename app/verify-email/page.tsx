import { Suspense } from "react"
import { EmailVerification } from "@/components/auth/email-verification"

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <EmailVerification />
      </Suspense>
    </main>
  )
}
