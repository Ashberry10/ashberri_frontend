import { useState } from "react";
import { useSession } from "next-auth/react";
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
  const { data: allUsersData, isSuccess: isAllUsersDataSuccess } = useAllUserPredictQuery(token);
  const { data: friendStatusesData, refetch: refetchFriendStatuses } = useGetAllUserFriendStatusQuery(token);
  const [sendingRequests, setSendingRequests] = useState<string[]>([]);
  const [cancelingRequests, setCancelingRequests] = useState<string[]>([]);
  const [sendFriendRequest] = useSendFriendRequestMutation();
  const [cancelFriendRequest] = useCancelFriendRequestMutation();

  let allUsers = allUsersData || [];
  let friendStatuses = friendStatusesData || [];

  const handleSendFriendRequest = async (friendId: string) => {
    try {
      setSendingRequests((prevRequests) => [...prevRequests, friendId]);
      await sendFriendRequest({ access: token, formData: { receiver: friendId } });
      console.log(`Friend request sent successfully to ${friendId}`);
      refetchFriendStatuses(); // Fetch updated friend statuses
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
      refetchFriendStatuses(); // Fetch updated friend statuses
    } catch (error: any) {
      console.log(`Failed to cancel friend request for ${friendId}: ${error.message}`);
    } finally {
      setCancelingRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
    }
  };

  if (!isAllUsersDataSuccess) {
    // Handle loading state or error state
    return null;
  }

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Friends</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allUsers.map((curElem: any) => {
          const friendStatus = friendStatuses.find((friend: any) => friend.friend_id === curElem.id);
          const isSendingFriendRequest = sendingRequests.includes(curElem.id);
          const isCancelingFriendRequest = cancelingRequests.includes(curElem.id);

          return (
            <div key={curElem.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img className="w-full h-56 object-cover" src={curElem.avatarUrl} alt={curElem.name} />
              </div>
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
                {/* <div className="flex items-center mt-1">
                  <span className="text-sm font-medium mr-1">Status:</span>
                  <span className="text-sm">{friendStatus?.friend_status || 'Friend Request Not Sent'}</span>
                </div> */}
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
// import { useAllUserPredictQuery } from "./api/authApi";
// import {
//   useSendFriendRequestMutation,
//   useCancelFriendRequestMutation,
//   useGetAllUserFriendStatusQuery,
// } from "./api/friendApi";
// import Link from "next/dist/client/link";

// interface FriendProps {
//   name: string;
//   avatarUrl: string;
//   status: string;
// }

// export default function AllUser({ name, avatarUrl, status }: FriendProps) {
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;
//   const { data, isSuccess } = useAllUserPredictQuery(token);
//   const { data: friendStatuses, refetch: refetchFriendStatuses } = useGetAllUserFriendStatusQuery(token);
//   const [sendingRequests, setSendingRequests] = useState<string[]>([]);
//   const [cancelingRequests, setCancelingRequests] = useState<string[]>([]);
//   const [sendFriendRequest] = useSendFriendRequestMutation();
//   const [cancelFriendRequest] = useCancelFriendRequestMutation();

//   const handleSendFriendRequest = async (friendId: string) => {
//     try {
//       setSendingRequests((prevRequests) => [...prevRequests, friendId]);
//       await sendFriendRequest({ access: token, formData: { receiver: friendId } });
//       console.log(`Friend request sent successfully to ${friendId}`);
//       refetchFriendStatuses(); // Fetch updated friend statuses
//     } catch (error: any) {
//       console.log(`Failed to send friend request to ${friendId}: ${error.message}`);
//     } finally {
//       setSendingRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
//     }
//   };

//   const handleCancelFriendRequest = async (friendId: string) => {
//     try {
//       setCancelingRequests((prevRequests) => [...prevRequests, friendId]);
//       await cancelFriendRequest({ access: token, formData: { receiver: friendId } });
//       console.log(`Friend request canceled for ${friendId}`);
//       refetchFriendStatuses(); // Fetch updated friend statuses
//     } catch (error: any) {
//       console.log(`Failed to cancel friend request for ${friendId}: ${error.message}`);
//     } finally {
//       setCancelingRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
//     }
//   };

//   return (
//     <>
//       <h1 className="font-bold text-2xl mb-4">Friends</h1>

//       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {data?.map((curElem: any) => {
//           const friendStatus = friendStatuses?.find((friend: any) => friend.friend_id === curElem.id);
//           const isSendingFriendRequest = sendingRequests.includes(curElem.id);
//           const isCancelingFriendRequest = cancelingRequests.includes(curElem.id);

//           return (
//             <div key={curElem.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
//               <div className="relative">
//                 <img className="w-full h-56 object-cover" src={curElem.avatarUrl} alt={curElem.name} />
//               </div>
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







