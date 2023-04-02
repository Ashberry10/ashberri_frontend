


"use client"

import React from 'react'
import { useAllUserPredictQuery,useGetAllUserQuery } from "../../pages/api/authApi";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks"
import  {useEffect}  from 'react';
import  {useState}  from 'react';

import { signIn, signOut, useSession } from "next-auth/react";
import { setUserInfo, unsetUserInfo,setalluserPredict } from '../../pages/state/userSlice';


function alluser() {

  const dispatch = useAppDispatch();
  const {data:session} = useSession();
  // console.log({data:session});
  const token:any = session?.user.accessToken;


  const {data,isSuccess} =  useAllUserPredictQuery(token)
  // const {data:alluser} =  useGetAllUserQuery()
  

  // console.log("alluse:",data.Prediction);
  // const [userData, setUserData] = useState({
  
  //   FriendName:""
  // })

//  let data:any
//  console.log(data.FriendName);


  
  // Store User Data in Local State
  //   useEffect(() => {
  //   if (data && isSuccess) {
  //     setUserData({
  //       FriendName:data.FriendName
        
      
  //     })
  //   }
  // }, [data, isSuccess])

  // // // Store User Data in Redux Store
  // useEffect(() => {
  //   if (data && isSuccess) {
     
  //     dispatch(setalluserPredict({
  //       FriendName:data.FriendName
      
  //       }))
  //   }
  // }, [data, isSuccess, dispatch])

  return (
    <>
      <div className="todos">
        {data?.map((user:any) => (
          <React.Fragment key={user.id}>
            <div>
        
              <span>{user.FriendName}</span>
              <span>{user.Compatiblity}</span>

            </div>
          
          </React.Fragment>
        ))}
      </div>


           </>
  )
}

export default alluser