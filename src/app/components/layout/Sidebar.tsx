// "use client"
// import React from 'react';
// import { FaUser } from 'react-icons/fa';
// import { HiUsers } from 'react-icons/hi';
// import { HiMiniUsers } from 'react-icons/hi2';
// import { AiFillHome } from 'react-icons/ai';
// import { useGetUserProfileQuery } from '@/app/store/slices/authApi';
// import { BASE_URL } from '@/../api_constants';
// import Link from 'next/link';
// import Image from 'next/image';
// import { IoLogOutSharp } from 'react-icons/io5';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation'; // Use 'next/router' for navigation

// const Sidebar = () => {
//   const router = useRouter(); // Use 'useRouter' from 'next/router'
//   const { data: session, status } = useSession();
//   const token = session?.user.accessToken;

//   const { data: profileData, error, isLoading, refetch: refetchProfileUsersData } = useGetUserProfileQuery(token || '');

//   const userProfile = profileData?.user_profile;
//   const profileImage = BASE_URL + userProfile?.file;

//   const isLinkActive = (href:any) => {
//     // Compare the current route with the link's route
//     return router.pathname === href ? 'active-link' : '';
//   };

//   return (
//     <div className="col-span-1 h-full pr-4 md:pr-6">
//       <div className="flex flex-col items-end">
//         <div className="space-y-2 lg:w-[230px]">
//           <div className="flex-shrink-0 mt-10">
//             <Link className="font-bold text-2xl pl-7" href="/">
//               Ashberri
//             </Link>
//           </div>

//           <div className="relative lg:flex items-row gap-4 p-4 rounded-full hover:bg-opacity-10 cursor-pointer items-center">
//             <div className="hidden md:block">
//               <div className="mt-4 space-y-4 ">
//                 <Link
//                   className={`hover:scale-105 flex items-center text-gray-700 px-3 py-2 rounded-md text-s font-medium hover:bg-gray-200 ${isLinkActive('/')}`}
//                   href="/"
//                 >
//                   <AiFillHome className="mr-2 text-xl w-6 h-6 transition-transform transform hover:scale-105" />
//                   Home
//                 </Link>

//                 <Link
//                   className={`hover:scale-105 flex items-center text-gray-700 px-3 py-2 rounded-md text-s font-medium hover:bg-gray-200 ${isLinkActive('/alluser')}`}
//                   href="/alluser"
//                 >
//                   <HiMiniUsers className="mr-2 text-xl w-6 h-6 transition-transform transform hover:scale-105" />
//                   All Users
//                 </Link>

//                 <Link className={`hover:scale-105 flex items-center text-gray-700 px-3 py-2 rounded-md text-s font-medium hover:bg-gray-200 ${isLinkActive('/profile')}`} href="/profile">
//                   <img className="h-8 w-8 rounded-full mr-2 transition-transform transform hover:scale-105" src={profileImage} alt="Profile" />
//                   Profile
//                 </Link>

//                 <div className="ml-auto flex gap-2">
//                   {session?.user ? (
//                     <button
//                       className="flex items-center text-gray-700 px-3 py-2 rounded-md text-s font-medium hover:bg-gray-200"
//                       onClick={() => signOut()}
//                     >
//                       <p className="text-sky-600">{session.user.name}</p>
//                       <IoLogOutSharp className="mr-2 h-5 w-5 transition-transform transform hover:scale-105" /> Sign Out
//                     </button>
//                   ) : (
//                     <button className="text-green-600" onClick={() => signIn()}>
//                       Sign In
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;








"use client"
import Sidelink from './Sidelink'
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser } from 'react-icons/fa'; // Import the icons you want to use
import { HiUsers } from 'react-icons/hi';
import { HiMiniUsers } from 'react-icons/hi2';
import { AiFillHome } from 'react-icons/ai';
import { useGetUserProfileQuery } from '@/app/store/slices/authApi';
import { BASE_URL } from '@/../api_constants';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogOutSharp } from 'react-icons/io5';
import { signIn, signOut, useSession } from 'next-auth/react';




interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const { data: session, status } = useSession();
  const token = session?.user.accessToken;

  const { data: profileData, error, isLoading, refetch: refetchProfileUsersData } = useGetUserProfileQuery(token || '');

  const userProfile = profileData?.user_profile;
  const profileImage = BASE_URL + userProfile?.file;
  
  const userName = session?.user?.name || "Guest"; 
  return (
    <nav>
      <ul>
       <div className=" space-y-9 ">
        <div className="flex-shrink-0 mt-10 ml-2">
       <Link className="font-bold text-2xl " href="/">
         Ashberri
       </Link>
     </div>
        
        
        
        <li>
          <Sidelink className="mr-2" activeClasses="text-gray-900 text-decoration-line: underline font-bold" text="Home" href="/" icon={<AiFillHome   className="mr-4 text-xl w-6 h-6 transition-transform transform hover:scale-105" />} />
        </li>

        <li>
          <Sidelink className="mr-2" activeClasses="text-gray-900 text-decoration-line: underline font-bold" text="Users" href="/alluser" icon={<HiMiniUsers className="mr-4 text-xl w-6 h-6 transition-transform transform hover:scale-105" />} />
        </li>

        <li>
          <Sidelink className="mr-2" activeClasses="text-gray-900 text-decoration-line: underline font-bold " text="Profile" href="/profile" icon={<img className="rounded-full mr-4 text-xl w-6 h-6 transition-transform transform hover:scale-105" src={profileImage} alt="Profile" />} />
        </li>




        <li>
          <Sidelink className="mr-2  " activeClasses="text-gray-900 text-decoration-line: underline font-bold " text = {userName} href="/login" icon={<IoLogOutSharp className="mr-4 text-xl w-6 h-6 transition-transform transform hover:scale-105" />} />
        </li>
      

                 </div>
        
        
        
      </ul>
      
    </nav>
  );
};

export default Navbar;
