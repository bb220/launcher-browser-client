import type React from "react"
import { Navbar } from "@/components/landing/navbar"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar isAuthPage={true} />
      {children}
    </>
  )
}
