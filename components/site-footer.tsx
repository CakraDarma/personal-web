import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col gap-4 px-64 py-10 md:h-24 md:py-0">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center gap-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Home</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
