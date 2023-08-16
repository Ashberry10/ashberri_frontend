import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

// import FollowBar from "@/components/layout/FollowBar"
import Sidebar from "./layout.tsx/Sidebar"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {data:session, status} = useSession()

  return (
    <>
    {session?.user ? (
    <div className="h-screen ">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div 
            className="
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
            
          ">
            {children}
          </div>
          {/* <FollowBar /> */}
        </div>
     </div>
    </div>
    ) : (null)}

    </>
  )
}

export default Layout;





