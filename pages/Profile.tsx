import React from 'react'
// import { useGetAllUserQuery } from "../pages/user/userSlice";
import { useProfileQuery } from "./api/authApi";
import { useAppSelector } from "../app/hooks";
import { setUser } from "./state/authSlice";
import { useAppDispatch } from "../app/hooks"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import da from 'date-fns/esm/locale/da/index.js';

// import  { getToken }  from "./LocalStorage";
// import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';
// import { useNavigate } from 'react-router';


function Profile() {
  const dispatch = useAppDispatch();

  const [cart,setCart] = useState()


  const router = useRouter();
  const {token}  = useAppSelector((state) => state.auth);


  console.log(token);
  const { data, isSuccess } =  useProfileQuery(token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  console.log(userData.email);







  useProfileQuery

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
       <h1>  Email: {userData.email}</h1> 
           <h5 className='text-lg'>Friends</h5>
          </div>
           
 

  )
}

export default Profile





