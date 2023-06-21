import { UnstyledLink } from "@/ui/unstyledLinkProps"

import { social } from "@/config/social"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

type SocialWithIcon = (typeof social)[0] & { icon }

const icon = {
  email: Icons.gitHub,
  linkedin: Icons.gitHub,
  ithub: Icons.gitHub,
  telegram: Icons.gitHub,
}

const socialList: SocialWithIcon[] = social.map((social) => ({
  ...social,
  icon: icon[social.title.toLowerCase()],
}))

type SocialHomeProps = {
  className?: string
  iconStyle?: string
}

export const SocialHome: React.FunctionComponent<SocialHomeProps> = (props) => {
  return (
    <div className={cn("flex items-center", props.className)}>
      <span className="sr-only text-sm">connect with me:</span>
      {socialList.map((social) => {
        return (
          <UnstyledLink
            className="mr-2.5 inline-flex h-7 w-7 items-center justify-center last-of-type:mr-0"
            href={social.href}
            key={social.href}
            title={`Connect with me on ${social.title}`}
          >
            <social.icon className={cn("h-5 w-5", props.iconStyle)} />
            <span className="sr-only">
              Connect with Rizki M Citra on {social.title}
            </span>
          </UnstyledLink>
        )
      })}
    </div>
  )
}
