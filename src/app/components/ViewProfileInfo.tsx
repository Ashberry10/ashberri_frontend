"use client"

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useGetUserProfileQuery } from '@/app/store/slices/authApi';
import LoadingPage from "@/app/components/LoadingPage"

 import Image from 'next/image';
import {
  useAcceptFriendRequestMutation,
  useGetAllUserFriendRequestQuery,
  useGetAllUserFriendsQuery,  
  useRejectFriendRequestMutation,

} from '@/app/store/slices/friendApi';
import { useRouter } from 'next/navigation'
import { BASE_URL } from '../../../api_constants';
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
     
       // if(friendrequest?.total_friend_requests==0)
       // {
       //   return<div>No Friend Request Found</div>
       // }
       
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
  
    var profileImage = BASE_URL + userProfile.file;
  
  return (
    <div>
    
    <div className="flex items-center mb-4">
        <Image className="w-12 h-12 rounded-full" src={profileImage} alt={userProfile?.name} width={48} height={48} />
        <div className="ml-4">
          <h2 className="text-lg font-bold">{userProfile?.name}</h2>
          <p className="text-gray-500">{userProfile?.email}</p>
        </div>
          <button
            className="ml-auto text-blue-500 font-bold outline-none focus:outline-none"
            onClick={() => router.push('/edityourprofile')}
          >
            Edit Profile
          </button>
        </div>
    </div>
  )
}

export default ProfileInfo