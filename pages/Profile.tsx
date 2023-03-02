import React from 'react'
import { useGetAllUserQuery } from "../pages/user/userSlice";
import { setUser } from "./user/authSlice";
import { useAppDispatch } from "../app/hooks"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
// import { useNavigate } from 'react-router';
function Profile() {
 const dispatch = useAppDispatch();
 const router = useRouter();
    

 const {data:data} = useGetAllUserQuery();
    // console.log(data.name);
    // console.log("Data: ", data)
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

    // console.log(data);
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push("/Login")
        }
        // console.log(data.name);
        // Perform localStorage action
      }, [])
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
         
            <p>{post.name}</p>
            <hr />
          </div>
        )
      } */}






    {data?.map((data) => (
        //   <div key={data.name}></div>
          <h1>{data.name}--{data.Dfirst}--{data.Cfirst}</h1>
        //   <h1>{data.Dfirst}</h1>
        //   <h1>{data.Cfirst}</h1>


          ))}
          </div>
           
 

  )
}

export default Profile