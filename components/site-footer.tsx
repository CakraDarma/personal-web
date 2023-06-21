import * as React from "react"

import { addRoute, appRoute } from "@/config/footer"
import { UnstyledLink } from "@/components/ui/unstyledLinkProps"
import { Icons } from "@/components/icons"

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
        <div className="flex items-center">
          <span className="sr-only text-sm">connect with me:</span>
          <UnstyledLink
            className="mr-2.5 inline-flex h-7 w-7 items-center justify-center last-of-type:mr-0"
            href={"mailto: baguscakraa02@gmail.com?subject="}
          >
            <Icons.mail className="h-5 w-5" />
          </UnstyledLink>
          <UnstyledLink
            className="mr-2.5 inline-flex h-7 w-7 items-center justify-center last-of-type:mr-0"
            href={"https://github.com/CakraDarma"}
          >
            <Icons.github className="h-5 w-5" />
          </UnstyledLink>
          <UnstyledLink
            className="mr-2.5 inline-flex h-7 w-7 items-center justify-center last-of-type:mr-0"
            href={"https://linkedin.com/in/cakradarma"}
          >
            <Icons.linkedin className="h-5 w-5" />
          </UnstyledLink>
          <UnstyledLink
            className="mr-2.5 inline-flex h-7 w-7 items-center justify-center last-of-type:mr-0"
            href={"https://t.me/gungcakraa"}
          >
            <Icons.telegram className="h-5 w-5" />
          </UnstyledLink>
        </div>
      </div>
    </footer>
  )
}
