


import { useAllUserPredictQuery,useGetAllUserQuery,useGetAllUserIdQuery } from "./api/authApi";
import { getSession } from 'next-auth/react';
import { getToken } from "next-auth/jwt";
// import { getServerSession } from "next-auth/next"
import { GetStaticPaths, GetStaticProps } from "next";
import { GetServerSideProps} from "next"
 import Link from 'next/link';
 import { signIn, signOut, useSession } from "next-auth/react";
 import { authOptions } from '../pages/api/auth/[...nextauth]'
 import { getServerSession } from "next-auth/next"
//  import { signIn, signOut, useSession } from "next-auth/react";
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





// const token:any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzk1NDA1LCJpYXQiOjE2ODEyMjI2MDUsImp0aSI6IjFjZGE0ZGYyNzNlNTRiODk4YzUyYTAxMjZkY2JhYjgwIiwidXNlcl9pZCI6MX0.Ms19CxDbDlY3fsecIo_x_YJc1NVpli3pAzTZYjqhCqQ'

// export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async (context:any) => {
//   // export const getStaticProps: GetStaticProps<BreakingNewsPageProps>  = async (context:any) => {

//   // const {data:session} =  useSession(context)


//   const session = await getSession(context)
//   const token:any = session?.user.accessToken

//   try {
//       const response = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/`,{
//        method: 'GET',
  
//        headers: {
//        'Content-Type': 'application/json',   
//        'authorization': `Bearer ${token}`,
//       //  'authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzcwMzQxLCJpYXQiOjE2ODExOTc1NDEsImp0aSI6IjE4YTllODQ5NzNjZTRiMjk4OTYwNWNlMzg4MTU2M2NmIiwidXNlcl9pZCI6MX0.UwxV8_4UMm0aR-uENVztJaYY-NFW6CSSLL7mlFEuUso'}`,
//   }})
//     const newsResponse: NewsResponse = await response.json();
  
//     // const reportItem = "dfffg"
//       return {
//         props : {
//           newsArticles: newsResponse || null
//         }
//       } 
//     }
//    catch(error) {
//     console.log('error: ', error)
//     return {
//       props : {
//         error: true
//       }
//     }
//   }  
// }







// export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async (context:any) => {
//   // export const getStaticProps: GetStaticProps<BreakingNewsPageProps>  = async (context:any) => {

//   // const {data:session} =  useSession(context)


//   const session = await getSession(context)
//   const token:any = session?.user.accessToken

//   try {
//       const response = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/`,{
//        method: 'GET',
  
//        headers: {
//        'Content-Type': 'application/json',   
//        'authorization': `Bearer ${token}`,
//       //  'authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzcwMzQxLCJpYXQiOjE2ODExOTc1NDEsImp0aSI6IjE4YTllODQ5NzNjZTRiMjk4OTYwNWNlMzg4MTU2M2NmIiwidXNlcl9pZCI6MX0.UwxV8_4UMm0aR-uENVztJaYY-NFW6CSSLL7mlFEuUso'}`,
//   }})
//     const newsResponse: NewsResponse = await response.json();
  
//     // const reportItem = "dfffg"
//       return {
//         props : {
//           newsArticles: newsResponse || null
//         }
//       } 
//     }
//    catch(error) {
//     console.log('error: ', error)
//     return {
//       props : {
//         error: true
//       }
//     }
//   }  
// }




  // const session:any = await  getSession(context)
  // const token:any = session?.user.accessToken
  // // export const getStaticProps: GetStaticProps<BreakingNewsPageProps> = async () => {
  //   // const {data:session} = useSession()
  //     // const newsResponse = useAllUserPredictQuery(session.user.accessToken)
  //     // const newsResponse = useAllUserPredictQuery(token)
  
      
  //   const response = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/`,{
  //     method: 'GET',
  
  //     headers: {
  //      'Content-Type': 'application/json',   
  //      'authorization': `Bearer ${token}`,
  //     //  'authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMzcwMzQxLCJpYXQiOjE2ODExOTc1NDEsImp0aSI6IjE4YTllODQ5NzNjZTRiMjk4OTYwNWNlMzg4MTU2M2NmIiwidXNlcl9pZCI6MX0.UwxV8_4UMm0aR-uENVztJaYY-NFW6CSSLL7mlFEuUso'}`,
  
  //   }
  // });
  // const newsResponse: NewsResponse = await response.json();
  
  //   // const reportItem = "dfffg"
  //     return {
  //       props : {
  //         newsArticles: newsResponse || null
  //       }
  //     } 
  //   }
  

  
  


export default function Home() {


const {data:session} = useSession();
const token:any = session?.user.accessToken;
const {data,isSuccess} =  useAllUserPredictQuery(token)

  return (
  
           <div className="todos">
       {data?.map((curElem:any) => (
          <div key={curElem.id}>
           
            <div>

             <Link href={`/${curElem.id}`}> {curElem.FriendName}={curElem.Compatiblity}</Link>     
             
       

            </div>
          
          </div>
        ))} 


       </div>
  
  );
}





























