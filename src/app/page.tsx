"use client"
import { useGetUserProfileQuery } from '../app/store/slices/authApi';
import { useAppSelector } from '../app/store/hooks';
import { signIn, signOut, useSession } from "next-auth/react";
import CreatePostForm from './components/CreatePostForm';
import PostList from './components/post/PostList';


const Index = () => {
  // const {data:session} = useSession();
  const { data: session, status } = useSession({
    required: true,
  });
  const token:any= session?.user.accessToken;

  if(status === "loading") {
    return <></>
  }
  const { data, error, isLoading } = useGetUserProfileQuery(token || '');

  const userProfile = data?.user_profile;

  return (
    <>
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Homepage!</h1>
        <p className="text-lg">
          Hello, {userProfile?.name}! This is a nice-looking homepage created using React.
        </p>
      </div>
      
    </div>
    <CreatePostForm />
    <PostList/>
    </>
  );
};

export default Index;
