"use client"
import { FaUser } from 'react-icons/fa';
import { HiUsers} from 'react-icons/hi';
import {HiMiniUsers} from 'react-icons/hi2'
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <div className="flex-shrink-0">
            <Link className="font-bold text-xl" href="/">
              Ashberri
            </Link>
          </div>

          <div className="relative lg:flex items-row gap-4 p-4 rounded-full hover:bg-opacity-10 cursor-pointer items-center">
            <div className="hidden md:block">
              <div className="mt-4 space-y-4">
                <Link
                  className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-s font-medium"
                  href="/alluser"
                >
                  <HiMiniUsers className="mr-2 text-xl w-6 h-6 text-violet-300"/>
              
                  All Users
                </Link>

                <Link
                  className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-s font-medium"
                  href="/profile"
                >
                  <FaUser className="mr-2 h-5 w-5 text-violet-300" />
                  Profile
                </Link>

                <div className="ml-auto flex gap-2">
                  {session?.user ? (
                    <>
                      <p className="text-sky-600">{session.user.name}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
