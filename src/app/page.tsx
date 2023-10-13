// for server side
// import { authOptions } from '@/utils/authOptions'
// import { getServerSession } from 'next-auth'
// import {redirect} from "next/navigation"
// import Image from 'next/image'

// export default async function Home() {
//   const session = await getServerSession(authOptions)

//   if(!session){
//     redirect("/api/auth/signin")
//   }
//   return (
//     <main className="p-4">
//       <h1 className='text-center'> this is a protexted page</h1>
      
    
//     </main>
//   )
// }



// for client side


// "use client";
// import { authOptions } from "@/utils/authOptions";
// import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";
// import {redirect} from "next/navigation"
// export default function  Home() {

//   const { data: session, status } = useSession({
//     required: true,
//   });

//   if(status === "loading") {
//     return <></>
//   }
//   return (
//     <div className="flex h-screen items-center justify-center">
//       This is a protected page.
//     </div>
//   );
// }





"use client"
import { useGetUserProfileQuery } from '../app/store/slices/authApi';
import { useAppSelector } from '../app/store/hooks';
import { signIn, signOut, useSession } from "next-auth/react";
// import CreatePostForm from "../components/CreatePostForm";



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
    {/* <CreatePostForm /> */}
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Homepage!</h1>
        <p className="text-lg">
          Hello, {userProfile?.name}! This is a nice-looking homepage created using React.
        </p>
      </div>
      
    </div>
    {/* <Login/> */}
    </>
  );
};

export default Index;
