
import React from 'react'
import { useSession } from "next-auth/react";
import ViewAllUser from "@/app/components/ViewAllUser"

const Alluser = () => {
    
  return (
    <div><ViewAllUser/></div>
  )
}

export default Alluser