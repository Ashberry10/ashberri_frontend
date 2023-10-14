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
interface FriendRequest {
    id: number;
    name: string;
    compatibility: number;
    image:string,
    sender:number,
    sender_name:string
    status:string
  }
  



function FriendRequest() {


    const { data: session, status } = useSession({
        required: true,
      });
        const token: any = session?.user.accessToken;
        const [acceptFriendRequest] = useAcceptFriendRequestMutation();
        const { data:profileData, error, isLoading,refetch: refetchProfileUsersData  } = useGetUserProfileQuery(token || '');
        const [rejectFriendRequest] = useRejectFriendRequestMutation();
      
        const { data:friendrequest} = useGetAllUserFriendRequestQuery(token);
        const { data:friends } = useGetAllUserFriendsQuery(token);
      
        
        const handleAcceptFriendRequest = async (friendId: number) => {
          try {
            const response = await acceptFriendRequest({ access: token, formData: { sender: friendId,action:'accept' }});
            // Handle success, e.g., show a success message or update the UI.
          } catch (error) {
            // Handle error, e.g., display an error message.
          }
        };
        
        const handleRejectFriendRequest = async (friendId: number) => {
          try {
            const response = await rejectFriendRequest({ access: token, formData: { sender: friendId,action:'reject'  }});
            // Handle success, e.g., show a success message or update the UI.
          } catch (error) {
            // Handle error, e.g., display an error message.
          }
        };
        
        
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
        
        const userProfileFriendrequest = friendrequest?.friend_requests;
        const userProfileTotalFriendrequest = friendrequest?.total_friend_requests
        // const userFriends =friends?.friend
        console.log(userProfileFriendrequest)
      
      
    
    
    
    
    
  return (
    <div>



<h3 className="text-lg font-bold mb-2">Total Friend Request:         {userProfileTotalFriendrequest ?  (userProfileTotalFriendrequest) : (   "No friend request" ) 
}</h3>
                      {userProfileFriendrequest &&
                        userProfileFriendrequest.map((friendRequest: FriendRequest) => (
                          <div key={friendRequest.id} className="mb-2">
                            {/* <Image className="w-12 h-12 rounded-full" src={BASE_URL+ "/media/" + friendRequest.image} alt={friendRequest?.sender_name} width={48} height={48} /> */}

                  <p>
                {friendRequest.sender_name} = 
                {friendRequest.compatibility === 0 && (
                  <span className="text-yellow-500">Not Friend</span>
                  
                )}
                {friendRequest.compatibility === 3 && (
                  <span className="text-yellow-500">⭐⭐⭐</span>
                  
                )}
                   {friendRequest.compatibility === 4 && (
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                  
                  )}
                  
                  
                  {friendRequest.compatibility === 5 && (
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    
                    )}
                    </p>
                
                    <div>
        <button
          className="text-green-500 font-bold"
          onClick={() => handleAcceptFriendRequest(friendRequest.sender)}
        >
          Accept
        </button>
        <button
          className="text-red-500 font-bold ml-2"
          onClick={() => handleRejectFriendRequest(friendRequest.sender)}
        >
          Reject
        </button>
      </div>
      <hr className="my-4" />
    </div>




         
                    ))} 

    </div>
  )
}

export default FriendRequest