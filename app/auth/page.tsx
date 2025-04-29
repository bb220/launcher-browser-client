import { AuthTabs } from "@/components/auth/auth-tabs"

export default function AuthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <AuthTabs />
    </main>
  )
}
