import { useProfileByIdQuery } from "./api/authApi";
import { useAllUserPredictQuery,useGetAllUserQuery,useGetAllUserIdQuery } from "./api/authApi";
import { getSession } from 'next-auth/react';
import { GetStaticPaths, GetStaticProps } from "next";
import { GetServerSideProps} from "next"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect,useState } from "react";
// imports end

interface BreakingNewsPageProps {
    newsArticles: NewsArticle[],
  }

  export interface NewsResponse {
    articles: NewsArticle[],
  }

  export interface NewsArticle {
    id: string,
    ProfileName: string,
    FriendName: string,
    Compatiblity: string,
  }

  export interface NewsArticle {
    id: string,
    email: string,
    name: string,
    D_second: string,
    C_second: string,
    date_of_birth: string,
    day: string,
    year: string,
    month: string
  }
// INTERFACE ENDS



// function  ends

// main function 
export default function myData() {

    const [users, setUsers] = useState([])

//  async function fetchData() {
//     const router = useRouter()
//     // const session:any = useSession();

//     const  {id} = router.query
//     const session:any = await  getSession()
 
//       const response = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/?id=${id}`,{
//       method: 'GET',
//       headers: {
       
//        'authorization': `Bearer ${session?.user.accessToken}`,
//       //  'authorization': `Bearer ${token}`,

//     }
//   })
//   const data:any = await response.json();
//       console.log(data);

//     }
 
// fetchData()


const router = useRouter()
const  {id} = router.query
// const session:any = await  getSession()
const {data:session} = useSession();
const token:any = session?.user.accessToken
// console.log(token);
  const {data,isSuccess} =  useProfileByIdQuery({access:token,id:id})

  console.log(data);


    return (
      <div className="todos">


        <ul>
          {data?.map((user:any) => (
            <div key={user.id}>
              <div>
              {user.FriendName}={user.Compatiblity}
              
              </div></div>
          ))}
        </ul>
  
      </div>
    );
  }
// main ends















// comments  SAVE















{/*    
   {newsArticles?.map((curElem:any) => (
          <div key={curElem.id}>
            <div>

            

             {curElem.FriendName}
            </div>
          
          </div>
        ))}  */}

  // console.log("object");

    // console.log(props.session);
    // const { id, FriendName} = newsArticles;
  
// const {data:session} = useSession();

// const token:any = session?.user.accessToken;
// const id:any = 1
// const {data,isSuccess} =  useProfileByIdQuery(token,id)
  // const id = context.params.id;
  // console.log(data);


  // const paths = data.map(data)((curElem:any) => {
 

    //    'authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzcwMzQxLCJpYXQiOjE2ODExOTc1NDEsImp0aSI6IjE4YTllODQ5NzNjZTRiMjk4OTYwNWNlMzg4MTU2M2NmIiwidXNlcl9pZCI6MX0.UwxV8_4UMm0aR-uENVztJaYY-NFW6CSSLL7mlFEuUso'}`,
  


    // const session = useSession();

    // const token:any = session.user.accessToken


//   const session = useSession();


// export const getStaticPaths = async () => {
// export const getStaticPaths: GetStaticPaths = async (context:any) => {




  
// const session:any =  getSession()


// export const getStaticProps: GetStaticProps<BreakingNewsPageProps>  = async (param:any) => {
// // export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async (context:any,params:any) => {

//   // const id = context.params.pageNo;
//   const session:any = await getSession(context)
  
//   const res = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/?id=${1}`,{
//     method: 'GET',
//     headers: {
//     'Content-Type': 'application/json',   
//     'authorization': `Bearer ${session.user.accessToken}`,


//     // 'authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzcwMzQxLCJpYXQiOjE2ODExOTc1NDEsImp0aSI6IjE4YTllODQ5NzNjZTRiMjk4OTYwNWNlMzg4MTU2M2NmIiwidXNlcl9pZCI6MX0.UwxV8_4UMm0aR-uENVztJaYY-NFW6CSSLL7mlFEuUso'}`,

