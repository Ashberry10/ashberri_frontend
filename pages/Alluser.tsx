import { useSession } from "next-auth/react";
import { useState } from "react";
import { useAllUserPredictQuery } from "./api/authApi";
import {
  useSendFriendRequestMutation,
  useCancelFriendRequestMutation,
  useGetAllUserFriendStatusQuery,
} from "./api/friendApi";
import Link from "next/dist/client/link";

interface FriendProps {
  name: string;
  avatarUrl: string;
  status: string;
}

export default function AllUser({ name, avatarUrl, status }: FriendProps) {
  const { data: session } = useSession();
  const token: any = session?.user.accessToken;
  const { data, isSuccess } = useAllUserPredictQuery(token);
  const { data: friendStatuses } = useGetAllUserFriendStatusQuery(token);
  const [sendFriendRequest, { isLoading: isSendingFriendRequest }] = useSendFriendRequestMutation();
  const [cancelFriendRequest, { isLoading: isCancelingFriendRequest }] = useCancelFriendRequestMutation();

  const handleSendFriendRequest = async (friendId: string) => {
    try {
      await sendFriendRequest({ access: token, formData: { receiver: friendId } });
      console.log(`Friend request sent successfully to ${friendId}`);
    } catch (error: any) {
      console.log(`Failed to send friend request to ${friendId}: ${error.message}`);
    }
  };

  const handleCancelFriendRequest = async (friendId: string) => {
    try {
      await cancelFriendRequest({ access: token,formData: { receiver: friendId } });
      console.log(`Friend request canceled for ${friendId}`);
    } catch (error: any) {
      console.log(`Failed to cancel friend request for ${friendId}: ${error.message}`);
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Friends</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((curElem: any) => {
          const friendStatus = friendStatuses?.find((friend: any) => friend.friend_id === curElem.id);

          return (
            <div key={curElem.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <Link href={`/${curElem.id}`}>
                <div className="relative">
                  <img className="w-full h-56 object-cover" src={curElem.avatarUrl} alt={curElem.name} />
                </div>
              </Link>
              <div className="px-4 py-3">
                <h1 className="text-lg font-semibold">{curElem.name}</h1>
                <p className="text-sm text-gray-500">{curElem.status}</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm font-medium mr-1">Friend:</span>
                  <span className="text-sm">{curElem.FriendName}</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium mr-1">Compatibility:</span>
                  <span className="text-sm">{curElem.Compatibility}</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium mr-1">Status:</span>
                  <span className="text-sm">{friendStatus?.friend_status || 'Friend Request Not Sent'}</span>
                </div>
                {friendStatus?.friend_status === 'Pending' && (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
                    onClick={() => handleCancelFriendRequest(curElem.id)}
                    disabled={isCancelingFriendRequest}
                  >
                    {isCancelingFriendRequest ? "Canceling..." : "Cancel Friend Request"}
                  </button>
                )}
                {friendStatus?.friend_status !== 'Pending' && (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
                    onClick={() => handleSendFriendRequest(curElem.id)}
                    disabled={isSendingFriendRequest}
                  >
                    {isSendingFriendRequest ? "Sending..." : "Send Friend Request"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}













// import { useSession } from "next-auth/react";
// import { useState } from "react";
// import { useAllUserPredictQuery,} from "./api/authApi";
// import { useSendFriendRequestMutation, useCancelFriendRequestMutation, useGetAllUserFriendStatusQuery  } from "./api/friendApi";
// import { getSession } from 'next-auth/react';
// import { getToken } from "next-auth/jwt";
// import { useQueryClient } from 'react-query';
// import Link from "next/dist/client/link";

// interface FriendProps {
//   name: string;
//   avatarUrl: string;
//   status: string;
// }

// export default function Home({ name, avatarUrl, status }: FriendProps) {
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;
//   const { data, isSuccess } = useAllUserPredictQuery(token);
//   const { data: friendStatuses } = useGetAllUserFriendStatusQuery(token);
//   const [sendFriendRequest, { isLoading: isSendingFriendRequest }] = useSendFriendRequestMutation();
//   const [cancelFriendRequest, { isLoading: isCancelingFriendRequest }] = useCancelFriendRequestMutation();
//   // const queryClient = useQueryClient();

//   const handleSendFriendRequest = async (friendId: string) => {
//     try {
//       await sendFriendRequest({ access: token, formData: { receiver: friendId } });
//       console.log(`Friend request sent successfully to ${friendId}`);
//     } catch (error: any) {
//       console.log(`Failed to send friend request to ${friendId}: ${error.message}`);
//     }
//   };

//   const handleCancelFriendRequest = async (friendId: string) => {
//     try {
//       await cancelFriendRequest({ access: token, friendId: friendId });
//       console.log(`Friend request canceled for ${friendId}`);
//     } catch (error: any) {
//       console.log(`Failed to cancel friend request for ${friendId}: ${error.message}`);
//     }
//   };

//   return (
//     <>
//       <h1 className="font-bold text-2xl mb-4">Friends</h1>

//       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {data?.map((curElem: any) => {
//           const friendStatus = friendStatuses?.find((friend: any) => friend.friend_id === curElem.id);

//           return (
//             <div key={curElem.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
//               <Link href={`/${curElem.id}`}>
//                 <div className="relative">
//                   <img className="w-full h-56 object-cover" src={curElem.avatarUrl} alt={curElem.name} />
//                 </div>
//               </Link>
//               <div className="px-4 py-3">
//                 <h1 className="text-lg font-semibold">{curElem.name}</h1>
//                 <p className="text-sm text-gray-500">{curElem.status}</p>
//                 <div className="flex items-center mt-2">
//                   <span className="text-sm font-medium mr-1">Friend:</span>
//                   <span className="text-sm">{curElem.FriendName}</span>
//                 </div>
//                 <div className="flex items-center mt-1">
//                   <span className="text-sm font-medium mr-1">Compatibility:</span>
//                   <span className="text-sm">{curElem.Compatibility}</span>
//                 </div>
//                 <div className="flex items-center mt-1">
//                   <span className="text-sm font-medium mr-1">Status:</span>
//                   <span className="text-sm">{friendStatus?.friend_status || 'Friend Request Not Sent'}</span>
//                 </div>
//                 {friendStatus?.friend_status === 'Pending' && (
//                   <button
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
//                     onClick={() => handleCancelFriendRequest(curElem.id)}
//                     disabled={isCancelingFriendRequest}
//                   >
//                     {isCancelingFriendRequest ? "Canceling..." : "Cancel Friend Request"}
//                   </button>
//                 )}
//                 {friendStatus?.friend_status !== 'Pending' && (
//                   <button
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
//                     onClick={() => handleSendFriendRequest(curElem.id)}
//                     disabled={isSendingFriendRequest}
//                   >
//                     {isSendingFriendRequest ? "Sending..." : "Send Friend Request"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

