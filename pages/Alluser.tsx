import { useState } from "react";
import { useSession } from "next-auth/react";
import { useAllUserPredictQuery } from "./api/authApi";
import {
  useSendFriendRequestMutation,
  useCancelFriendRequestMutation,
  useGetAllUserFriendStatusQuery,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation
} from "./api/friendApi";
import Link from "next/dist/client/link";
import LoadingPage from "./LoadingPage";
import LoadingIcon from "./LoadingIcon";
import Image from "next/image";
interface FriendProps {
  name: string;
  avatarUrl: string;
  status: string;
}

// ... (other imports)

export default function AllUser({ name, avatarUrl }: FriendProps) {
  const { data: session, status } = useSession();
 
  const token: any = session?.user.accessToken;
  const { data: allUsersData, isSuccess: isAllUsersDataSuccess } = useAllUserPredictQuery(token);
  const { data: friendStatusesData, refetch: refetchFriendStatuses } = useGetAllUserFriendStatusQuery(token);
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
  let friendStatuses = friendStatusesData || [];

  const handleSendFriendRequest = async (friendId: string) => {
    try {
      setSendingRequests((prevRequests) => [...prevRequests, friendId]);
      await sendFriendRequest({ access: token, formData: { receiver: friendId } });
      console.log(`Friend request sent successfully to ${friendId}`);
      refetchFriendStatuses();
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
      refetchFriendStatuses();
    } catch (error: any) {
      console.log(`Failed to cancel friend request for ${friendId}: ${error.message}`);
    } finally {
      setCancelingRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
    }
  };

  const handleAcceptFriendRequest = async (friendId: string) => {
    try {
      setAcceptingFriendRequests((prevRequests) => [...prevRequests, friendId]);
      await acceptFriendRequest({ access: token, formData: { sender: friendId } });
      console.log(`Accepted friend request from ${friendId}`);
      refetchFriendStatuses();
    } catch (error: any) {
      console.log(`Failed to accept friend request from ${friendId}: ${error.message}`);
    } finally {
      setAcceptingFriendRequests((prevRequests) => prevRequests.filter((id) => id !== friendId));
    }
  };

  const handleRejectFriendRequest = async (friendId: string) => {
    try {
      setRejectingFriendRequests((prevRequests) => [...prevRequests, friendId]);
      await rejectFriendRequest({ access: token, formData: { sender: friendId } });
      console.log(`Rejected friend request from ${friendId}`);
      refetchFriendStatuses();
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
      <h1 className="font-bold text-2xl mb-4">Friends</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allUsers.map((curElem: any) => {
          const friendStatus = friendStatuses.find((friend: any) => friend.friend_id === curElem.id);
          const isSendingFriendRequest = sendingRequests.includes(curElem.id);
          const isCancelingFriendRequest = cancelingRequests.includes(curElem.id);
          const isAcceptingFriendRequest = acceptingFriendRequests.includes(curElem.id);
          const isRejectingFriendRequest = rejectingFriendRequests.includes(curElem.id);

          return (
            <div key={curElem.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                      <Link href={`/${curElem.id}`}>
                <div className="relative">
                  <Image className="w-full h-56 object-cover" src={curElem.avatarUrl} alt={curElem.name} />
                  
                </div>
              </Link>

              <div className="px-4 py-3">
              <p className="text-sm text-gray-500">{curElem.status}</p>
                <Link href={`/${curElem.id}`}>

                <div className="flex items-center mt-2">
                  <span className="text-sm">{curElem.ProfileName}</span>
                </div>  </Link>
                {curElem.Compatibility !== 'Self' && (
                  <>
                          <Link href={`/${curElem.id}`}>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-medium mr-1">Compatibility:</span>
                      <span className="text-sm">{curElem.Compatibility}</span>
                    </div>
                  </Link>

                    {friendStatus?.friend_status === 'Pending' && friendStatus?.friend_status !== 'We Are Friends' && friendStatus?.friend_status !== 'Friend Request Sent' && friendStatus?.friend_status !== 'Friend Request Not Sent' && (
                      <div className="flex space-x-2 mt-3">
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleAcceptFriendRequest(curElem.id)}
                          disabled={isAcceptingFriendRequest}
                        >
                          {isAcceptingFriendRequest ? <LoadingIcon/> : "Accept Friend Request"}
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleRejectFriendRequest(curElem.id)}
                          disabled={isRejectingFriendRequest}
                        >
                          {isRejectingFriendRequest ? <LoadingIcon/> : "Reject Friend Request"}
                        </button>
                      </div>
                    )}

                {friendStatus?.friend_status === 'Friend Request Sent' && friendStatus?.friend_status !== 'We Are Friends' && friendStatus?.friend_status !== 'Pending' && friendStatus?.friend_status !== 'Friend Request Not Sent' &&(
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
                        onClick={() => handleCancelFriendRequest(curElem.id)}
                        disabled={isCancelingFriendRequest}
                      >
                        {isCancelingFriendRequest ? <LoadingIcon/> : "Cancel Friend Request"}
                      </button>
                    )}

                    {friendStatus?.friend_status === 'Friend Request Not Sent' && friendStatus?.friend_status !== 'We Are Friends' &&  friendStatus?.friend_status !== 'Pending' && friendStatus?.friend_status !== 'Friend Request Sent' &&(
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
                        onClick={() => handleSendFriendRequest(curElem.id)}
                        disabled={isSendingFriendRequest}
                      >
                        {isSendingFriendRequest ? <LoadingIcon/> : "Send Friend Request"}
                      </button>
                    )}

                    {friendStatus?.friend_status === 'We Are Friends' && friendStatus?.friend_status !== 'Friend Request Not Sent'  &&  friendStatus?.friend_status !== 'Pending' && friendStatus?.friend_status !== 'Friend Request Sent' && (
                      <span className="text-green-500 font-bold mt-3">We Are Friends</span>
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
