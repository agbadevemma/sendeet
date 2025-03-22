import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Admin = (props: Props) => {
  return (
     redirect("/admin/login")
  )
}

export default Admin