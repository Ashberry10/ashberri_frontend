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
                {friends.name} 
                 {friends.compatibility === 0 && (
                  <div>   <h1 className='text-xs font-medium ml-32'>&nbsp;&nbsp;20% </h1>
                  <div className="w-40 h-2 rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="bg-primary h-2 rounded p-0.2 text-center text-xs font-medium leading-none text-primary-100 bg-violet-400"
                
                
                style={{ width: '20%' }}>
                  
         </div>
              
                </div>
                </div>
                )}
                {friends.compatibility === 3 && (
                  <div>   <h1 className='text-xs font-medium ml-32'>&nbsp;&nbsp;50% </h1>
                  <div className="w-40 h-2 rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="bg-primary h-2 rounded p-0.2 text-center text-xs font-medium leading-none text-primary-100 bg-violet-400"
                
                
                style={{ width: '50%' }}>
                  
         </div>
              
                </div>
                </div>  
                )}
                   {friends.compatibility === 4 && (
                  <div>   <h1 className='text-xs font-medium ml-32'>&nbsp;&nbsp;80% </h1>
                  <div className="w-40 h-2 rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="bg-primary h-2 rounded p-0.2 text-center text-xs font-medium leading-none text-primary-100 bg-violet-400"
                
                
                style={{ width: '80%' }}>
                  
         </div>
              
                </div>
                </div> 
                  
                  )}
                  
                  
                  {friends.compatibility === 5 && (
                    <div>   <h1 className='text-xs font-medium ml-32'>100% </h1>
                    <div className="w-40 h-2 rounded bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary h-2 rounded p-0.2 text-center text-xs font-medium leading-none text-primary-100 bg-violet-400"
                  
                  
                  style={{ width: '100%' }}>
                    
           </div>
                
                  </div>
                  </div> 
                    )} 
                      </Link>

                         <button
      className="bg-red-400 ml-10 hover:bg-red-500 text-white font-semibold py-2 px-4 mt-2 rounded-full focus:outline-none"
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