"use client"

import { useState } from "react"
import { resendVerificationEmail } from "@/lib/api";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface ResendVerificationFormProps {
  email?: string
}

export default function ResendVerificationForm({ email = "" }: ResendVerificationFormProps) {
  const [userEmail, setUserEmail] = useState(email)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; message?: string; error?: string } | null>(null)

  async function handleResend(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await resendVerificationEmail(formData)
      setResult(response)
    } catch (error) {
      setResult({ error: "An unexpected error occurred" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form action={handleResend} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Resend Verification Email"}
        </Button>

        {result?.success && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">{result.message}</AlertDescription>
          </Alert>
        )}

        {result?.error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{result.error}</AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  )
}
