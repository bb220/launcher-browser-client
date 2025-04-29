import { NextResponse } from "next/server"

// This is a mock API route that simulates your backend protected endpoint
// Replace this with your actual API integration

export async function GET() {
  // In a real implementation, you would:
  // 1. Verify the authentication token from the request headers
  // 2. Make a request to your actual backend service
  // 3. Return the response from your backend

  // For demonstration purposes, we'll return a mock response
  // with a 2-second delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Simulate a successful response
  return NextResponse.json({
    message: "You have successfully accessed the protected endpoint!",
    user: {
      id: "user_123",
      email: "user@example.com",
      role: "user",
    },
    timestamp: new Date().toISOString(),
  })

  // To simulate an error response, uncomment the following:
  // return NextResponse.json(
  //   { message: "Access denied" },
  //   { status: 401 }
  // )
}
