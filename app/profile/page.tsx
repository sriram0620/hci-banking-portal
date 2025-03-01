"use client"

import { Camera, Edit2, User } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Profile() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-primary text-primary-foreground">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div>
              <CardTitle>CS22B1023</CardTitle>
              <CardDescription>Account Number: XXXX1234</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" value="CS22B1023" readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" value="CS22B1023@iiitdm.ac.in" readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value="+91 98765 43210" readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" value="123 Main St, Mumbai, Maharashtra 400001" readOnly />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

