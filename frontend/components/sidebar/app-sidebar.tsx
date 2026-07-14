"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  FileText,
  Bot,
  Boxes,
  Wrench,
  ShieldAlert,
  ClipboardCheck,
  Network,
  BarChart3,
  Settings,
} from "lucide-react"

const menuItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Documents", href: "/documents", icon: FileText },
  { title: "Industrial Copilot", href: "/copilot", icon: Bot },
  { title: "Assets", href: "/assets", icon: Boxes },
  { title: "Maintenance", href: "/maintenance", icon: Wrench },
  { title: "Safety", href: "/safety", icon: ShieldAlert },
  { title: "Compliance", href: "/compliance", icon: ClipboardCheck },
  { title: "Knowledge Graph", href: "/knowledge-graph", icon: Network },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Settings", href: "/settings", icon: Settings },
]

export function AppSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen p-4">
      <h1 className="mb-8 text-xl font-bold">Industrial Brain OS</h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent"
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  )
}