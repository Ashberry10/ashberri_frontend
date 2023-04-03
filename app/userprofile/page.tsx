"use client"
import React from 'react'
import { useAllUserPredictQuery,useProfileByIdQuery ,useGetAllUserIdQuery ,useGetAllUserQuery } from "../../pages/api/authApi";
import { signIn, signOut, useSession } from "next-auth/react";
import { access } from 'fs';
function page() {
  const {data:session} = useSession();
  const token:any = session?.user.accessToken;
  
  const {data} =  useProfileByIdQuery({access:token,id:1})
  // const {data} =  useGetAllUserIdQuery(1)
  // const {data} = useGetAllUserQuery()
  console.log("userdata",data);

  

  
  return (
    <div>userprofile</div>
  )
}

export default page