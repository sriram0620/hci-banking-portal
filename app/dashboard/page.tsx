"use client"

import { Bell, RefreshCw, Search } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AccountSummary } from "@/components/account-summary"
import { RecentTransactions } from "@/components/recent-transactions"
import { QuickActions } from "@/components/quick-actions"
import { Notifications } from "@/components/notifications"
import { FinancialOverview } from "@/components/financial-overview"

export default function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome, CS22B1023</h1>
          <p className="text-sm text-muted-foreground">Last login: March 1, 2025 at 12:45 PM</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input placeholder="Search..." className="w-64 pl-10 transition-all duration-300 focus:w-72" />
            <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="relative transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <AccountSummary />

      <div className="grid gap-6 mt-6 md:grid-cols-3">
        <QuickActions />
        <RecentTransactions />
        <Notifications />
      </div>

      <div className="mt-6">
        <FinancialOverview />
      </div>
    </motion.div>
  )
}

