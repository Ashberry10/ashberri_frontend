// // Without using rtk and using normal fetch api


// import Profile from './Profile';
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";

// interface User {
//   id: string;
//   FriendName: string;
//   Compatibility : string;
// }

// export default function Data() {
//   const [users, setUsers] = useState<User[]>([]);
//   const router = useRouter();
//   const { id } = router.query;
//   const { data: session } = useSession();
//   // const token: string | undefined = session?.user.accessToken;
//   const token:any = session?.user.accessToken;


//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `http://ashberri.in:8000/account/friendStatusAndCompatibilityById/?id=${id}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const data = await response.json();
//         // console.log(data);

//         // Assuming the response data is an array of users
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     if (id && token) {
//       fetchData();
//     }
//   }, [id, token]);

//   return (
//     <div className="max-w-lg mx-auto p-4">
//     <h1 className="text-2xl font-bold mb-4">User Data</h1>

//     <ul className="bg-white shadow-md p-4 rounded-md">
//       {Array.isArray(users) ? (
//         users.map((user) => (
//           <li key={user.id} className="mb-2">
//             <div>
//               {user.FriendName} = {user.Compatibility}
//             </div>
//           </li>
//         ))
//       ) : (
//         <li>No users available.</li>
//       )}
//     </ul>
//   </div>
// );
// }





// Using rtk using

import { useSession } from "next-auth/react";
import { useUserPredictByIdQuery,useAllUserPredictQuery } from "./api/authApi";
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {
  useSendFriendRequestMutation,
  useCancelFriendRequestMutation,
  useGetAllUserFriendStatusQuery,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation
} from "./api/friendApi";
import { useEffect, useState } from "react";
import Image from "next/image";
import LoadingIcon from "./LoadingIcon";


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

export default function MyData() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [sendingRequests, setSendingRequests] = useState<string[]>([]);
  const [cancelingRequests, setCancelingRequests] = useState<string[]>([]);

  const router = useRouter();
  const { id } = router.query;
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
      refetchallUsersData()
 
      refetchuserdata()

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
      refetchuserdata()
      refetchallUsersData()
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
      refetchuserdata()
      refetchallUsersData()

      // Handle success, e.g., show a success message or update the UI.
      
    } catch (error) {
      // Handle error, e.g., display an error message.
    }
  };

  const handleRejectFriendRequest = async () => {
    try {
      const response = await rejectFriendRequest({ access: token, formData: { sender: id, action: 'reject' } });
      refetchuserdata()
      refetchallUsersData()

      // Handle success, e.g., show a success message or update the UI.
    } catch (error) {
      // Handle error, e.g., display an error message.
    }
  };

  console.log(userdata);

  
  useEffect(() => {
    if (isSuccess) {
      setUsers(userdata);
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
                src={"http://223.235.84.152:8000" + user?.image}
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







    






