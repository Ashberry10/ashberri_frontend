// @ts-nocheck // This is a client entry with "use client"
"use client"
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { useRef } from 'react';
import { signIn } from 'next-auth/react';
import LoadingPage from "@/app/components/LoadingPage"
import LoadingIcon from "@/app/components/LoadingIcon"
// import Layout from '/Layout';
import SignUp from "../signup/page";
interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}



interface FormState {
  email: string;
  password: string;
  errors: {
    [key: string]: string;
  };
}

// const schema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
// });

console.log("this is login page")
const Login = ({ searchParams }: IProps) => {

  // const Header = dynamic(() => import('../components/Header'), {
  //   ssr: false
  // });
  

  
  
  // 1997/12/18
  const [isPasswordHidden, setIsPasswordHidden] = useState(true); //password visibility
  const router = useRouter();
  const email = useRef("")
  const pass = useRef("")
  
  // const [showModal, setShowModal] = React.useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false); // Add the isLoading state
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

    const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  const onSubmit = async () => {
    try {
      setIsLoading(true); // Set isLoading to true when authentication starts
      const result = await signIn("credentials", {
        email: email.current,
        password: pass.current,
        // redirect: false,
              redirect: true,
      callbackUrl: "/",
      });
      if (result?.error) {
        console.log('Error during login:', result.error);
      } else {
        console.log('Login successful!');
        // router.push('/');
      }
    } catch (error) {
      console.log('Error during login:', error);
     } finally {
       setIsLoading(false); // Set isLoading back to false when authentication finishes
     }
  };


  const { data: session } = useSession()  //from next-auth to the user session

  return (
    <div>
     
      <body
        className="bg-white h-screen  ">

        <div>
          <h1 className='black text-5xl flex  justify-center pt-7 phone:text-1xl'>ashberri</h1><br />
          <p className='text-gray-600 text-xl flex justify-center '>help to find people who </p> <p className='text-gray-600 text-xl flex justify-center '>are highly compatible...</p><br />
        </div>

        <div className="justify-center flex ">
          <div className="shadow-2xl  flex  flex-col bg-white p-8 rounded-xl w-96  justify-center   text-lg relative">
            {searchParams?.message && <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}
            <input className="px-4   my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg h-10 " placeholder="Email" type="email" onChange={(e) => (email.current = e.target.value)} ></input>
            <div className="relative ">
              <input className="w-80 px-4 h-10 my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg"
                type={isPasswordHidden ? 'password' : 'text'}
                name="password"
                autoComplete="current-password"
                required
                placeholder="Password" onChange={(e) => (pass.current = e.target.value)}
              />
              <div className="absolute inset-y-0 right-0  flex items-center text-sm leading-5">
              <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="pr-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isPasswordHidden ? (


                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" ><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000" fill="#737373"></path></svg>

                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" ><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000" fill="#737373"></path></svg>

                    )}
                  </svg>

                </button>
              </div>

            </div>

              <button  className="bg-violet-300 hover:bg-violet-400 text-white my-2 py-2 rounded-md font-bold" 
      
        onClick={onSubmit}
      >
        {isLoading ? <LoadingIcon/> : 'Login'}
      </button>

            <span className=" text-center text-sm my-2 cursor-pointer hover:underline">Forgotten password?</span>
            <hr className="my-2" />
            <div className="items-center">

<button
  className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 ml-14 mx-auto rounded-md font-bold "
  // onClick={openModal}
  onClick={() => router.push("/signup")}
>
     Create New Account
</button>

{/* {isModalOpen && (
  <SignUp closeModal={closeModal} /> 
)} */}
</div >
   
            <span className="absolute-bottom-12 text-sm"><span className="font-bold hover:underline cursor-pointer">Create a Page </span>
              for a celebrity, brand or business.</span>




              

              
          </div>
        </div>



        <div>
          <br />
          <br />
        </div>
      </body>





    </div>
  )
}

export default dynamic(() => Promise.resolve(Login), { ssr: false })













// "use client";
// // import Button from "@elements/Button";
// // import TextBox from "@elements/TextBox";
// import { signIn } from "next-auth/react";
// import React, { useRef } from "react";

// const LoginPage = () => {
//   const email = useRef("")
//   const pass = useRef("")
  

//   const onSubmit = async () => {
//     const result = await signIn("credentials", {
//       email: email.current,
//       password: pass.current,
//       redirect: true,
//       callbackUrl: "/",

//     });
//     if (result?.error) {
//       console.log('Error during login:', result.error);
//     } else {
//       console.log('Login successful!');
//     }

//   };
//   return (
//     <div
//       className={
//         "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
//       }
//     >
//       <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
//         {/* <TextBox
//           labelText="User Name"
//           onChange={(e) => (userName.current = e.target.value)}
//         />
//         <input
//           labelText="Password"
//           type={"password"}
//           onChange={(e) => (pass.current = e.target.value)}
//         /> */}




// <div className="relative ">
// <input className="px-4   my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg h-10 " placeholder="email" type="email" onChange={(e) => (email.current = e.target.value)} ></input>
// <input className="px-4   my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg h-10 " placeholder="password" type="password" onChange={(e) => (pass.current = e.target.value)} ></input>


//             </div>
//         <button onClick={onSubmit}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;