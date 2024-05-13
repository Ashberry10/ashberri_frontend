"use client"
import { useGetUserProfileQuery } from '../app/store/slices/authApi';
import { useAppSelector } from '../app/store/hooks';
import { signIn, signOut, useSession } from "next-auth/react";
import CreatePostForm from './components/post/CreatePostForm';
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
    <div className="mt-20  flex items-center justify-center ">
        <p className="text-lg">
          {userName}
        </p>
    </div>
    <div className="sm:mr-7">
    <CreatePostForm />
    {/* <PostList/> */}
    </div>
    </>
  );
};

export default Index;
