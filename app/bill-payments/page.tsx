"use client"

import { Zap, Smartphone, Tv, Home } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BillPaymentForm } from "@/components/bill-payment-form"
import { RecentBills } from "@/components/recent-bills"

export default function BillPayments() {
  const billCategories = [
    { icon: Zap, name: "Electricity", color: "bg-yellow-100 text-yellow-600" },
    { icon: Smartphone, name: "Mobile", color: "bg-blue-100 text-blue-600" },
    { icon: Tv, name: "DTH", color: "bg-purple-100 text-purple-600" },
    { icon: Home, name: "Water", color: "bg-cyan-100 text-cyan-600" },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-2xl font-bold mb-6">Bill Payments</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="border border-border/50 shadow-md">
            <CardHeader>
              <CardTitle>Pay Your Bills</CardTitle>
              <CardDescription>Quick and easy bill payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {billCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full h-24 flex flex-col items-center justify-center space-y-2 ${category.color}`}
                    >
                      <category.icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <BillPaymentForm />
            </CardContent>
          </Card>
        </div>

        <div>
          <RecentBills />
        </div>
      </div>
    </motion.div>
  )
}

