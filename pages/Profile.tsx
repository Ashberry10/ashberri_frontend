import React, { useEffect,useState } from 'react';
import { useGetUserProfileQuery } from '../pages/api/authApi';
import { useSession } from 'next-auth/react';
import {

  useGetAllUserFriendStatusQuery,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation
} from "./api/friendApi";
import { useRouter } from 'next/router';
import LoadingPage from './LoadingPage';
import Image from 'next/image';
import EditYourProfile from './EditYourProfile';
interface FriendRequest {
  id: number;
  name: string;
}

interface UserProfile {
  name: string;
  email: string;
  // ... other fields
}

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Profile: React.FC<IProps> = ({ searchParams }) => {
  const router = useRouter();
  const { data: session,status } = useSession();
  const token: any = session?.user.accessToken;
  const [acceptingFriendRequests, setAcceptingFriendRequests] = useState<string[]>([]);
  const [rejectingFriendRequests, setRejectingFriendRequests] = useState<string[]>([]);
  const [acceptFriendRequest] = useAcceptFriendRequestMutation();
  const { data: friendStatusesData, refetch: refetchFriendStatuses } = useGetAllUserFriendStatusQuery(token);
  const { data, error, isLoading } = useGetUserProfileQuery(token || '');
  console.log(data);
  useEffect(() => {
    if (error) {
      console.error('Failed to fetch user profile:', error);
    }
  }, [error]);
// if (status === "loading") {
//   return <LoadingIcon />;
// }
  if (isLoading) {
    return <div><LoadingPage /></div>;
  }

  if (error) {
    return <div>Error occurred while fetching user profile.</div>;
  }

  const userProfile = data?.user_profile;
  var profileImage = "http://223.235.84.152:8000"+userProfile.file;
  const friendRequests = data?.friend_requests || [];

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="bg-white shadow-md p-4 rounded-md">
        <div className="flex items-center mb-4">
          <Image className="w-12 h-12 rounded-full" src={profileImage} alt={userProfile?.name} width={48} height={48} />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{userProfile?.name}</h2>
            <p className="text-gray-500">{userProfile?.email}</p>
          </div>
          <button
            className="ml-auto text-blue-500 font-bold outline-none focus:outline-none"
            onClick={() => router.push('/EditYourProfile')}
          >
            Edit Profile
          </button>
        </div>
        <hr className="my-4" />
        <div className="mb-4">
          <h3 className="text-md font-bold">About Me</h3>
          <p>{userProfile?.bio}</p>
        </div>
        <hr className="my-4" />
        <div className="mb-4">
          <h3 className="text-md font-bold">Friend Requests</h3>
          {friendRequests.length > 0 ? (
            <ul>
              {friendRequests.map((request: FriendRequest) => (
                <li key={request.id} className="flex items-center mb-2">
                  <span className="ml-2">{request.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No friend requests.</p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
