import Image from "next/image"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"

import { PortfolioList } from "@/components/portofolio-list"
import { SocialHome } from "@/components/socialHome"

export default async function IndexPage() {
  return (
    <>
      <div className="md:layout pattern h-40 w-full" />

      <main className="layout">
        <section className="flex flex-col">
          <div className="relative flex h-14 md:h-16">
            <Image
              src="/cakra.jpg"
              alt="Cakra Darma"
              width={128}
              height={128}
              className="absolute bottom-0.5 left-1 h-32 w-32 cursor-pointer rounded-full border-4 border-theme-50 object-cover object-top dark:border-theme-900"
              quality={100}
              priority
            />
            <SocialHome className="ml-auto max-w-max" />
          </div>

          <div className="mt-3 md:mt-6">
            <h1>Cakra Darma</h1>
            <h2 className="mb-7 max-w-max bg-gradient-to-r from-primary-500 to-ternary-500 bg-clip-text text-xl font-bold text-transparent dark:text-transparent md:text-2xl">
              Student &amp; Fullstack Developer
            </h2>

            <div className="md:pb-6 [&>p:not(:last-child)]:mb-3 [&>p]:max-w-prose">
              <p>
                Hello👋, I&apos;m Cakra Darma, a guy who loves to code, music
                and coffee. Welcome to my personal website, where you can find
                my portfolio, blog and more.
              </p>

              <p>
                I am a <strong>passionate technology enthusiast</strong>
                who constantly seeks opportunities to expand my knowledge and
                skills in the ever-evolving tech industry
              </p>

              <p>
                With a focus on
                <strong>fullstack development</strong>, I possess a
                comprehensive skillset that enables me to work across the entire
                software stack.
              </p>

              <p>
                On this website, I like to share my{" "}
                <strong>various thoughts</strong> about web development related
                topics, general daily life and a place for{" "}
                <strong>showcasing my portfolio</strong>.
              </p>
            </div>
          </div>
        </section>

        <PortfolioList />
      </main>
    </>
  )
}
