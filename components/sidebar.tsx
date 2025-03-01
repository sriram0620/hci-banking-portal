"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DollarSign, PieChart, Send, CreditCard, User, Settings, HelpCircle } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { icon: PieChart, label: "Dashboard", href: "/dashboard" },
    { icon: Send, label: "Fund Transfer", href: "/fund-transfer" },
    { icon: CreditCard, label: "Bill Payments", href: "/bill-payments" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: HelpCircle, label: "Help", href: "/help" },
  ]

  return (
    <div className="hidden w-64 p-4 border-r border-border md:block bg-sidebar fixed h-full">
      <div className="flex items-center mb-6 space-x-2">
        <div className="p-1 bg-primary rounded-md">
          <DollarSign className="w-6 h-6 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold">SBI Banking</h1>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center w-full p-2 text-sm font-medium rounded-md transition-all duration-200 hover:translate-x-1 ${
              pathname === item.href
                ? "bg-primary/10 text-primary"
                : "text-sidebar-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <item.icon className="w-4 h-4 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

