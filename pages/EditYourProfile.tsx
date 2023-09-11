
// using headless ui

import { useEffect } from 'react';
import { useUpdateUserMutation } from "./api/authApi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useAppSelector } from "./../store/hooks";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useGetUserProfileQuery } from "./api/authApi";
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Listbox } from '@headlessui/react';
const EditYourProfile = () => {
    
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];
  const [profileImage, setProfileImage] = useState<string | null>(null); // Add this line
  const [values, setValues] = useState({
    name: '',
    email: '',
    year: '',
    month: '',
    day: '',
    gender: '', 
    file: null,
  });


  let buttonClasses = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded center' ;

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const router = useRouter();
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0] || null;
    setValues((prevValues) => ({
      ...prevValues,
      file: file as null,
      
      handleUpload
    }));
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
  const { data: session } = useSession();
  const token: any = session?.user.accessToken;

  const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
  const userProfile = data?.user_profile;
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleUpload = async () => {
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
      const response = await updateUserMutation({
        access: token,
        formData: formData,
      });

      if (response) {
        console.log('Successfully uploaded');
        window.location.reload(); // Reload the page after successful upload
      } else {
        console.log('Failed uploading');
      }
    } catch (error) {
      console.error('Error while transferring to API:', error);
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
        const imageUrl = "http://223.235.84.152:8000" + userProfile.file;
        setProfileImage(imageUrl);
      }
    }
  }, [userProfile, isSuccess]);

  

  return (
    // <div className=" bg-gray-100  flex flex-col justify-center sm:py-12">
    <div className=" bg-gray-100  flex flex-col justify-center h-screen no-scrollbar pb-24" >

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
      className="bg-gray-500 ml-10 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
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

{/*  */}

  
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
                    placeholder={userData.name || ''}
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
                    placeholder={userData.email || ''}
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
        className={buttonClasses}
      >
        {isLoading ? 'Saving...' : 'Save Changes'}
      </button>
    </div>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditYourProfile;















// using daisyui 
// import { useEffect } from 'react';
// import { useUpdateUserMutation } from "./api/authApi";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useAppSelector } from "./../store/hooks";
// import { useState, FormEvent, ChangeEvent } from 'react';
// import { useGetUserProfileQuery } from "./api/authApi";
// import Image from 'next/image';

// const EditYourProfile = () => {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     year: '',
//     month: '',
//     day: '',
//     file: null,
//   });

//   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e?.target.files?.[0] || null;
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: file as null,
//     }));
//   };

//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     day: "",
//     month: "",
//     year: "",
//     file: "",
//   });

//   const [updateUserMutation] = useUpdateUserMutation();
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;

//   const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
//   const userProfile = data?.user_profile;

//   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleUpload = async () => {
//     const { name, day, file, email, year, month } = values;
//     const formData = new FormData();
//     if (name) formData.append('name', name);
//     if (email) formData.append('email', email);
//     if (day) formData.append('day', day);
//     if (year) formData.append('year', year);
//     if (month) formData.append('month', month);
//     file && formData.append('file', file);

//     try {
//       const response = await updateUserMutation({
//         access: token,
//         formData: formData,
//       });

//       if (response) {
//         console.log('Successfully uploaded');
//         window.location.reload(); // Reload the page after successful upload
//       } else {
//         console.log('Failed uploading');
//       }
//     } catch (error) {
//       console.error('Error while transferring to API:', error);
//     }

//     // Clear the file input
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: null,
//     }));
//   };

//   // Store User Data in Local State
//   useEffect(() => {
//     if (userProfile && isSuccess) {
//       setUserData({
//         email: userProfile.email,
//         name: userProfile.name,
//         day: userProfile.day,
//         month: userProfile.month,
//         year: userProfile.year,
//         file: userProfile.file, // Assuming the file URL is provided in the API response
//       });
//     }
//   }, [userProfile, isSuccess]);

//   const months = [
//     { value: '01', label: 'January' },
//     { value: '02', label: 'February' },
//     { value: '03', label: 'March' },
//     { value: '04', label: 'April' },
//     { value: '05', label: 'May' },
//     { value: '06', label: 'June' },
//     { value: '07', label: 'July' },
//     { value: '08', label: 'August' },
//     { value: '09', label: 'September' },
//     { value: '10', label: 'October' },
//     { value: '11', label: 'November' },
//     { value: '12', label: 'December' },
//   ];

//   const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 100 }, (_, index) => String(currentYear - index));

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-md">
//         <div className="p-4">
//           <h2 className="text-lg font-bold">Edit Profile</h2>
//         </div>
//         <div className="p-4">
//           <div className="mb-4">
//             <label htmlFor="name" className="block font-bold">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={values.name}
//               onChange={handleInputChange}
//               placeholder={userData.name || ''}
//               className="form-input border rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-bold">Email</label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               value={values.email}
//               onChange={handleInputChange}
//               placeholder={userData.email || ''}
//               className="form-input border rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <div className="flex items-center mb-2">
//               <label htmlFor="birthday" className="block font-bold">Birthday</label>
//               <span className="ml-2 text-sm">Your Current DOB={userData.day}/{userData.month}/{userData.year}</span>
//             </div>
//             <div className="flex space-x-2">
//               <div className="w-1/3">
//                 <label htmlFor="day" className="block">Day</label>
//                 <select
//                   id="day"
//                   name="day"
//                   value={values.day}
//                   onChange={handleChange}
//                   className="form-select border rounded-md w-full"
//                 >
//                   <option value="">Day</option>
//                   {days.map((day) => (
//                     <option key={day} value={day}>
//                       {day}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-1/3">
//                 <label htmlFor="month" className="block">Month</label>
//                 <select
//                   id="month"
//                   name="month"
//                   value={values.month}
//                   onChange={handleChange}
//                   className="form-select border rounded-md w-full"
//                 >
//                   <option value="">Month</option>
//                   {months.map((month) => (
//                     <option key={month.value} value={month.value}>
//                       {month.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-1/3">
//                 <label htmlFor="year" className="block">Year</label>
//                 <select
//                   id="year"
//                   name="year"
//                   value={values.year}
//                   onChange={handleChange}
//                   className="form-select border rounded-md w-full"
//                 >
//                   <option value="">Year</option>
//                   {years.map((year) => (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4">
//             <div className="flex items-center mb-2">
//               <label htmlFor="profilePhoto" className="block font-bold">Profile Photo</label>
//               <span className="ml-2 text-sm">(Optional)</span>
//             </div>
//             <div className="flex space-x-2">
//               {userData.file && (
//                 <div>
//                   <Image
//                     src={userData.file}
//                     alt="Profile Photo"
//                     layout="responsive"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//               )}
//               <input
//                 type="file"
//                 name="file"
//                 onChange={handleFileChange}
//                 className="form-input border rounded-md"
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               onClick={handleUpload}
//               className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
//             >
//               Update
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditYourProfile;



































// Flowbite which give some eroor in this code
// import React, { useEffect } from 'react';
// import { useUpdateUserMutation } from './api/authApi';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import { useAppSelector } from './../store/hooks';
// import { useState, FormEvent, ChangeEvent } from 'react';
// import { useGetUserProfileQuery } from './api/authApi';
// import { Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { useRouter } from 'next/router';
// import { Listbox } from '@headlessui/react';
// import {
//   Container,
//   Form,
//   Label,
//   Input,
//   Select,
//   Button,
//   Image,
//   Grid,
//   GridItem,
// } from 'flowbite';

// const EditYourProfile = () => {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     year: '',
//     month: '',
//     day: '',
//     file: null,
//   });

//   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
//   const router = useRouter();

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e?.target.files?.[0] || null;
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: file as null,
//     }));
//   };

//   const [userData, setUserData] = useState({
//     email: '',
//     name: '',
//     day: '',
//     month: '',
//     year: '',
//     file: '',
//   });

//   const [updateUserMutation] = useUpdateUserMutation();
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;

//   const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
//   const userProfile = data?.user_profile;

//   const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleUpload = async () => {
//     const { name, day, file, email, year, month } = values;
//     const formData = new FormData();
//     if (name) formData.append('name', name);
//     if (email) formData.append('email', email);
//     if (day) formData.append('day', day);
//     if (year) formData.append('year', year);
//     if (month) formData.append('month', month);
//     file && formData.append('file', file);

//     try {
//       const response = await updateUserMutation({
//         access: token,
//         formData: formData,
//       });

//       if (response) {
//         console.log('Successfully uploaded');
//         window.location.reload(); // Reload the page after successful upload
//       } else {
//         console.log('Failed uploading');
//       }
//     } catch (error) {
//       console.error('Error while transferring to API:', error);
//     }

//     // Clear the file input
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: null,
//     }));
//   };

//   const months = [
//     { value: '01', label: 'January' },
//     { value: '02', label: 'February' },
//     { value: '03', label: 'March' },
//     // ... add more months
//   ];

//   useEffect(() => {
//     if (userProfile) {
//       setUserData((prevData) => ({
//         ...prevData,
//         email: userProfile.email || '',
//         name: userProfile.name || '',
//         day: userProfile.day || '',
//         month: userProfile.month || '',
//         year: userProfile.year || '',
//         file: userProfile.file || '',
//       }));
//     }
//   }, [userProfile]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isSuccess && !userProfile) {
//     router.push('/signup');
//   }

//   return (
//     <Container>
//       <Form className="space-y-6">
//         <Grid className="grid-cols-3 gap-6">
//           <GridItem className="col-span-3">
//             <Label>Name</Label>
//             <Input
//               name="name"
//               value={values.name}
//               onChange={handleInputChange}
//               placeholder="Enter your name"
//             />
//           </GridItem>

//           <GridItem className="col-span-3">
//             <Label>Email</Label>
//             <Input
//               name="email"
//               value={values.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email"
//             />
//           </GridItem>

//           <GridItem className="col-span-3">
//             <Label>Date of Birth</Label>
//             <div className="flex">
//               <div className="w-1/3 pr-2">
//                 <Listbox value={values.month} onChange={(value) => handleChange(value)}>
//                   <div className="relative">
//                     <Listbox.Button className="input input-bordered">
//                       <span className="input-content">{values.month || 'Month'}</span>
//                       <span className="input-icon">
//                         <i className="fas fa-chevron-down"></i>
//                       </span>
//                     </Listbox.Button>
//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-100"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <Listbox.Options className="absolute z-10 input-options">
//                         {months.map((month) => (
//                           <Listbox.Option
//                             key={month.value}
//                             value={month.value}
//                             className="input-option"
//                           >
//                             {month.label}
//                           </Listbox.Option>
//                         ))}
//                       </Listbox.Options>
//                     </Transition>
//                   </div>
//                 </Listbox>
//               </div>
//               <div className="w-1/3 px-2">
//                 <Input
//                   name="day"
//                   value={values.day}
//                   onChange={handleInputChange}
//                   placeholder="Day"
//                   className="text-center"
//                 />
//               </div>
//               <div className="w-1/3 pl-2">
//                 <Input
//                   name="year"
//                   value={values.year}
//                   onChange={handleInputChange}
//                   placeholder="Year"
//                   className="text-center"
//                 />
//               </div>
//             </div>
//           </GridItem>

//           <GridItem className="col-span-3">
//             <Label>Profile Picture</Label>
//             <Input
//               type="file"
//               accept="image/*"
//               name="file"
//               onChange={handleFileChange}
//               className="input input-bordered"
//             />
//           </GridItem>

//           <GridItem className="col-span-3">
//             <Button onClick={handleUpload} className="btn btn-primary">
//               Save Changes
//             </Button>
//           </GridItem>
//         </Grid>
//       </Form>
//     </Container>
//   );
// };

// export default EditYourProfile;

































// using chakra ui
//  import { useEffect } from 'react';
//  import { useUpdateUserMutation } from "./api/authApi";
//  import { signIn, signOut, useSession } from "next-auth/react";
//  import { useAppSelector } from "./../store/hooks";
//  import { useState, FormEvent, ChangeEvent } from 'react';
//  import { useGetUserProfileQuery } from "./api/authApi";
//  import Image from 'next/image';
//  import { Box, Heading, Text, Stack, FormControl, FormLabel, Input, Button, Select } from '@chakra-ui/react';

//  const EditYourProfile = () => {
//    const [values, setValues] = useState({
//      name: '',
//      email: '',
//      year: '',
//      month: '',
//      day: '',
//      file: null,
//    });

//    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
//      const { name, value } = e.currentTarget;
//      setValues((prevValues) => ({
//        ...prevValues,
//        [name]: value,
//      }));
//    };

//    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//      const file = e?.target.files?.[0] || null;
//      setValues((prevValues) => ({
//        ...prevValues,
//        file: file as null,
//      }));
//    };

//    const [userData, setUserData] = useState({
//      email: "",
//      name: "",
//      day: "",
//      month: "",
//      year: "",
//      file: "",
//    });

//    const [updateUserMutation] = useUpdateUserMutation();
//    const { data: session } = useSession();
//    const token: any = session?.user.accessToken;

//    const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
//    const userProfile = data?.user_profile;
  
//    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//      const { name, value } = e.currentTarget;
//      setValues((prevValues) => ({
//        ...prevValues,
//        [name]: value,
//      }));
//    };
//    const handleUpload = async () => {
//      const { name, day, file, email, year, month } = values;
//      const formData = new FormData();
//      if (name) formData.append('name', name);
//      if (email) formData.append('email', email);
//      if (day) formData.append('day', day);
//      if (year) formData.append('year', year);
//      if (month) formData.append('month', month);
//      file && formData.append('file', file);

//      try {
//        const response = await updateUserMutation({
//          access: token,
//          formData: formData,
//        });

//        if (response) {
//          console.log('Successfully uploaded');
//          window.location.reload(); // Reload the page after successful upload
//        } else {
//          console.log('Failed uploading');
//        }
//      } catch (error) {
//        console.error('Error while transferring to API:', error);
//      }

//      // Clear the file input
//      setValues((prevValues) => ({
//        ...prevValues,
//        file: null,
//      }));
//    };


//    // Store User Data in Local State
//    useEffect(() => {
//      if (userProfile && isSuccess) {
//        setUserData({
//          email: userProfile.email,
//          name: userProfile.name,
//          day: userProfile.day,
//          month: userProfile.month,
//          year: userProfile.year,
//          file: userProfile.file, // Assuming the file URL is provided in the API response
//        });
//      }
//    }, [userProfile, isSuccess]);

//    const months = [
//      { value: '01', label: 'January' },
//      { value: '02', label: 'February' },
//      { value: '03', label: 'March' },
//      { value: '04', label: 'April' },
//      { value: '05', label: 'May' },
//      { value: '06', label: 'June' },
//      { value: '07', label: 'July' },
//      { value: '08', label: 'August' },
//      { value: '09', label: 'September' },
//      { value: '10', label: 'October' },
//      { value: '11', label: 'November' },
//      { value: '12', label: 'December' },
//    ];

//    const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
//    const currentYear = new Date().getFullYear();
//    const years = Array.from({ length: 100 }, (_, index) => String(currentYear - index));

//    return (
//      <Box maxW="lg" mx="auto" p={6}>
//        <Heading as="h2" size="xl" fontWeight="semibold" mb={4}>Edit Profile</Heading>
//        <Box bg="white" borderRadius="lg" shadow="md" p={6}>
//          <Stack spacing={4}>
//            <FormControl>
//              <FormLabel>Name</FormLabel>
//              <Input
//                type="text"
//                name="name"
//                value={values.name}
//                onChange={handleInputChange}
//                placeholder={userData.name || ''}
//              />
//            </FormControl>
//            <FormControl>
//              <FormLabel>Email</FormLabel>
//              <Input
//                type="text"
//                name="email"
//                value={values.email}
//                onChange={handleInputChange}
//                placeholder={userData.email || ''}
//              />
//            </FormControl>
//            <FormControl>
//              <FormLabel>Birthday</FormLabel>
//              <Stack direction="row" spacing={2}>
//                <Select
//                  name="day"
//                  value={values.day}
//                  onChange={handleChange}
//                  placeholder="Day"
//                >
//                  <option value="">Day</option>
//                  {days.map((day) => (
//                    <option key={day} value={day}>
//                      {day}
//                    </option>
//                  ))}
//                </Select>
//                <Select
//                  name="month"
//                  value={values.month}
//                  onChange={handleChange}
//                  placeholder="Month"
//                >
//                  <option value="">Month</option>
//                  {months.map((month) => (
//                    <option key={month.value} value={month.value}>
//                      {month.label}
//                    </option>
//                  ))}
//                </Select>
//                <Select
//                  name="year"
//                  value={values.year}
//                  onChange={handleChange}
//                  placeholder="Year"
//                >
//                  <option value="">Year</option>
//                  {years.map((year) => (
//                    <option key={year} value={year}>
//                      {year}
//                    </option>
//                  ))}
//                </Select>
//              </Stack>
//              <Text mt={1} color="gray.500" fontSize="sm">Your Current DOB: {userData.day}/{userData.month}/{userData.year}</Text>
//            </FormControl>
//            <FormControl>
//              <FormLabel>Profile Photo</FormLabel>
//              <Stack direction="row" alignItems="center">
//                {userData.file && (
//                  <Box w={32} h={32} mb={2}>
//                    <Image
//                      src={userData.file}
//                      alt="Profile Photo"
//                      layout="responsive"
//                      width={200}
//                      height={200}
//                    />
//                  </Box>
//                )}
//                <Input type="file" name="file" onChange={handleFileChange} />
//              </Stack>
//              <Text mt={1} color="gray.500" fontSize="sm">(Optional)</Text>
//            </FormControl>
//            <Button
//              colorScheme="green"
//              onClick={handleUpload}
//              isLoading={isLoading}
//              loadingText="Updating..."
//            >
//              Update
//            </Button>
//          </Stack>
//        </Box>
//      </Box>
//    );
//  };

//  export default EditYourProfile;














 // only tailwind css
//  import { useEffect } from 'react';
//  import { useUpdateUserMutation } from "./api/authApi";
//  import { signIn, signOut, useSession } from "next-auth/react";
//  import { useAppSelector } from "./../store/hooks";
//  import { useState, FormEvent, ChangeEvent } from 'react';
//  import { useGetUserProfileQuery } from "./api/authApi";
//  import Image from 'next/image';

//  const EditYourProfile = () => {
//    const [values, setValues] = useState({
//      name: '',
//      email: '',
//      year: '',
//      month: '',
//      day: '',
//      file: null,
//    });

//    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
//      const { name, value } = e.currentTarget;
//      setValues((prevValues) => ({
//        ...prevValues,
//        [name]: value,
//      }));
//    };

//    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//      const file = e?.target.files?.[0] || null;
//      setValues((prevValues) => ({
//        ...prevValues,
//        file: file as null,
//      }));
//    };

//    const [userData, setUserData] = useState({
//      email: "",
//      name: "",
//      day: "",
//      month: "",
//      year: "",
//      file: "",
//    });

//    const [updateUserMutation] = useUpdateUserMutation();
//    const { data: session } = useSession();
//    const token: any = session?.user.accessToken;

//    const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
//    const userProfile = data?.user_profile;
  
//    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//      const { name, value } = e.currentTarget;
//      setValues((prevValues) => ({
//        ...prevValues,
//        [name]: value,
//      }));
//    };
//    const handleUpload = async () => {
//      const { name, day, file, email, year, month } = values;
//      const formData = new FormData();
//      if (name) formData.append('name', name);
//      if (email) formData.append('email', email);
//      if (day) formData.append('day', day);
//      if (year) formData.append('year', year);
//      if (month) formData.append('month', month);
//      file && formData.append('file', file);

//      try {
//        const response = await updateUserMutation({
//          access: token,
//          formData: formData,
//        });

//        if (response) {
//          console.log('Successfully uploaded');
//          window.location.reload(); // Reload the page after successful upload
//        } else {
//          console.log('Failed uploading');
//        }
//      } catch (error) {
//        console.error('Error while transferring to API:', error);
//      }

//      // Clear the file input
//      setValues((prevValues) => ({
//        ...prevValues,
//        file: null,
//      }));
//    };


//    // Store User Data in Local State
//    useEffect(() => {
//      if (userProfile && isSuccess) {
//        setUserData({
//          email: userProfile.email,
//          name: userProfile.name,
//          day: userProfile.day,
//          month: userProfile.month,
//          year: userProfile.year,
//          file: userProfile.file, // Assuming the file URL is provided in the API response
//        });
//      }
//    }, [userProfile, isSuccess]);

//    const months = [
//      { value: '01', label: 'January' },
//      { value: '02', label: 'February' },
//      { value: '03', label: 'March' },
//      { value: '04', label: 'April' },
//      { value: '05', label: 'May' },
//      { value: '06', label: 'June' },
//      { value: '07', label: 'July' },
//      { value: '08', label: 'August' },
//      { value: '09', label: 'September' },
//      { value: '10', label: 'October' },
//      { value: '11', label: 'November' },
//      { value: '12', label: 'December' },
//    ];

//    const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
//    const currentYear = new Date().getFullYear();
//    const years = Array.from({ length: 100 }, (_, index) => String(currentYear - index));

//    return (
//      <>
//        <div className="container mx-auto">
//          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//            <div className="p-4 sm:p-6">
//              <div className="flex items-center mb-2">
//                <h2 className="text-xl font-semibold">Edit Profile</h2>
//              </div>
//              <div className="mt-4">
//                <div className="flex flex-col mb-4">
//                  <label htmlFor="name" className="mb-2">Name</label>
//                  <input
//                    type="text"
//                    id="name"
//                    name="name"
//                    value={values.name}
//                    onChange={handleInputChange}
//                    placeholder={userData.name || ''}
//                    className="p-2 border border-gray-300 rounded-md focus:outline-none"
//                  />
//                </div>
//                <div className="flex flex-col mb-4">
//                  <label htmlFor="email" className="mb-2">Email</label>
//                  <input
//                    type="text"
//                    id="email"
//                    name="email"
//                    value={values.email}
//                    onChange={handleInputChange}
//                    placeholder={userData.email || ''}
//                    className="p-2 border border-gray-300 rounded-md focus:outline-none"
//                  />
//                </div>
//                <div className="mt-6">
//                  <div className="flex items-center mb-2">
//                    <label htmlFor="birthday" className="mr-2 font-semibold">Birthday</label>
//                    <span className="text-gray-500 text-sm">Your Current DOB={userData.day}/{userData.month}/{userData.year}</span>
//                  </div>
//                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-auto">
//                    <div className="flex flex-col">
//                      <label htmlFor="day" className="sr-only">Day</label>
//                      <select
//                        id="day"
//                        name="day"
//                        value={values.day}
//                        onChange={handleChange}
//                        className="p-3 border border-gray-300 rounded-md focus:outline-none"
//                      >
//                        <option value="">Day</option>
//                        {days.map((day) => (
//                          <option key={day} value={day}>
//                            {day}
//                          </option>
//                        ))}
//                      </select>
//                    </div>
//                    <div className="flex flex-col">
//                      <label htmlFor="month" className="sr-only">Month</label>
//                      <select
//                        id="month"
//                        name="month"
//                        value={values.month}
//                        onChange={handleChange}
//                        className="p-3 border border-gray-300 rounded-md focus:outline-none"
//                      >
//                        <option value="">Month</option>
//                        {months.map((month) => (
//                          <option key={month.value} value={month.value}>
//                            {month.label}
//                          </option>
//                        ))}
//                      </select>
//                    </div>
//                    <div className="flex flex-col">
//                      <label htmlFor="year" className="sr-only">Year</label>
//                      <select
//                        id="year"
//                        name="year"
//                        value={values.year}
//                        onChange={handleChange}
//                        className="p-3 border border-gray-300 rounded-md focus:outline-none"
//                      >
//                        <option value="">Year</option>
//                        {years.map((year) => (
//                          <option key={year} value={year}>
//                            {year}
//                          </option>
//                        ))}
//                      </select>
//                    </div>
//                  </div>
//                </div>
//                <div className="mt-6">
//                  <div className="flex items-center mb-2">
//                    <label htmlFor="profilePhoto" className="mr-2 font-semibold">Profile Photo</label>
//                    <span className="text-gray-500 text-sm">(Optional)</span>
//                  </div>
//                  <div className="flex flex-col items-center">
//                    {userData.file && (
//                      <div className="w-32 h-32 mb-2">
//                        <Image
//                          src={userData.file}
//                          alt="Profile Photo"
//                          layout="responsive"
//                          width={200}
//                          height={200}
//                        />
//                      </div>
//                    )}
//                    <input type="file" name="file" onChange={handleFileChange} className="mt-2" />
//                  </div>
//                </div>
//                <div className="mt-6">
//                  <button
//                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-bold"
//                    type="submit"
//                    onClick={handleUpload}
//                  >
//                    Update
//                  </button>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </>
//    );
// };

// export default EditYourProfile;
