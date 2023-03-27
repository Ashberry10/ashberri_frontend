import React from 'react'
// import { useGetAllUserQuery } from "../pages/user/userSlice";
import { useProfileQuery } from "../pages/api/authApi";
import { useAppSelector } from "./hooks";
import { setUser } from "../pages/state/authSlice";
import { useAppDispatch } from "./hooks"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import da from 'date-fns/esm/locale/da/index.js';

// import  { getToken }  from "./LocalStorage";
// import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';
// import { useNavigate } from 'react-router';


function Today() {
  const dispatch = useAppDispatch();






  return (
    <div>
      
   


   

           <h5 className='text-lg'>This is a protected page only login can assess</h5>
          </div>
           
 

  )
}

export default Today





