import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

// import useCurrentUser from '@/hooks/useCurrentUser';

// import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
// import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
  //   const { data: currentUser } = useCurrentUser();
  const {data:session, status} = useSession()

  return (
    <>
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />

          <div className="relative lg:flex items-row gap-4 p-4 rounded-full hover:bg-opacity-10 cursor-pointer items-center">
            <div className="flex-shrink-0">
              <Link className="text-white font-bold text-xl" href="/">
                Ashberri
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="mt-4 space-y-4">
                <Link
                  className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/Alluser"
                >
                  <FaUser className="mr-2" /> {/* Icon */}
                  Alluser
                </Link>
                <Link
                  className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/Profile"
                >
                  <FaUser className="mr-2" /> {/* Icon */}
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
        </div>
      </div>
    </div>
      </>
  );
};

export default Sidebar;

