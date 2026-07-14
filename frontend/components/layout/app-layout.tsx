"use client"

import { ReactNode } from "react"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { TopNavbar } from "@/components/navbar/top-navbar"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}