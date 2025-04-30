"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2, RefreshCw, ShieldAlert } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProtectedData {
  message: string
  [key: string]: any // For any additional fields in the response
}

export function DashboardContent() {
  const [data, setData] = useState<ProtectedData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const fetchProtectedData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const token = localStorage.getItem("token");

      // Make request to your protected endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/protected`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      })

      if (!response.ok) {
        // If response is 401 Unauthorized, redirect to login
        if (response.status === 401) {
          toast({
            title: "Session expired",
            description: "Please log in again to continue",
            variant: "destructive",
          })
          router.push("/")
          return
        }

        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to fetch protected data")
      }

      const responseData = await response.json()
      setData(responseData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Failed to load dashboard data",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }
    fetchProtectedData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRefresh = () => {
    fetchProtectedData()
  }

  const handleLogout = () => {
    localStorage.removeItem("token")

    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    })
    router.push("/")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Protected Data</CardTitle>
          <CardDescription>Data from your protected API endpoint</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-lg">Loading protected data...</span>
            </div>
          ) : error ? (
            <div className="bg-destructive/10 p-4 rounded-md flex items-start">
              <ShieldAlert className="h-5 w-5 text-destructive mr-2 mt-0.5" />
              <div>
                <h3 className="font-medium text-destructive">Error loading data</h3>
                <p className="text-destructive/90">{error}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-2">Response Message:</h3>
                <p className="text-lg">{data?.message || "No message received"}</p>
              </div>

              {/* Display any additional data if available */}
              {data && Object.keys(data).length > 1 && (
                <div className="bg-muted p-4 rounded-md">
                  <h3 className="font-medium mb-2">Additional Data:</h3>
                  <pre className="text-sm overflow-auto p-2 bg-background rounded">
                    {JSON.stringify(
                      Object.fromEntries(Object.entries(data).filter(([key]) => key !== "message")),
                      null,
                      2,
                    )}
                  </pre>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button onClick={handleRefresh} disabled={isLoading} className="flex items-center">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
          Refresh Data
        </Button>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  )
}
