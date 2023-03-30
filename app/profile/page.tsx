"use client"


import React from 'react'
// import { useGetAllUserQuery } from "../pages/user/userSlice";
import { useProfileQuery } from "../../pages/api/authApi";
import { useAppSelector } from "../../store/hooks";
import { setUser } from "../../pages/state/authSlice";
import { useAppDispatch } from "../../store/hooks"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { useState } from 'react';
import da from 'date-fns/esm/locale/da/index.js';

// import  { getToken }  from "./LocalStorage";
// import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';
// import { useNavigate } from 'react-router';
// import { useSession } from 'next-auth/react';
import { signIn, signOut, useSession } from "next-auth/react";
// import Provider from '../Provider';
import { ReactNode } from 'react';
import { setUserInfo, unsetUserInfo } from '../../pages/state/userSlice';


interface IProps {
  children : ReactNode;
  session : any;
  
}


function Profile({children}:IProps) {
  const dispatch = useAppDispatch();
  // const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMjc4Nzk2LCJpYXQiOjE2ODAxMDU5OTYsImp0aSI6Ijk1YWY2NzdkMDVhMTQ5YzJhZWE1MjgyYTIwNjgyNDg1IiwidXNlcl9pZCI6NDV9.QjC3ItmiCQiTtx_5qWpwofS_n2xtITZ2mDayELxtlXk"
  // const [cart,setCart] = useState()
  const {data:session} = useSession();
  console.log({data:session});
  const token = session?.user.accessToken;

  console.log("token",token);
  const router = useRouter();
 


  // console.log(token);
  const { data, isSuccess } =  useProfileQuery(token)

  // const [userData, setUserData] = useState({
  //   email: "",
  //   name: ""
  // })
  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })
  console.log("profile data",data);
console.log("email", userData.email);
  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])









  // const  {name,token,Dfirst,Cfirst}  = useAppSelector((state) => state.auth);
  // const token = localStorage.getItem("token");
  // console.log(name,Dfirst,Cfirst);
  //  const {data:data} = useGetAllUserQuery();


//  const names = localStorage.getItem("name");




// if (isSuccess) {
//   dispatch(setUser({ token: data.token, name: data.name  }));
  
//   localStorage.setItem("token", data.token);
//   console.log(data.token);
// }





// const  access_token = getToken()

// const {data, isSuccess} = useProfileQuery(access_token);


    // console.log(data.name);
    // if (isSuccess) {
    //     dispatch(setUser({ token: data.token, name: data.name }));
        // navigate("/");
    // const token =    localStorage.setItem("token", data.token);
        // console.log(data.token);
        // const token = localStorage.getItem("token");
        
        // if(!token){
        //     return{
        //     redirect:{
        //         destination: '/login' 
        //     }
        // }
        // }
    //   }
// console.log(name);
    // console.log(data);
    

        
        // console.log(data.name);
        // Perform localStorage action
      
      
      // Store User Data in Local State
  //  useEffect(() => {

  //   if (!localStorage.getItem('token')) {
  //     router.push("/Login")
  // }
  //   if (localStorage.getItem("name")) {
      
  //      setCart(JSON.parse(localStorage.getItem("name") || " ") )
  //     // const pl = (localStorage.getItem("name"));
  //   }
  //   if (localStorage.getItem("date_of_birth")) {
      
  //     setdate_of_birth(JSON.parse(localStorage.getItem("date_of_birth") || " ") )
  //    // const pl = (localStorage.getItem("name"));
  //  }
  //   }, []) 




        // Store User Data in Redux Store
  // useEffect(() => {
  //   if (data && isSuccess) {
  //     dispatch(setUserInfo({
  //       email: data.email,
  //       name: data.name
  //     }))
  //   }
  // }, [data, isSuccess, dispatch])






  // useEffect(() => {
  //   if (data && isSuccess) {
  //     setUserData({
  //       email: data.email,
  //       name: data.name,
  //     })
  //   }
  // }, [data, isSuccess])

  // // Store User Data in Redux Store
  // useEffect(() => {
  //   if (data && isSuccess) {
  //     dispatch(setUserInfo({
  //       email: data.email,
  //       name: data.name
  //     }))
  //   }
  // }, [data, isSuccess, dispatch])
  return (
  
    <div>
      
        {/* {
            responseInfo.data.map((post, i) =>
          <div key={i}>
            <h2>{post.name} {post.email}</h2>
            <p>{post.Dfirst}</p>
            <hr />
          </div>)} */}
{/* 
          {
        responseInfo.data?.map((data) =>
          <div key={i}>
         
            // <p>{post.name}</p>
            <hr />
          </div>
        )
      } */}





 
    {/* {data?.map((data:any) => (
          <h1> {data.name}</h1>
       <h1>{data.name}--{data.Dfirst}--{data.Cfirst}</h1>
    

          ))} */}
<h1>
          {/* Your Name: {name} <br/> */}
          {/* Your dateofbirth: {date_of_birth} <br/> */}


          {/* Your Dfirst: {Dfirst}<br/>
          Your Cfirst:  {Cfirst}<br/> */}
           
          </h1>
       {/* <h1>  Email: {userData.email}</h1>  */}
           <h5 className='text-lg'>Friends</h5>
           <h1>{userData.email}</h1>
           {/* <div className={"  min-h-screen "}>{children}</div> */}
           
           
           {/* <h1>{data}</h1> */}
           
          </div>
           
        

  )
}

export default Profile





