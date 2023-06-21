import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="layout flex flex-col gap-4 py-10 md:h-24 md:py-0">
        <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 md:justify-between">
          <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 w-full md:max-w-max">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 w-full md:max-w-max">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
