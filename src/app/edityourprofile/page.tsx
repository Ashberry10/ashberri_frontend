
// using headless ui

import { useEffect } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { useAppSelector } from "./../store/hooks";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useGetUserProfileQuery,useUpdateUserMutation } from "@/app/store/slices/authApi";
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoadingPage from "@/app/components/LoadingPage"
import LoadingIcon from "@/app/components/LoadingIcon"
import { BASE_URL } from '../../../api_constants'

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EditProfileForm from '../components/EditProfileForm';
const EditYourProfile = () => {
    
 

  return (
    <div className="mt-20    flex flex-col justify-center h-screen no-scrollbar pb-32" >

      <div className="relative  sm:max-w-xl sm:mx-auto">
        <div className="relative  bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-700">Edit Profile</h2>
            </div>
           <EditProfileForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditYourProfile;




