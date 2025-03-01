"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FundTransferForm } from "@/components/fund-transfer-form"
import { RecentBeneficiaries } from "@/components/recent-beneficiaries"
import { TransferLimits } from "@/components/transfer-limits"
import { Button } from "@/components/ui/button"
import { HelpCircle, Info } from "lucide-react"

export default function FundTransfer() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-2xl font-bold mb-6">Fund Transfer</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="border border-border/50 shadow-md">
            <CardHeader>
              <CardTitle>Transfer Money</CardTitle>
              <CardDescription>Send money to your beneficiaries</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="within-bank" className="w-full">
                <TabsList className="grid w-full grid-cols-4 p-1 bg-muted/50 backdrop-blur-sm">
                  <TabsTrigger value="within-bank">Within SBI</TabsTrigger>
                  <TabsTrigger value="neft">NEFT</TabsTrigger>
                  <TabsTrigger value="imps">IMPS</TabsTrigger>
                  <TabsTrigger value="upi">UPI</TabsTrigger>
                </TabsList>

                <TabsContent value="within-bank" className="mt-4">
                  <FundTransferForm transferType="within-bank" />
                </TabsContent>
                <TabsContent value="neft" className="mt-4">
                  <FundTransferForm transferType="neft" />
                </TabsContent>
                <TabsContent value="imps" className="mt-4">
                  <FundTransferForm transferType="imps" />
                </TabsContent>
                <TabsContent value="upi" className="mt-4">
                  <FundTransferForm transferType="upi" />
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t border-border">
              <div className="flex items-center text-sm text-muted-foreground">
                <Info className="w-4 h-4 mr-2" />
                <span>Transactions are secured with 256-bit encryption</span>
              </div>
              <Button variant="ghost" size="sm" className="hover:text-primary transition-colors duration-200">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <RecentBeneficiaries />
          <TransferLimits />
        </div>
      </div>
    </motion.div>
  )
}

