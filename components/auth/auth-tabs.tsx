"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"

export function AuthTabs() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")

  // Set initial tab based on URL parameter
  useEffect(() => {
    if (tabParam === "register") {
      setActiveTab("register")
    } else if (tabParam === "login") {
      setActiveTab("login")
    }
  }, [tabParam])

  return (
    <Card className="w-full max-w-md mx-auto">
      <Tabs
        defaultValue="login"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "login" | "register")}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm inTabView={true} />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm inTabView={true} />
        </TabsContent>
      </Tabs>
    </Card>
  )
}
