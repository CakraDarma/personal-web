import { UnstyledLink } from "@/ui/unstyledLinkProps"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface SocialProps {
  className?: string
}

export const SocialHome = ({ className }: SocialProps) => {
  return (
    <div className={cn("flex items-center", className)}>
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
  )
}
