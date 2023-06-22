import * as React from "react"

import { addRoute, appRoute } from "@/config/footer"
import { UnstyledLink } from "@/components/ui/unstyledLinkProps"
import { Icons } from "@/components/icons"

import { SocialHome } from "./ui/socialHome"

export function SiteFooter() {
  return (
    <footer className="layout flex flex-col gap-4 py-10 md:h-24 md:py-0">
      <div className="flex w-full flex-col space-y-3 md:flex-row md:justify-between md:space-x-3 md:space-y-0">
        <div className="flex w-full flex-col space-y-3 md:max-w-max md:flex-row md:space-x-3 md:space-y-0">
          {appRoute.map((route) => (
            <UnstyledLink
              href={route.path}
              key={`footer-${route.path}`}
              className="border-b border-dashed border-transparent text-sm font-medium text-theme-500 hover:border-b-theme-500 dark:text-theme-400 md:max-w-max"
            >
              {route.name}
            </UnstyledLink>
          ))}
        </div>
        <div className="flex w-full flex-col space-y-3 md:max-w-max md:flex-row md:space-x-3 md:space-y-0">
          {addRoute.map((route) => (
            <UnstyledLink
              href={route.path}
              key={`footer-${route.path}`}
              className="border-b border-dashed border-transparent text-sm font-medium text-theme-500 hover:border-b-theme-500 dark:text-theme-400 md:max-w-max"
            >
              {route.name}
            </UnstyledLink>
          ))}
        </div>
      </div>
      <div className="mt-4 max-w-max">
        <SocialHome />
      </div>
    </footer>
  )
}
