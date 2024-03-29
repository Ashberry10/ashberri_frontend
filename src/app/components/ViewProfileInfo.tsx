"use client"

import React, { useEffect, useState } from 'react';
import { useGetUserProfileQuery } from '@/app/store/slices/authApi';
import LoadingPage from "@/app/components/LoadingPage"
import Image from 'next/image';
import {
  useAcceptFriendRequestMutation,
  useGetAllUserFriendRequestQuery,
  useGetAllUserFriendsQuery,  
  useRejectFriendRequestMutation,

} from '@/app/store/slices/friendApi';
import { IoLogOutSharp } from 'react-icons/io5';
import { useRouter } from 'next/navigation'
import { BASE_URL } from '../../../api_constants';
import { signIn, signOut, useSession } from 'next-auth/react';

const ProfileInfo = () => {

    const router = useRouter();
    const { data: session, status } = useSession({
    required: true,
  });
    const token: any = session?.user.accessToken;
    const [acceptFriendRequest] = useAcceptFriendRequestMutation();
    const { data:profileData, error, isLoading,refetch: refetchProfileUsersData  } = useGetUserProfileQuery(token || '');
    const [rejectFriendRequest] = useRejectFriendRequestMutation();
  
    const { data:friendrequest} = useGetAllUserFriendRequestQuery(token);
    const { data:friends } = useGetAllUserFriendsQuery(token);
  

    useEffect(() => {
        if (error) {
          console.error('Failed to fetch user profile:', error);
         }
       }, [error]);
     
  
       if (isLoading) {
         return <div><LoadingPage /></div>;
       }
       
       if (error) {
         return <div>Error occurred while fetching user profile.</div>;
       }


    const userProfile = profileData?.user_profile;
    const userProfileFriendrequest = friendrequest?.friend_requests;
    const userProfileTotalFriendrequest = friendrequest?.total_friend_requests
    const userFriends =friends?.friend
    // console.log(userFriends)
    const handleSignOut = () => {
      signOut();
    };
    var profileImage = BASE_URL + userProfile.file;
  
  return (
    <div>
    
    <div className="flex items-center mb-4">
        <img className="w-40 h-40 rounded-full" src={profileImage} alt={userProfile?.name}  />
        <div className="ml-28 mb-20">
          <h2 className="text-2xl font-bold">{userProfile?.name}</h2>
          <p className="text-gray-500">{userProfile?.email}</p>
          </div>
          <button
                     className=" bg-gray-200  hover:bg-gray-300 mb-28 mr-30 px-2 text-gray-950 font-semibold  rounded focus:outline-none"

            onClick={() => router.push('/edityourprofile')}
            >
            Edit Profile
          </button>

          <button
                     className="ml-5 bg-gray-200  hover:bg-gray-300 mb-28 mr-30 px-2 text-gray-950 font-semibold  rounded focus:outline-none"
 onClick={handleSignOut}
            >
            {/* <IoLogOutSharp className="mr-4 text-xl w-6 h-6 transition-transform transform hover:scale-105" />  */}
            Log Out
            </button>
       
        </div>
    </div>
  )
}

export default ProfileInfo