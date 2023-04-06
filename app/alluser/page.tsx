
"use client"

import React from 'react'
import { useAllUserPredictQuery,useGetAllUserQuery } from "../../pages/api/authApi";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks"
import  {useEffect}  from 'react';
import  {useState}  from 'react';
 import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
import { setalluserPredict } from '../../pages/state/modelSlice';
import { GetStaticPaths, GetStaticProps } from 'next'





export async function getStaticProps() {
  const {data:session} = useSession();
  const res = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/`,{
  // const res = await fetch(`http://jsonplaceholder.typicode.com/Modelapi/${id}`,{

    method: 'GET',

    headers: {
    'Content-Type': 'application/json',
    
     'authorization': `Bearer ${session?.user.accessToken}`,
  }
  });
  const data = await res.json();
  return {
    props: {data}, // will be passed to the page component as props
  }
}

function alluser() {

  const dispatch = useAppDispatch();
  const {data:session} = useSession();
  const token:any = session?.user.accessToken;



  // console.log({data:session});
 


  const {data,isSuccess} =  useAllUserPredictQuery(token)







  return (
    <>
      <div className="todos">
        {data?.map((curElem:any) => (
          <React.Fragment key={curElem.id}>
            <div>
        
              {/* <span>{user.FriendName}={user.Compatiblity}</span> */}
             {/* < Link href={`/userprofile/${curElem.id}`}> <h1>{curElem.id}-{curElem.FriendName}={curElem.Compatiblity}</h1></Link>      */}
             < Link href={`/userprofile/${curElem.id}`}> {curElem.FriendName}</Link>     

              {/* <span>{user.Compatiblity}</span> */}

            </div>
          
          </React.Fragment>
        ))}
      </div>


           </>
  )
}

export default alluser



















// "use client"

// import React from 'react'
// import { useAllUserPredictQuery,useGetAllUserQuery } from "../../pages/api/authApi";
// import { useAppSelector } from "../../store/hooks";
// import { useAppDispatch } from "../../store/hooks"
// import  {useEffect}  from 'react';
// import  {useState}  from 'react';
// import Link from 'next/link';
// import { signIn, signOut, useSession } from "next-auth/react";
// import { setalluserPredict } from '../../pages/state/modelSlice';
// import axios from 'axios';

// function alluser() {

//   const dispatch = useAppDispatch();
  
  
//   // const {data,isSuccess} =  useAllUserPredictQuery(token)
  
  

  
//   const {data:session} = useSession()
//   // const {data:session} = useSession();   
//   const getAllmodelapi = async () => {
   
//     // const token:any = session?.user.accessToken;
//       // console.log("token",token);
//   //  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwOTUxMDUyLCJpYXQiOjE2ODA3NzgyNTIsImp0aSI6IjM0ZjkzYjQxZDZjMTQxMTZhMzIzZmQwOTU4MGExNTc4IiwidXNlcl9pZCI6MX0.FWk_1Gk9SAXLPLC7gQ2zjd_xnJIHuL9YX9S6loJOn60'
//     // const response = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/`, {
//     //   method: 'GET',
//     //   // headers: {
//     //     //   'authorization': `Bearer ${token}`,
//     //     // }
//     //     headers: {
//     //     'Content-Type': 'application/json',
//     //     // 'authorization': `Bearer ${session?.user.accessToken}`,
//     //      'authorization': `Bearer ${session?.user.accessToken}`,
//     //   }
//     // });
 
//     // const json = await response.json() 
    
//     // console.log("json",json);
   
    
//     const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwOTU1NDA1LCJpYXQiOjE2ODA3ODI2MDUsImp0aSI6ImUzYjc3NDU3MDZjNzRmOWJhM2RlYjYzZjExNTUxMDY4IiwidXNlcl9pZCI6MX0.LQO-Kd-c-Xk-k04NvX75hTU516-8U7LmBjeX0DrP_tc'
//     const res = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/?id=${1}`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
      
//        'authorization': `Bearer ${token}`,
//     }
//   });
    
    
//     const json = await res.json() 
    
    
//     console.log("json",json);
//   }



  



// useEffect(() => {
//   getAllmodelapi()
//   // fd()
// }, [])





//   return (
//     <>
//       <div className="todos">
//         {/* {data?.map((curElem:any) => (
//           <React.Fragment key={curElem.id}>
//             <div>
        
//          <Link href={`/userprofile/${curElem.id}`}> <h1>{curElem.id}-{curElem.FriendName}={curElem.Compatiblity}</h1></Link>     
          

//             </div>
          
//           </React.Fragment>
//         ))} */}
//       </div>


//            </>
//   )
// }

// export default alluser
















