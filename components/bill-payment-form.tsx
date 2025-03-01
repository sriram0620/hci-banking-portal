"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BillPaymentForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Handle success (e.g., show a success message or redirect)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="biller">Select Biller</Label>
        <Select>
          <SelectTrigger id="biller">
            <SelectValue placeholder="Choose a biller" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electricity">Electricity Board</SelectItem>
            <SelectItem value="water">Water Department</SelectItem>
            <SelectItem value="gas">Gas Company</SelectItem>
            <SelectItem value="internet">Internet Provider</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="account-number">Account / Consumer Number</Label>
        <Input id="account-number" placeholder="Enter your account or consumer number" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input id="amount" type="number" placeholder="Enter the amount" />
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8hci-banking-portalC5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing Payment...
            </div>
          ) : (
            "Pay Bill"
          )}
        </Button>
      </motion.div>
    </form>
  )
}