//  }
// });
//   const newsArticles = await res.json();

//   return {
//     props: {
//         newsArticles,
//     },
//   };
// };













// const page = ({ newsArticles }: CategoryNewsPageProps) => {

//   console.log("datva",);
//   return (
//     <div>   
//         {/* {data?.map((curElem:any) => ( */}
//       <div  >
//         <div>
    
//           {/* <span>FriendName-<br/>{data.Compatiblity}</span> */}
//           <span>sdfsdf</span>
         

//         </div>
//         </div>
//          {/* ))} */}
      
//         </div>
//   )
// }

// export default page
















// "use client"
// import React from 'react'
// import { useAllUserPredictQuery,useProfileByIdQuery ,useGetAllUserIdQuery ,useGetAllUserQuery } from "../../pages/api/authApi";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { access } from 'fs';
// import { NextPage } from 'next'
// import { useEffect } from 'react';
// import { useState } from 'react';
// // import { GetStaticProps} from "next";
// import { GetStaticPaths, GetStaticProps } from 'next'
// import { ParsedUrlQuery } from 'querystring'
// import alluser from '../alluser/Alluser';

// interface CategoryNewsPageProps {
//   newsArticles: NewsArticle[],
// }
// export interface NewsResponse {
//   articles: NewsArticle[],
// }


// export interface NewsArticle {
//   id: string,
//   ProfileName: string,
//   FriendName: string,
//   Compatiblity: string,

// }






// const {data:session} = useSession();




// export const getStaticPaths: GetStaticPaths  = async () => {
//   const res = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/`,{
//     method: 'GET',

//     headers: {
//      'Content-Type': 'application/json',   
//      'authorization': `Bearer ${session?.user.accessToken}`,
//   }
//   });
//   const data = await res.json();

//   const paths = data.map((curElem:any) => {
//     return {
//       params: {
//         pageno: curElem.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };



// // export const getStaticProps = async (context:any) => {
// //   const id = context.params.pageno;
// //   const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwOTU1NDA1LCJpYXQiOjE2ODA3ODI2MDUsImp0aSI6ImUzYjc3NDU3MDZjNzRmOWJhM2RlYjYzZjExNTUxMDY4IiwidXNlcl9pZCI6MX0.LQO-Kd-c-Xk-k04NvX75hTU516-8U7LmBjeX0DrP_tc'

// //   const res = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/?id=${id}`,{
// //   // const res = await fetch(`http://jsonplaceholder.typicode.com/Modelapi/${id}`,{

// //     // https://jsonplaceholder.typicode.com/
// //     method: 'GET',
// //     headers: {
// //       'Content-Type': 'application/json',
      
// //       // 'authorization': `Bearer ${token}`,
// //        'authorization': `Bearer ${session?.user.accessToken}`,

// //     }
// //   });
// //   const data = await res.json();

// //   return {
// //     props: {
// //       data,
// //     },
// //   };
// // };




// export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({ params }) => {
//   const category = params?.category?.toString();
//   const response = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/?id=${id}`);
//   // const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   // https://jsonplaceholder.typicode.com/posts
//   const newsResponse: NewsResponse = await response.json();
//   return {
//       props: { newsArticles: newsResponse.articles },
//       // revalidate: 5 * 60,
//   }
//   // let error go to 500 page
// }









// const page = ({ newsArticles }: CategoryNewsPageProps) => {

//   console.log("datva",);
//   return (
//     <div>   
//         {/* {data?.map((curElem:any) => ( */}
//       <div  >
//         <div>
    
//           {/* <span>FriendName-<br/>{data.Compatiblity}</span> */}
//           <span>sdfsdf</span>
         

//         </div>
//         </div>
//          {/* ))} */}
      
//         </div>
//   )
// }

// export default page

