

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {store} from "../app/store/store"
import Providers from "./providers/sessionProvider";
import NextAuthSessionProvider from "./providers/sessionProvider";
import SessionProvider from './components/SessionProvider';
import { getServerSession } from "next-auth";
// import {SessionProvider} from "next-auth/react";
import Layout from './components/Layout';
import Sidebar from './components/layout/Sidebar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}> 
      {/* <NextAuthSessionProvider > */}
      <SessionProvider session={session}>
      <Providers >
        {/* layout */}
          <div className="xs:hidden sm:block ">
            <div className="h-screen  ">
        <div className="h-full  ">
          <div className="grid grid-cols-4  h-full ">
                       <div className="
            w-40
             lg:w-80              
                   border-x-[1px]
                "
              >
            <Sidebar />
            </div>
            <div 
              className="
                col-span-3
                lg:col-span-2
            ">

      {children}



          </div>
          </div>
       </div>
      </div>    
     </div>
      {/* </Layout> */}
          {/* layout */}
      </Providers>

      </SessionProvider>
      {/* </NextAuthSessionProvider> */}
      </body>
    </html>
  )
}
