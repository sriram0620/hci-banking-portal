"use client"

import { Search } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Help() {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your registered email address.",
    },
    {
      question: "What should I do if I suspect fraudulent activity on my account?",
      answer:
        "If you suspect any fraudulent activity, immediately contact our 24/7 customer support at 1800-123-4567 and report the issue. Also, temporarily freeze your account from the mobile app or internet banking.",
    },
    {
      question: "How can I update my contact information?",
      answer:
        "You can update your contact information by logging into your account, navigating to the Profile section, and selecting 'Update Contact Information'. Alternatively, you can visit your nearest SBI branch with valid ID proof.",
    },
    {
      question: "What are the charges for fund transfers?",
      answer:
        "Fund transfer charges vary based on the mode of transfer (NEFT, RTGS, IMPS) and the amount. You can find the detailed charges on our website or in the 'Fees and Charges' section of the mobile app.",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-2xl font-bold mb-6">Help & Support</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>How can we help you?</CardTitle>
          <CardDescription>Search our help center or browse frequently asked questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-8" placeholder="Search for help..." />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Still need help?</CardTitle>
          <CardDescription>Contact our customer support team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>Phone:</strong> 1800-123-4567 (Toll-free)
          </p>
          <p>
            <strong>Email:</strong> support@sbi.com
          </p>
          <p>
            <strong>Live Chat:</strong> Available 24/7 on our website and mobile app
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

