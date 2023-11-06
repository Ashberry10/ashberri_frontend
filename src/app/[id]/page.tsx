"use client"
import { useSession } from "next-auth/react";
import { useUserPredictByIdQuery,useAllUserPredictQuery } from "@/app/store/slices/authApi";
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {
  useSendFriendRequestMutation,
  useCancelFriendRequestMutation,
  useGetAllUserFriendStatusQuery,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation
} from "@/app/store/slices/friendApi";
import { useEffect, useState } from "react";
import Image from "next/image";
import LoadingIcon from "@/app/components/LoadingIcon"

import { BASE_URL } from '../../../api_constants'



interface UserData {
  id: string;
  profileName: string;
  friendStatus: string;
  compatibility: number;
  image: string;
  friend_status: string;

}

interface FriendStatus {
  id: string;
  friend_status: string;
}

// export default function MyData({params})) {
    // interface PageParams {
    //     id: string;
    //   }


      type Props = {
        params: {
          id: string;
        };
      };
      
const Page = (props: Props) => {
// const Page = async ({ params }: { params: PageParams }) => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [sendingRequests, setSendingRequests] = useState<string[]>([]);
  const [cancelingRequests, setCancelingRequests] = useState<string[]>([]);

  // const router = useRouter();
  // const { id } = router.query;
  const id = props.params.id;
  console.log(id)
  console.log("first")
  const { data: session, status } = useSession({
    required: true,
  });
  const token = session?.user.accessToken;
  const { data: userdata, isSuccess , refetch: refetchuserdata } = useUserPredictByIdQuery({ access: token, id: id });
  // const { data: friendStatusesData, refetch: refetchFriendStatuses } = useGetAllUserFriendStatusQuery(token);
  // let friendStatuses = friendStatusesData || [];
  const [sendFriendRequest] = useSendFriendRequestMutation();
  const [cancelFriendRequest] = useCancelFriendRequestMutation();
  const [acceptFriendRequest] = useAcceptFriendRequestMutation();
  const [rejectFriendRequest] = useRejectFriendRequestMutation();
  const { data: allUsersData, isSuccess: isAllUsersDataSuccess, refetch: refetchallUsersData} = useAllUserPredictQuery(token);


  

  const handleSendFriendRequest = async () => {
    try {
      setSendingRequests((prevRequests) => [...prevRequests]);
      await sendFriendRequest({ access: token, formData: { receiver: id, action: 'accept' } });
      // console.log(`Friend request sent successfully to ${friendId}`);
      refetchuserdata()
      // refetchallUsersData()
 

    } catch (error: any) {
      console.log(`Failed to send friend request to ${id}: ${error.message}`);
    } 
    finally {
      setSendingRequests((prevRequests) => prevRequests.filter((id) => id !== id));
    }
  };

  const handleCancelFriendRequest = async () => {
    try {
      setCancelingRequests((prevRequests) => [...prevRequests]);
      await cancelFriendRequest({ access: token, formData: { receiver: id, action: 'accept' }  });
      // console.log(`Friend request canceled for ${friendId}`);
      // refetchallUsersData()
      refetchuserdata()
    } catch (error: any) {
      console.log(`Failed to cancel friend request for ${id}: ${error.message}`);
    } 
    finally {
      setCancelingRequests((prevRequests) => prevRequests.filter((id) => id !== id));
    }
  };

  
  const handleAcceptFriendRequest = async () => {
    try {
      const response = await acceptFriendRequest({ access: token, formData: { sender: id, action: 'accept' } });
      // refetchallUsersData()
      refetchuserdata()

      // Handle success, e.g., show a success message or update the UI.
      
    } catch (error) {
      // Handle error, e.g., display an error message.
    }
  };

  const handleRejectFriendRequest = async () => {
    try {
      const response = await rejectFriendRequest({ access: token, formData: { sender: id, action: 'reject' } });
      // refetchallUsersData()
      refetchuserdata()

      // Handle success, e.g., show a success message or update the UI.
    } catch (error) {
      // Handle error, e.g., display an error message.
    }
  };

  console.log(userdata);

  
  useEffect(() => {
    if (isSuccess) {
      setUsers(userdata);
      refetchallUsersData()
      refetchuserdata()
    }
  }, [userdata, isSuccess]);

  return (
    <div>
  
      <ul>
        {users.map((user) => {

    const isSendingFriendRequest = sendingRequests.includes(user.id);
    const isCancelingFriendRequest = cancelingRequests.includes(user.id);
console.log(user.friendStatus)
          return (
            <li key={user.id} >
              <div className="flex mt-20 ml-10 items-center ">
              <img
                className=" mt-5 w-40 h-40 rounded-full"
                src={BASE_URL + user?.image}
                alt={user?.profileName}
                // width={238}
                // height={248}
              />
            <div className="ml-28 ">
              <h2 className="text-lg font-bold pb-3 ">{user.profileName}
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              {user?.friend_status === 'Friend Request Received' &&  (


<div>
  <button
    className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold px-4 rounded "
    onClick={() => handleAcceptFriendRequest()}
  >
    Accept
  </button>
  &nbsp;&nbsp;&nbsp;
  <button
    className="bg-red-300 hover:bg-red-400 text-gray-800 font-semibold  px-4 rounded "
    onClick={() => handleRejectFriendRequest()}
  >
    Reject
  </button>
</div>
)}

{user.friend_status === 'We Are Friends' && (
<span className="text-gray-800  p-1 font-bold mt-3">Friends</span>
)} 

{user.friend_status === 'Pending' &&(
  <button
    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold ml-20 w-40 p-1 rounded "
    onClick={() => handleCancelFriendRequest()}
    disabled={isCancelingFriendRequest}
  >
    {isCancelingFriendRequest ? <LoadingIcon/> : "Cancel"}
  </button>
)}


{user.friend_status === 'Friend Request Not Sent' &&(
<button
className="bg-violet-200 hover:bg-violet-300 text-gray-800 font-bold ml-20 w-40 p-1 rounded focus:outline-none"

    onClick={() => handleSendFriendRequest()}
    disabled={isSendingFriendRequest}

  >
    {isSendingFriendRequest ? <LoadingIcon/> : "Add Friend"}
  </button>
)}
              
              
             
              </h2>


              
              {/* <p className="text-gray-500">{user.friendStatus}</p> */}
      
                

                {user.compatibility === 0 && (
                  <span className="text-yellow-500">⭐⭐</span>
                )}
                {user.compatibility === 3 && (
                  <span className="text-yellow-500">⭐⭐⭐</span>
                )}
                {user.compatibility === 4 && (
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                )}
                {user.compatibility === 5 && (
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                )}
    
           
              
            </div>
  </div>

 
  <hr className="my-10" />
          </li>
        );
      })}
  </ul>
  </div>
);

    }




export default Page;


    






// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page