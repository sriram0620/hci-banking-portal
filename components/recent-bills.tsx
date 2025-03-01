"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Smartphone, Tv, Home } from "lucide-react"

export function RecentBills() {
  const recentBills = [
    { icon: Zap, name: "Electricity Bill", amount: 1500, dueDate: "2025-03-15" },
    { icon: Smartphone, name: "Mobile Recharge", amount: 499, dueDate: "2025-03-10" },
    { icon: Tv, name: "DTH Subscription", amount: 299, dueDate: "2025-03-20" },
    { icon: Home, name: "Water Bill", amount: 750, dueDate: "2025-03-25" },
  ]

  return (
    <Card className="border border-border/50 shadow-md">
      <CardHeader>
        <CardTitle>Recent Bills</CardTitle>
        <CardDescription>Your upcoming and recent bill payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentBills.map((bill, index) => (
            <motion.div
              key={bill.name}
              className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <bill.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{bill.name}</p>
                  <p className="text-sm text-muted-foreground">Due: {bill.dueDate}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{bill.amount}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Pay Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

