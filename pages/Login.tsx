// maybe tailwind css error in this page that why is throwing aligning errror



import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import { useSigninUserMutation } from "../pages/user/userSlice";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "./user/authSlice";
import { useRouter } from 'next/router'
import { useSignupUserMutation } from "./user/userSlice";
import React, { useState } from "react";
import { useEffect } from "react";
// import SignUp from '../pages/SignUp';
// import axios from "axios";





const Login = () => {

  // const [credentials, setcredentials] = useState({ email: " ", password: " " });
  const [email, setEmail] = useState<string>();
 const router = useRouter();
 const dispatch = useAppDispatch();


 const [signinUser, { data, isLoading, error, isError, isSuccess }] =
 useSigninUserMutation();




  const [showModal, setShowModal] = React.useState(true);

  
  if (isSuccess) {
    dispatch(setUser({ token: data.token, name: data.name  }));
    // navigate("/");
    localStorage.setItem("token", data.token);
    console.log(data.token);
    // console.log(data.name);
    
  }
  console.log(isSuccess);
  
  
  // const json = await response.json();
  // console.log(json);
  
  
  
  //   if (json.success) {
  //     //save the auth token and redirect
     
  //     console.log("Logged in  Successfully");
  //     history.push("/");
  //   } else {
  //     props.showAlert("Invalid details", "danger");
  //   }
  // };



  useEffect(() => {

    // dispatch(getAllUsers());

    console.log(data);
  }, []);
  



  return (



    <body
      className="bg-gray-100">

        <div className="mb-5"
        onClick={() => router.push("/")} >
          <h1 className='text-sky-400 text-6xl flex  justify-center'>ashberri</h1><br />
          <p className='text-gray-600 text-2xl flex justify-center '>People those how highly compatible  <br /> and  think  like U,connect in ashberri...</p>

        </div>

        <div className="justify-center flex ">
        <div className="shadow-2xl  flex  flex-col bg-white p-8 rounded-xl w-96  justify-center   text-lg relative">
        <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        setEmail(values.email);
        signinUser({ ...values });
      }}
    >
      <Form>

      <InputControl
              name="email"
              label="Email"
              inputProps={{
                type: "email",
                placeholder: "Enter Email...",
              }}
            />



<InputControl
              name="password"
              label="Password"
              inputProps={{
                placeholder: "Enter Password...",
                type: "password",
              }}
            />    
<SubmitButton isLoading={isLoading}>Signin</SubmitButton>

      </Form>


      </Formik>
          {/* <input className="px-4 h-12   my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg" type="text" placeholder="Email address or phone number" />
          <input className="px-4 h-12 my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg" type="password" placeholder="Password" /> */}
          {/* <button className="bg-violet-300 hover:bg-violet-400 text-white my-2 py-3 rounded-md font-bold">Log In</button> */}





          <span className=" text-center text-sm my-2 cursor-pointer hover:underline">Forgotten password?</span>
          <hr className="my-2" />






          <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit" type="button" onClick={() => router.push("/SignUp")}>Create New Account</button>


          {/* Signup Box */}



          {/* <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit" type="button"
            onClick={() => setShowModal(false)}
    

            
            >Create New Account</button>
            <SignUp/> */}

          {/* {showModal ? (
            <>
             
            </>
          ) : null} */}










          <span className="absolute-bottom-12 text-sm"><span className="font-bold hover:underline cursor-pointer">Create a Page </span>

            for a celebrity, brand or business.</span>
        </div>
      </div>
 
    </body>





  )
}

export default Login








// import React from 'react'

// function Login() {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login



// <Grid h="100vh" placeItems="center">
// <Stack p="4" boxShadow="xl" borderRadius="md">

//   <InputControl
//     name="name"
//     label="Name"
//     inputProps={{
//       placeholder: "Enter Name...",
//     }}
//   />
//   <InputControl
//     name="email"
//     label="Email"
//     inputProps={{
//       type: "email",
//       placeholder: "Enter Email...",
//     }}
//   />
//   <InputControl
//     name="password"
//     label="Password"
//     inputProps={{
//       placeholder: "Enter Password...",
//       type: "password",
//     }}
//   />
//   <SubmitButton isLoading={isLoading}>Signup</SubmitButton>
// </Stack>
// </Grid>