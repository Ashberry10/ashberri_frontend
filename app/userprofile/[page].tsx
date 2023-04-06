"use client"
import React from 'react'
import { useAllUserPredictQuery,useProfileByIdQuery ,useGetAllUserIdQuery ,useGetAllUserQuery } from "../../pages/api/authApi";
import { signIn, signOut, useSession } from "next-auth/react";
import { access } from 'fs';
import { NextPage } from 'next'
import { useEffect } from 'react';
import { useState } from 'react';
// import { GetStaticProps} from "next";
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import alluser from '../alluser/page';

type Employee = {
 data:any
};







const {data:session} = useSession();




export const getStaticPaths = async () => {
  const res = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/`,{
    method: 'GET',

    headers: {
    'Content-Type': 'application/json',
    
     'authorization': `Bearer ${session?.user.accessToken}`,
  }
  });
  const data = await res.json();

  const paths = data.map((curElem:any) => {
    return {
      params: {
        page: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};



export const getStaticProps = async (context:any) => {
  const id = context.params.page;
  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwOTU1NDA1LCJpYXQiOjE2ODA3ODI2MDUsImp0aSI6ImUzYjc3NDU3MDZjNzRmOWJhM2RlYjYzZjExNTUxMDY4IiwidXNlcl9pZCI6MX0.LQO-Kd-c-Xk-k04NvX75hTU516-8U7LmBjeX0DrP_tc'

  const res = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/?id=${id}`,{
  // const res = await fetch(`http://jsonplaceholder.typicode.com/Modelapi/${id}`,{

    // https://jsonplaceholder.typicode.com/
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      
      // 'authorization': `Bearer ${token}`,
       'authorization': `Bearer ${session?.user.accessToken}`,

    }
  });


  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};










const page = ({data}:Employee) => {

  console.log("datva",data);
  return (
    <div>   
        {/* {data?.map((curElem:any) => ( */}
      <div  >
        <div>
    
          <span>FriendName-<br/>{data.Compatiblity}</span>
         

        </div>
        </div>
         {/* ))} */}
      
        </div>
  )
}

export default page




















