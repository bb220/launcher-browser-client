import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <DashboardContent />
      </div>
    </main>
  )
}
