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
  useUnFriendMutation

} from '@/app/store/slices/friendApi';
import { useRouter } from 'next/navigation'
import { BASE_URL } from '../../../api_constants';
import Link from 'next/link';
interface Friends{
    id: number;
    name: string;
    compatibility: number;
    image:string
    sender_id:number
    user_id:number
  }
  



const YourFriends = () => {

    const { data: session, status } = useSession({
        required: true,
      });
    const token: any = session?.user.accessToken;
    const [unfriend] = useUnFriendMutation();
  
    const { data:friendrequest,refetch: refetchFriendRequest} = useGetAllUserFriendRequestQuery(token);

    const { data:friends,refetch: refetchYourFriends } = useGetAllUserFriendsQuery(token);
    const unFriend = async (friendId: number) => {
      try {
        const response = await unfriend({ access: token, formData: { receiver: friendId }});
        refetchYourFriends()
        refetchFriendRequest()
        
        console.log("Your Friend is unfriend  successfull")
        // Handle success, e.g., show a success message or update the UI.
      } catch (error) {
        console.log("some error")
        // Handle error, e.g., display an error message.
      }
    };
  const userFriends =friends?.friend
    
  console.log(userFriends);
  return (
    <div>

            {userFriends &&
                        userFriends.map((friends: Friends) => (

                          <div key={friends.id} className="mb-2">
                            <div>

                            <Link href={`/${friends.user_id}`}>
                            <Image className="w-12 h-12 rounded-full" src={BASE_URL+ "/media/" + friends.image} alt={friends.name} width={48} height={48} />
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
                      </Link>

                         <button
      className="bg-red-400 ml-10 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
      onClick={() => unFriend(friends.sender_id)}
    >
      Unfriend
    </button> 
                    </div>
                            </div>
  
        ))} 




    </div>
  )
}

export default YourFriends