



import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useGetUserProfileQuery } from '../pages/api/authApi';
import LoadingPage from './LoadingPage';
 import Image from 'next/image';

import {
  useAcceptFriendRequestMutation,
  useGetAllUserFriendRequestQuery,
} from './api/friendApi';
import { useRouter } from 'next/router';

interface FriendRequest {
  id: number;
  sender_name: string;
  compatibility: number;
  status:string
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
  const { data: session, status } = useSession();
  const token: any = session?.user.accessToken;
  const [acceptFriendRequest] = useAcceptFriendRequestMutation();
  const { data, error, isLoading } = useGetUserProfileQuery(token || '');
  const { data:friendrequest} = useGetAllUserFriendRequestQuery(token);


  
  
  
  useEffect(() => {
   if (error) {
     console.error('Failed to fetch user profile:', error);
    }
  }, [error]);

  // if(friendrequest?.total_friend_requests==0)
  // {
  //   return<div>No Friend Request Found</div>
  // }
  
  if (isLoading) {
    return <div><LoadingPage /></div>;
  }
  
  if (error) {
    return <div>Error occurred while fetching user profile.</div>;
  }
  
  const userProfile = data?.user_profile;
  const userProfileFriendrequest = friendrequest?.friend_requests;

console.log(friendrequest)
  var profileImage = "http://223.235.84.152:8000" +userProfile.file;


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



                      {userProfileFriendrequest &&
                        userProfileFriendrequest.map((friendRequest: FriendRequest) => (
                          <div key={friendRequest.id} className="mb-2">
                {friendRequest?.status === 'pending' &&   (  
                  <p>
                <h3 className="text-lg font-bold mb-2">Friend Requests:</h3>
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
                )}
                  <hr className="my-4" />

{friendRequest?.status !== 'pending' && (  
              <p>
                <h3 className="text-lg font-bold mb-2">Friends:</h3>

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
                )}
                    </div>
                    ))} 
          </div>
      </div>
    </div>
  );
};

export default Profile;
