// @ts-nocheck // This is a client entry with "use client"
"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useAllUserPredictQuery,useUserPredictByIdQuery } from "@/app/store/slices/authApi";
import {
  useSendFriendRequestMutation,
  useCancelFriendRequestMutation,
  useGetAllUserFriendStatusQuery,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation
} from "@/app/store/slices/friendApi";
import Link from "next/dist/client/link";
import LoadingPage from "@/app/components/LoadingPage"
import LoadingIcon from "@/app/components/LoadingIcon"
import Image from "next/image";
import { BASE_URL } from '../../../api_constants'
import { Session } from "inspector";

import { getServerSession } from "next-auth";
import { access } from 'fs';

interface FriendProps {
  name: string;
  avatarUrl: string;
  status: string;
  accessToken:string
}

// ... (other imports)

export default function AllUser() {
//   const { data: session, status } = useSession();
const { data: session, status } = useSession({
  required: true,
});
  // Check if the session is loaded and the user is authenticated
  const token: any = session?.user.accessToken;


  const { data: allUsersData, isSuccess: isAllUsersDataSuccess, refetch: refetchallUsersData} = useAllUserPredictQuery(token);
  const [sendingRequests, setSendingRequests] = useState<string[]>([]);
  const [cancelingRequests, setCancelingRequests] = useState<string[]>([]);
  const [acceptingFriendRequests, setAcceptingFriendRequests] = useState<string[]>([]);
  const [rejectingFriendRequests, setRejectingFriendRequests] = useState<string[]>([]);
  const [sendFriendRequest] = useSendFriendRequestMutation();
  const [cancelFriendRequest] = useCancelFriendRequestMutation();
  const [acceptFriendRequest] = useAcceptFriendRequestMutation();
  const [rejectFriendRequest] = useRejectFriendRequestMutation();

  if (status === "loading") {
    return <LoadingPage />;
  }

  let allUsers = allUsersData || [];
  console.log(allUsers)
  // let friendStatuses = friendStatusesData || [];
  // console.log(friendStatuses)

  const handleSendFriendRequest = async (friendId: string) => {
    try {
      setSendingRequests((prevRequests) => [...prevRequests, friendId]);
      await sendFriendRequest({ access: token, formData: { receiver: friendId } });
      console.log(`Friend request sent successfully to ${friendId}`);
      refetchallUsersData();
      refetchuserdata()

    } catch (error: any) {
      console.log(`Failed to send friend request to ${friendId}: ${error.message}`);
    } finally {
      setSendingRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
    }
  };

  const handleCancelFriendRequest = async (friendId: string) => {
    try {
      setCancelingRequests((prevRequests) => [...prevRequests, friendId]);
      await cancelFriendRequest({ access: token, formData: { receiver: friendId } });
      console.log(`Friend request canceled for ${friendId}`);
      refetchallUsersData();
      refetchuserdata()

    } catch (error: any) {
      console.log(`Failed to cancel friend request for ${friendId}: ${error.message}`);
    } finally {
      setCancelingRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
    }
  };

  const handleAcceptFriendRequest = async (friendId: string) => {
    try {
      setAcceptingFriendRequests((prevRequests) => [...prevRequests, friendId]);
      await acceptFriendRequest({ access: token, formData: { sender: friendId,action:'accept' } });
      console.log(`Accepted friend request from ${friendId}`);
      refetchallUsersData();
      refetchuserdata()

    } catch (error: any) {
      console.log(`Failed to accept friend request from ${friendId}: ${error.message}`);
    } finally {
      setAcceptingFriendRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
    }
  };

  const handleRejectFriendRequest = async (friendId: string) => {
    try {
      setRejectingFriendRequests((prevRequests) => [...prevRequests, friendId]);
      await rejectFriendRequest({ access: token, formData: { sender: friendId,action:'reject' } });
      console.log(`Rejected friend request from ${friendId}`);
      refetchallUsersData();
      refetchuserdata()

    } catch (error: any) {
      console.log(`Failed to reject friend request from ${friendId}: ${error.message}`);
    } finally {
      setRejectingFriendRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
    }
  };
  if (!isAllUsersDataSuccess) {
    return null;
  }

  return (
    <>
      <h1 className=" mt-10 font-bold text-2xl mb-4">People you may know</h1>

      <div className="grid gap-3 mx-auto sm:grid-cols-4 sm:pr-10   lg:grid-cols-5 xs:grid-cols-1  ">
        {allUsers.map((curElem: any) => {
          // const friendStatus = friendStatuses.find((friend: any) => friend.friend_id === curElem.id);
          // console.log(friendStatus)
          const isSendingFriendRequest = sendingRequests.includes(curElem.id);
          const isCancelingFriendRequest = cancelingRequests.includes(curElem.id);
          const isAcceptingFriendRequest = acceptingFriendRequests.includes(curElem.id);
          const isRejectingFriendRequest = rejectingFriendRequests.includes(curElem.id);
          const image = BASE_URL+ curElem.image
          const imageWidth = 238;
          const imageHeight = 248;
          const friend=  curElem.friend_status
          console.log(friend)
          return (
            <div key={curElem.id} className="shadow-md rounded  overflow-hidden">
                      {/* <Link href={`/${curElem.id}`}> */}
                <Link href={`/alluser/${curElem.id}`}>

                <div className="">
                  {/* <Image className="w-full h-56 object-cover" src={curElem.avatarUrl} alt={curElem.name} /> */}
                  {/* <img className="w-full h-full object-cover" src={image} alt={curElem.name} width={imageWidth}
            height={imageHeight}  /> */}




<img className="lg:h-44 w-44 sm:h-40 mx-auto rounded " src={image} alt={curElem.name}


             />
 
                </div>
              </Link>

              <div className="px-4 py-3 sm:p-2">
              <p className="text-sm text-gray-500">{curElem.status}</p>
                {curElem.Compatibility !== 'Self' && (
                  <>
                <Link href={`/alluser/${curElem.id}`}>
                          

                    <div className="flex items-center mt-1">

                <Link href={`/alluser/${curElem.id}`}>



                <div className="flex items-center mt-2 ">
                  <span className="text-sm mr-1 font-bold">{curElem.ProfileName}</span>
                </div>  </Link>

                &nbsp; 
                {curElem.compatibility === 0 && (
                  <span className="text-yellow-500">⭐⭐</span>
                  
                )}
                {curElem.compatibility === 3 && (
                  <span className="text-yellow-500">⭐⭐⭐</span>
                  
                )}
                   {curElem.compatibility === 4 && (
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                  
                  )}
                  
                  
                  {curElem.compatibility === 5 && (
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    
                    )}
                    </div>
                  </Link>
                  
 

                    {curElem.friend_status === 'Friend Request Received'&& (
                      <div className="flex space-x-2 ">
                        <button
                          className="bg-green-300 hover:bg-green-400 text-gray-900 p-1 font-bold  mt-2  w-full rounded"
                          onClick={() => handleAcceptFriendRequest(curElem.id)}
                          disabled={isAcceptingFriendRequest}
                        >
                          {isAcceptingFriendRequest ? <LoadingIcon/> : "Accept"}
                        </button>
                        <button
                          className="bg-red-300 hover:bg-red-400 text-gray-900  font-bold mt-2 w-full rounded"
                          onClick={() => handleRejectFriendRequest(curElem.id)}
                          disabled={isRejectingFriendRequest}
                        >
                          {isRejectingFriendRequest ? <LoadingIcon/> : "Reject"}
                        </button>
                      </div>
                    )}

   


                    {curElem.friend_status === 'Pending' &&(
                       <div className="flex justify-center items-center">
                      <button
                         
                        className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold  p-1 rounded mt-2 w-full "
                   

                        onClick={() => handleCancelFriendRequest(curElem.id)}
                        disabled={isCancelingFriendRequest}
                      >
                        {isCancelingFriendRequest ? <LoadingIcon/> : "Cancel"}
                      </button>
                      </div>
                    )}

                    {curElem.friend_status === 'Friend Request Not Sent'  &&(
                      <div className="flex justify-center items-center">
                      <button
                        className="bg-sky-200 hover:bg-sky-300 text-gray-900 font-bold  rounded mt-2 p-1 w-full "
                        onClick={() => handleSendFriendRequest(curElem.id)}
                        disabled={isSendingFriendRequest}
                      >
                        {isSendingFriendRequest ? <LoadingIcon/> : " Add friend "}
                      </button>
                      </div>
                    )}

                    {curElem.friend_status === 'We Are Friends'  && (
                      <div className="flex justify-center items-center">
                      <span className="text-gray-900   rounded  font-bold p-1 mt-2">Friends</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}




// import React from 'react'
// import { useSession } from "next-auth/react";
// import ViewAlluser from "@/app/components/ViewAlluser"

// function page() {

//   return (
//     <div><ViewAlluser/></div>
//   )
// }

// export default page