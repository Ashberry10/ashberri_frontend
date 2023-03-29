"use client";

import React from 'react'
// import { useGetAllUserQuery } from "../pages/user/userSlice";

import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import da from 'date-fns/esm/locale/da/index.js';
import { signIn, signOut, useSession } from "next-auth/react";

// import  { getToken }  from "./LocalStorage";
// import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';
// import { useNavigate } from 'react-router';


function Protect() {

  const {data:session} = useSession()

  // console.log({data:session});

  // console.log(session?.user.token)

  // const  {data:session} = useSession()

  // console.log({data:session});x
  // console.log(session);


  return (
    <div>
      
           <h5 className='text-lg'>This is a protected page only login can assess</h5>
          </div>
           
 

  )
}

export default Protect





