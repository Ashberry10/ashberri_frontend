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

import { BASE_URL } from '../../../../api_constants'



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
  const { data: session } = useSession();
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
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
  
      <ul className="bg-white shadow-md p-4 rounded-md">
        {users.map((user) => {

    const isSendingFriendRequest = sendingRequests.includes(user.id);
    const isCancelingFriendRequest = cancelingRequests.includes(user.id);

          return (
            <li key={user.id} className="mb-2">
              <Image
                className="w-full h-full object-cover"
                src={BASE_URL + user?.image}
                alt={user?.profileName}
                width={238}
                height={248}
              />
              <div className="flex items-center mt-1">
                <h1 className="text-2xl font-bold mb-4">{user.profileName}</h1>
                <h1 className="text-2xl font-bold mb-4">{user.friendStatus}</h1>

                
  
                <span className="text-sm font-medium mr-1">Compatibility:</span>
                {user.compatibility === 0 && (
                  <span className="text-yellow-500">Not Friend</span>
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
                <br />

           

               {user?.friend_status === 'Friend Request Received' &&  (


                    <div>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded center"
                        onClick={() => handleAcceptFriendRequest()}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded center"
                        onClick={() => handleRejectFriendRequest()}
                      >
                        Reject
                      </button>
                    </div>
                  )}

                  {user.friend_status === 'We Are Friends' && (
                    <span className="text-green-500 font-bold mt-3">We Are Friends</span>
                  )} 

                  {user.friend_status === 'Pending' &&(
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
                        onClick={() => handleCancelFriendRequest()}
                        disabled={isCancelingFriendRequest}
                      >
                        {isCancelingFriendRequest ? <LoadingIcon/> : "Cancel Friend Request"}
                      </button>
                    )}


                {user.friend_status === 'Friend Request Not Sent' &&(
                 <button
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
                        onClick={() => handleSendFriendRequest()}
                        disabled={isSendingFriendRequest}

                      >
                        {isSendingFriendRequest ? <LoadingIcon/> : "Send Friend Request"}
                      </button>
                    )}

              
            </div>
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