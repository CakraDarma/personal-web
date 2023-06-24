import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import LargeHeading from "@/components/ui/large-heading"
import Paragraph from "@/components/ui/paragraph"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Similarity API | Page not found",
  description: "Free & open-source text similarity API",
}

export default function PageNotFound() {
  return (
    <section className="layout mx-auto flex max-w-7xl flex-col items-center gap-6 pt-32 text-center">
      <LargeHeading>Site not found...</LargeHeading>
      <Paragraph>The site you&apos;re searching for does not exist.</Paragraph>
      {/* <h1 className="dark:bg-green-300 dark:text-red-400">tot</h1> */}
      <Link
        className={buttonVariants({
          variant: "ghost",
          className: "w-fit",
        })}
        href="/"
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
    </section>
  )
}
