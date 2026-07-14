"use client"

import { Bell, Search, UserCircle } from "lucide-react"

export function TopNavbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <Search className="h-5 w-5 cursor-pointer" />
        <Bell className="h-5 w-5 cursor-pointer" />
        <UserCircle className="h-7 w-7 cursor-pointer" />
      </div>
    </header>
  )
}