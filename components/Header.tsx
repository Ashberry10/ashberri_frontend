




"use client";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useState } from 'react'
import Link from 'next/link'
import { useAppSelector } from "./../store/hooks";
import LoadingPage from "../pages/LoadingPage";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const {data:session, status} = useSession()
  // const { name } = useAppSelector((state) => state.auth);
  // console.log(name);
  // if (status === "loading") {
  //   return <LoadingPage />;
  // }
  return (
    <>

    {session?.user ? (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link className="text-white font-bold text-xl" href="/">
                Ashberri
              </Link>
            </div>
   
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href ="/Alluser">
                  Alluser
                </Link>
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href ="/Profile">
                  Profile

                </Link>





                 <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user.name}</p>
            <button className="text-red-500" onClick={() => signOut()}>
            {/* <button className="text-red-500" onClick={() => signOut()  , router.push("/")}> */}

              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-label="Toggle mobile menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">
             Home
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"  href="/Alluser">
             Alluser
              </Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/Profile">
              Profile
            </Link>
            
            <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user.name}</p>
            <button className="text-red-500" onClick={() => signOut()}>

              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
            
            
          </div>
        </div>
      )}
    </nav>
    ) : (null)}

    </>
  )
}




// import { Transition } from "@headlessui/react";
// import { useRouter } from "next/router";
// import { signIn, signOut, useSession } from "next-auth/react";
// import dynamic from "next/dynamic";
// import { useState } from 'react'
// import Link from 'next/link'
// import { useAppSelector } from "./../store/hooks";
// import LoadingPage from "../pages/LoadingPage";

// const Header = () => {
//   const router = useRouter();

//   const menuItems = [
//     { key: '/', label: 'Home' },
//     { key: '/Alluser', label: 'Alluser' },
//     { key: '/Profile', label: 'Profile' },
//   ];
//   const { data: session, status } = useSession();

//   return (
//       <div className="sticky top-0 z-50">
//       <div className="flex flex-col h-screen bg-white sticky top-0 z-50">
//       <div className="h-16 flex items-center justify-center text-black text-xl font-semibold sticky top-0 z-50">Ashberri</div>
//       {menuItems.map((item) => (
//         <Link key={item.key} href={item.key}>
//           <h1 className={router.pathname === item.key ? 'active' : ''}>
//             {item.label}
//           </h1>
//         </Link>
//       ))}
//     </div>

//   <div className="flex flex-col h-screen bg-white">
//   {session?.user ? (
//   <nav className="bg-gray-800 flex items-center">
//     {/* Header content */}
//    </nav>
//     ) : null}
//     </div>
//     </div>

//   );
// };



// import React from 'react'
// import { Transition } from "@headlessui/react";
// import { useRouter } from "next/router";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Link from 'next/link'
// import { useAppSelector } from "./../store/hooks";
// import LoadingPage from "../pages/LoadingPage";
// function Header() {
//     const router = useRouter();

//   const menuItems = [
//     { key: '/', label: 'Home' },
//     { key: '/Alluser', label: 'Alluser' },
//     { key: '/Profile', label: 'Profile' },
//   ];
//   const { data: session, status } = useSession();

//   return (
//     <div className="sticky top-0 z-50 pr-5">
//       <div className="flex flex-col h-screen bg-slate-500  sticky top-0 z-50">
//       <div className="h-16 ">Ashberri</div>
//       {menuItems.map((item) => (
//         <Link key={item.key} href={item.key}>
//           <h1 className={router.pathname === item.key ? 'active' : ''}>
//             {item.label}
//           </h1>
//         </Link>
//       ))}
    

// <div>
//                     <div className="ml-auto flex gap-2">
//        {session?.user ? (
//          <>
//            <p className="text-sky-600"> {session.user.name}</p>
//            <button className="text-red-500" onClick={() => signOut()}>

//              Sign Out
//            </button>
//          </>
//        ) : (
//          <button className="text-green-600" onClick={() => signIn()}>
//            Sign In
//          </button>
//        )}
//      </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Header





