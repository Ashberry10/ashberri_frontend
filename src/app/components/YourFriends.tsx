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

interface Friends{
    id: number;
    name: string;
    compatibility: number;
    image:string
  }
  



const YourFriends = () => {

    const { data: session, status } = useSession({
        required: true,
      });
    const token: any = session?.user.accessToken;
    const [acceptFriendRequest] = useAcceptFriendRequestMutation();
    const { data:profileData, error, isLoading,refetch: refetchProfileUsersData  } = useGetUserProfileQuery(token || '');
    const [rejectFriendRequest] = useRejectFriendRequestMutation();
  
    const { data:friendrequest} = useGetAllUserFriendRequestQuery(token);
    const { data:friends } = useGetAllUserFriendsQuery(token);
    
  const userFriends =friends?.friend
    
  console.log(userFriends);
  return (
    <div>

            {userFriends &&
                        userFriends.map((friends: Friends) => (

                          <div key={friends.id} className="mb-2">
                            <Image className="w-12 h-12 rounded-full" src={BASE_URL+ "/media/" + friends.image} alt={friends?.name} width={48} height={48} />
    <p>

                {friends.name} = 
                {friends.compatibility === 0 && (
                  <span className="text-yellow-500">Not Friend</span>
                  
                )}
                {friends.compatibility === 3 && (
                  <span className="text-yellow-500">⭐⭐⭐</span>
                  
                )}
                   {friends.compatibility === 4 && (
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                  
                  )}
                  
                  
                  {friends.compatibility === 5 && (
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    
                    )}
                    </p>
                            </div>
  
        ))} 



    </div>
  )
}

export default YourFriends