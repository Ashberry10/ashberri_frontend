"use client"
import React from 'react'
import { useAllUserPredictQuery,useProfileByIdQuery ,useGetAllUserIdQuery ,useGetAllUserQuery } from "../../pages/api/authApi";
import { signIn, signOut, useSession } from "next-auth/react";
import { access } from 'fs';
import { useEffect } from 'react';
import { useState } from 'react';
function page() {
  const {data:session} = useSession();
  const token:any = session?.user.accessToken;
  
  const {data} =  useProfileByIdQuery({access:token,id:1})
  // const {data} =  useGetAllUserIdQuery(1)
  // const {data} = useGetAllUserQuery()
  console.log("userdata",data);


  // Store User Data in Local State
  // useEffect(() => {
  //   if (data ) {
  //     setUserData({
  //       Compatiblity: data.Compatiblity,
  //       FriendName: data.FriendName,
  //       ProfileName:data.ProfileName
  //     })
  //   }
  // }, [data, isSuccess])

  
  return (
    <>
    <div className="todos">
    {data?.map((user:any) => (
      <React.Fragment key={user.id}>
        <div>
    
          <span>FriendName-<br/>{user.FriendName}={user.Compatiblity}</span>
          {/* <span>{user.Compatiblity}</span> */}

        </div>
        </React.Fragment>
        ))}
      </div>           </>
  )
}

export default page