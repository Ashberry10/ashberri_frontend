"use client"
import { FaUser } from 'react-icons/fa';
import { HiUsers} from 'react-icons/hi';
import {HiMiniUsers} from 'react-icons/hi2'
import {AiFillHome} from 'react-icons/ai'
import { useGetUserProfileQuery } from '@/app/store/slices/authApi';
import { BASE_URL } from '@/../api_constants';
import Link from 'next/link';
import Image from 'next/image';

import {IoLogOutSharp } from 'react-icons/io5'
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session, status } = useSession();
  const token: any = session?.user.accessToken;

  const { data:profileData, error, isLoading,refetch: refetchProfileUsersData  } = useGetUserProfileQuery(token || '');



  const userProfile = profileData?.user_profile;

  const profileImage = BASE_URL + userProfile?.file;

  // const profileImage = userProfile?.file ? BASE_URL + userProfile.file : null;

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
                  className="flex items-center text-gray-700  px-3 py-2 rounded-md text-s font-medium"
                  href="/"
                >
                  <AiFillHome className="mr-2 text-xl w-6 h-6"/>
              
                  Home

                </Link>

           
                <Link
                  className="flex items-center text-gray-700  px-3 py-2 rounded-md text-s font-medium"
                  href="/alluser"
                >
                  <HiMiniUsers className="mr-2 text-xl w-6 h-6"/>
              
                  All Users
                </Link>


                <Link
                 className="flex items-center text-gray-700  px-3 py-2 rounded-md text-s font-medium"
                  href="/profile"
                >
                  {/* <FaUser className="mr-2 h-5 w-5 " /> */}

                  {/* <Image className="w-12 h-12 rounded-full" src={profileImage} alt={userProfile?.name} width={48} height={48} /> */}
                  <img
      className="h-8 w-8 rounded-full mr-2"
      src={profileImage}
      alt="Profile"
    />
                  
                  
                  Profile
                </Link>





                <div className="ml-auto flex gap-2">
                  {session?.user ? (
                    <>
                      <button  className="flex items-center text-gray-700  px-3 py-2 rounded-md text-s font-medium" onClick={() => signOut()}>
                      <p className="text-sky-600">{session.user.name}</p>
                      <IoLogOutSharp  className="mr-2 h-5 w-5 " /> Sign Out
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
