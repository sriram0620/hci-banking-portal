"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TransferLimits() {
  const limits = [
    { type: "NEFT", limit: 1000000, used: 250000 },
    { type: "IMPS", limit: 500000, used: 300000 },
    { type: "UPI", limit: 100000, used: 50000 },
  ]

  return (
    <Card className="mt-6 border border-border/50 shadow-md">
      <CardHeader>
        <CardTitle>Transfer Limits</CardTitle>
        <CardDescription>Your daily transaction limits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {limits.map((limit, index) => (
            <motion.div
              key={limit.type}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{limit.type}</span>
                <span className="text-sm font-medium">₹{limit.limit.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(limit.used / limit.limit) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
              <p className="text-xs text-muted-foreground">₹{limit.used.toLocaleString()} used today</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group">
          <ArrowRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
          Request Limit Increase
        </Button>
      </CardFooter>
    </Card>
  )
}

