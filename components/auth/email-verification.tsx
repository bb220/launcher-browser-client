"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, Loader2, XCircle } from "lucide-react"

export function EmailVerification() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()

  // Get token from URL (e.g., /verify-email?token=xyz)
  const token = searchParams.get("token")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error")
        return
      }

      try {
        // TODO: Replace with your backend API call
        // const response = await fetch(`/api/auth/verify-email?token=${token}`, {
        //   method: "GET",
        // });

        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // if (!response.ok) {
        //   throw new Error("Verification failed");
        // }

        setStatus("success")
      } catch (error) {
        setStatus("error")
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Verification failed",
          variant: "destructive",
        })
      }
    }

    if (token) {
      verifyEmail()
    } else {
      setStatus("error")
    }
  }, [token, toast])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Email Verification</CardTitle>
        <CardDescription className="text-center">
          {status === "loading"
            ? "Verifying your email address..."
            : status === "success"
              ? "Your email has been verified successfully"
              : "Email verification failed"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center py-6">
        {status === "loading" ? (
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
        ) : status === "success" ? (
          <CheckCircle2 className="h-16 w-16 text-primary" />
        ) : (
          <XCircle className="h-16 w-16 text-destructive" />
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {status === "success" && (
          <Button className="w-full" asChild>
            <Link href="/">Sign in to your account</Link>
          </Button>
        )}
        {status === "error" && (
          <>
            <p className="text-center text-sm text-muted-foreground mb-2">
              The verification link may have expired or is invalid.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Return to login</Link>
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
