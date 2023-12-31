import { createElement, forwardRef } from "react"
import NextLink, { type LinkProps } from "next/link"

export type UnstyledLinkProps = {
  href: string
  title?: string
  className?: string
  children?: React.ReactNode
} & LinkProps

export const UnstyledLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ href, ...props }, ref) => {
    if (href.startsWith("http")) {
      return createElement(
        "a",
        { href, rel: "noopener noreferrer", target: "_blank", ...props, ref },
        props.children
      )
    }

    return (
      <NextLink href={href} scroll={false} {...props} ref={ref}>
        {props.children}
      </NextLink>
    )
  }
)

UnstyledLink.displayName = "UnstyledLink"
