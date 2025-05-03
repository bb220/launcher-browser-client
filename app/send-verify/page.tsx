"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ResendVerificationForm from "@/components/auth/resend-verification-form"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { useEffect, useState } from "react";

export default function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { email?: string }
}) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (searchParams.email) {
      setEmail(searchParams.email);
    }
  }, [searchParams]);

  return (
    <>
      <Navbar isAuthPage={true} />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
            <CardDescription>
              We've sent a verification email to{" "}
              {email ? <span className="font-medium">{email}</span> : "your email address"}. Please check your inbox and
              click the verification link to complete your registration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>Didn't receive the email? Check your spam folder or request another verification email below.</p>
              </div>
              <ResendVerificationForm email={email} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <Link href="/auth" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
              Return to login
            </Link>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}