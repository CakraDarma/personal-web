import React from "react"
import { notFound } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

type Props = {}

async function AdminPage({}: Props) {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (session?.user.role !== "ADMIN") {
    notFound()
  }
  return <div>AdminPage</div>
}

export default AdminPage
