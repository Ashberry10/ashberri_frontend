// import React from 'react';
// import { signIn, signOut, useSession } from "next-auth/react";

// import Sidebar from "./layout/Sidebar"

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const {data:session, status} = useSession()

//   return (
//     <>
//     {session?.user ? (
//     <div className="h-screen ">
//       <div className="container h-full mx-auto xl:px-4 max-w-fullxl">
//         <div className="grid grid-cols-4 h-full">
//           <Sidebar />
//           <div 
//             className="
//               col-span-3 
//               lg:col-span-2 
//               border-x-[1px] 
            
//           ">
//             {children}
//           </div>
//           {/* <FollowBar /> */}
//         </div>
//      </div>
//     </div>
//     ) : (null)}

//     </>
//   )
// }

// export default Layout;








// import Link from 'next/link';
// import { FaUser } from 'react-icons/fa';
// import React from 'react'
//  import Sidebar from "./layout.tsx/Sidebar"
//  import { signIn, signOut, useSession } from "next-auth/react";
//  interface LayoutProps {
//   // other props
//   children?: React.ReactNode; // Make children prop optional
// }

// // const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//  const {data:session, status} = useSession()

//   return (
//         <>
//     {session?.user ? (
//     <div className="h-screen ">
//       <div className="container h-full mx-auto xl:px-30 max-w-6xl">
//         <div className="grid grid-cols-4 h-full">





//         <div className="col-span-1 h-full pr-4 md:pr-6">
//       <div className="flex flex-col items-end">
//         <div className="space-y-2 lg:w-[230px]">
//           {/* <SidebarLogo /> */}

//           <div className="relative lg:flex items-row gap-4 p-4 rounded-full hover:bg-opacity-10 cursor-pointer items-center">
//             <div className="flex-shrink-0">
//               <Link className="text-white font-bold text-xl" href="/">
//                 Ashberri
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <div className="mt-4 space-y-4">
//                 <Link
//                   className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   href="/Alluser"
//                 >
//                   <FaUser className="mr-2" /> {/* Icon */}
//                   Alluser
//                 </Link>
//                 <Link
//                   className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   href="/Profile"
//                 >
//                   <FaUser className="mr-2" /> {/* Icon */}
//                   Profile
//                 </Link>







//                  <div className="ml-auto flex gap-2">
//         {session?.user ? (
//           <>
//             <p className="text-sky-600"> {session.user.name}</p>
//             <button className="text-red-500" onClick={() => signOut()}>
//             {/* <button className="text-red-500" onClick={() => signOut()  , router.push("/")}> */}

//               Sign Out
//             </button>
//           </>
//         ) : (
//           <button className="text-green-600" onClick={() => signIn()}>
//             Sign In
//           </button>
//         )}
//       </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
//           {/* <Sidebar /> */}
//           <div 
//             className="
//               col-span-3 
//               lg:col-span-2 
//               border-x-[1px] 
            
//           ">
//              {children}

//           </div>
//           {/* <FollowBar /> */}
//         </div>
//      </div>
//     </div>
//     ) : (null)}
//     </>
//   )
// }

// export default Layout







// import React from 'react';
// import Sidebar from "./layout/Sidebar";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div>
//       <div className=" h-screen ">
       
//           <div className="h-full grid lg:grid-cols-3 grid-cols-4">
//             <div       className="
//            w-40
//            lg:w-80     
//            h-full
//                 border-x-[1px]
//               "
//             >
//               <Sidebar />
//               </div>
//             <div
//               className="

             
//               "
//             >
//               {children}
//             </div>
//           </div>
       
//       </div>
//     </div>
//   );
// };

// export default Layout;


// import React from 'react';
// import Sidebar from "./layout/Sidebar";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div>
//       <div className="h-full ">
//         <div className=" h-full ">
//           <div className="grid   lg:grid-cols-3  md:grid-cols-4  h-full">
//           <div       className="
             
//             lg:w-80     
//             h-full
//                  border-x-[1px]
//                "
//              >
            
//               <Sidebar /></div>
//             <div
//               className="
           
//               "
//             >
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;






// import React from 'react'
// import Sidebar from "./layout/Sidebar"

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="xs:hidden sm:block ">
//            <div className="h-screen  ">
//        <div className="h-full  ">
//          <div className="grid grid-cols-4  h-full ">
//                       <div className="
//            w-40
//             lg:w-80              
//                   border-x-[1px]
//                "
//              >
//            <Sidebar />
//            </div>
//            <div 
//              className="
//                col-span-3
//                lg:col-span-2
//            ">
//                          {children}
//            </div>
//          </div>
//       </div>
//      </div>
      
//     </div>
//   )
// }

// export default Layout







// import React from 'react';
// import Sidebar from "./layout/Sidebar";

// const Layout = () => {
//   return (
//     <div className="xs:hidden sm:block">
//       <div className="h-screen">
//         <div className="h-full">
//           <div className="grid grid-cols-4 h-full">
//             <div className="w-40 lg:w-80 border-x-[1px]">
//               <Sidebar />
//             </div>
//             <div className="col-span-3 lg:col-span-2">
//               {/* Content */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Layout;
