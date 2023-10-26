"use client"

import React from 'react'
import { useEffect } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { useAppSelector } from "../store/hooks";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useGetUserProfileQuery,useUpdateUserMutation } from "@/app/store/slices/authApi";
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoadingPage from "@/app/components/LoadingPage"
import LoadingIcon from "@/app/components/LoadingIcon"
import { BASE_URL } from '../../../api_constants'

import { Fragment } from 'react';
import { useRouter } from 'next/router';
function EditForm() {


    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ];
    
      const [isDirty, setIsDirty] = useState(false); 
      const [profileImage, setProfileImage] = useState<string | null>(null); // Add this line
      const { data: session, status } = useSession({
        required: true,
      });
      const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
      const token: any = session?.user.accessToken;
    
      const { data, error, isSuccess, refetch: refetchProfileUsersData   } = useGetUserProfileQuery(token);
      const [values, setValues] = useState({
        name: '',
        email: '',
        year: '',
        month: '',
        day: '',
        gender: '', 
        file: null,
      });
    
      const showSuccessMessageFor5Seconds = (message: string) => {
        setSuccessMessage(message);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 6000); 
      };
      
      const [isLoading, setIsLoading] = useState(false); // Add the isLoading state
    
      let buttonClasses = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded center' ;
    
      const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
        setIsDirty(true);
      };
      
      const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e?.target.files?.[0] || null;
        setValues((prevValues) => ({
          ...prevValues,
          file: file as null,  
          
          handleUpload
    
        }));
        setIsDirty(true);
       // Render selected image as a placeholder
       if (file) {
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
      }
    
    
    
      };
    
      const [userData, setUserData] = useState({
        email: "",
        name: "",
        day: "",
        month: "",
        year: "",
        file: "",
        gender:""
      });
    
      const [updateUserMutation] = useUpdateUserMutation();
    
      const userProfile = data?.user_profile;
      
      const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
        setIsDirty(true);
      };
      const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()// Prevent default form submission behavior
        const { name, day, file, email, year, month, gender } = values;
        const formData = new FormData();
        if (name) formData.append('name', name);
        if (email) formData.append('email', email);
        if (day) formData.append('day', day);
        if (year) formData.append('year', year);
        if (month) formData.append('month', month);
        if (gender) formData.append('gender', gender);
        file && formData.append('file', file);
        
        try {    
          setIsLoading(true); 
          const response = await updateUserMutation({
            access: token,
            formData: formData,
          });
    
   
                 if (response) {
                  if (isDirty) {
                    showSuccessMessageFor5Seconds('Changes successfully saved');
                  }
                  refetchProfileUsersData();
                } else {
                  console.log('Failed uploading');
                }




        } catch (error) {
          console.error('Error while transferring to API:', error);
        
      } finally {
        setIsLoading(false); // Set isLoading back to false when authentication finishes
        setIsDirty(false); 
      }
    
        // Clear the file input
        setValues((prevValues) => ({
          ...prevValues,
          file: null,
        }));
      };
    
    
    
    
    
      
    
    
    
         const months = [
         { value: '01', label: 'January' },
         { value: '02', label: 'February' },
         { value: '03', label: 'March' },
         { value: '04', label: 'April' },
         { value: '05', label: 'May' },
         { value: '06', label: 'June' },
         { value: '07', label: 'July' },
         { value: '08', label: 'August' },
         { value: '09', label: 'September' },
         { value: '10', label: 'October' },
         { value: '11', label: 'November' },
         { value: '12', label: 'December' },
       ]
       const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
       const currentYear = new Date().getFullYear();
       const years = Array.from({ length: 100 }, (_, index) => String(currentYear - index));
    
      // Store User Data in Local State
      useEffect(() => {
        if (userProfile && isSuccess) {
          setUserData({
            email: userProfile.email,
            name: userProfile.name,
            day: userProfile.day,
            month: userProfile.month,
            year: userProfile.year,
            gender: userProfile.gender,
            file: userProfile.file,
          });
    
          if (userProfile.file) {
            const imageUrl = BASE_URL + userProfile.file;
            setProfileImage(imageUrl);
          }
        }
      }, [userProfile, isSuccess]);
    
    
    
    
    
    
  return (
    <div>

<form className="space-y-6 mt-5">
            <div className="flex ">
                <div className="flex flex-col w-full">
                  <label className="mr-2 pb-2 font-semibold">Profile Picture</label>
                  <div>
                  <div className="space-y ">

                    
                    
                    
 

 {profileImage ? (
   
   
<div className="text-sm">
  <label htmlFor="file-upload" className="flex items-center ">
    <img
      className="h-20 w-20 rounded-full "
      src={profileImage}
      alt="Profile"
    />
    {/* <span className=" pl-10">{profileImage ? 'Change' : 'Select a file'}</span> */}
    <span
      className="bg-gray-500 ml-10 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full "
    >
      {profileImage ? 'Change' : 'Select a file'}
    </span>
    <input
      id="file-upload"
      name="file"
      type="file"
      className="sr-only"
      accept="image/*"
      onChange={handleFileChange}
    />

  </label>
</div>



        ) : (
          <div className="h-20 w-20 text-gray-400">
            <svg
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
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
        ) 
        }



  
</div>
                  </div>
                </div>
              </div>

              
              
              <div className="flex items-center">
                <div className="flex flex-col w-full">
                  <label className="mr-2 font-semibold">Name</label>
                  <input
                    className="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="name"
                    placeholder={userData.name }
                    value={values.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col w-full">
                  <label className="mr-2 font-semibold">Email</label>
                  <input
                    className="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="email"
                    name="email"
                    placeholder={userData.email }
                    value={values.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>





              
      <div className="mt-6">
                 <div className="flex items-center mb-2">
                   <label htmlFor="birthday" className="mr-2 font-semibold">Birthday</label>
                   <span className="text-gray-500 text-sm">Your Current DOB &nbsp;=&nbsp;{userData.day}/{userData.month}/{userData.year}</span>
                 </div>
                 <div className="grid grid-cols-3 gap-3 sm:grid-cols-auto">
                   <div className="flex flex-col">
                     <label htmlFor="day" className="sr-only">Day</label>
                     <select
                      id="day"
                      name="day"
                      value={values.day}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md focus:outline-none"
                    >
                      <option value="">Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="month" className="sr-only">Month</label>
                    <select
                      id="month"
                      name="month"
                      value={values.month}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md focus:outline-none"
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="year" className="sr-only">Year</label>
                    <select
                      id="year"
                      name="year"
                      value={values.year}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md focus:outline-none"
                    >
                      <option value="">Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div></div>

          
 

<div className="flex items-center">
  <div className="flex flex-col w-full">

  <div className="flex items-center mb-2">
  <label className="mr-2 font-semibold">Gender</label>
  <span className="text-gray-500 text-sm">Your Current Gender &nbsp;=&nbsp; {userData.gender}</span>
</div>

<div className="grid grid-cols-3 gap-2 sm:grid-cols-auto">
  <label className="cursor-pointer">
    <input
      onChange={handleChange}
      type="radio"
      name="gender"
      value="male"
      className="hidden"
    />
    <div
      className={`border-2 text-center  rounded-lg p-2 px-7 cursor-pointer ${
        values.gender === 'male' ? 'bg-gray-300 border-gray-300' : ''
      }`}
    >
      <span className="block text-sm text-gray-600">Male</span>
    </div>
  </label>

  <label className="cursor-pointer">
    <input
      onChange={handleChange}
      type="radio"
      name="gender"
      value="female"
      className="hidden"
    />
    <div
      className={`border-2 rounded-lg text-center   p-2 px-5 cursor-pointer ${
        values.gender === 'female' ? 'bg-gray-300 border-gray-300' : ''
      }`}
    >
      <span className="block text-sm text-gray-600">Female</span>
    </div>
  </label>



  <label className="cursor-pointer">
    <input
      onChange={handleChange}
      type="radio"
      name="gender"
      value="other"
      className="hidden"
    />
    <div
      className={`border-2 rounded-lg text-center  p-2 px-6 cursor-pointer ${
        values.gender === 'other' ? 'bg-gray-300 border-gray-300' : ''
      }`}
    >
      <span className="block text-sm text-gray-600">Other</span>
    </div>
  </label>



</div>


</div>
</div> 


<br/>



         <div className="flex justify-center items-center ">
      <button
        onClick={handleUpload}
        className={`${buttonClasses} ${isDirty ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isDirty} // Disable the button if no changes were made
      > 

        {isLoading ? <LoadingIcon/> : 'Save Change' }
       </button>
    </div>






            </form>
            {successMessage && <div className="text-green-500 font-semibold">{successMessage}</div>}
    </div>

  )
}

export default EditForm