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
  const userName = session?.user?.name || "Guest"; 
  if(status === "loading") {
    return <></>
  }
  // const { data, error, isLoading } = useGetUserProfileQuery(token || '');

  const userProfile = session?.user;

  return (
    <>
    <div className="mt-10  flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Homepage!</h1>
        <p className="text-lg">
          Hello, {userName}! This is a nice-looking homepage created using React.

        </p>
      </div>
      
    </div>
    <div className="sm:mr-7">
    <CreatePostForm />
    <PostList/>
    </div>
    </>
  );
};

export default Index;
