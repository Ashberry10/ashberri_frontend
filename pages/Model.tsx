// import React from 'react'
// import { Form, Formik } from "formik";
// import { InputControl, SubmitButton } from "formik-chakra-ui";
// import { useModelUserMutation } from "./api/userAuthApi";
// import { number } from 'yup';

// function Model() {
//   const [modelUser, { data, isLoading }] = useModelUserMutation();
//   console.log(data);
  
  
  
//   return (


//     <div>


// <Formik
//       initialValues={{ D_first:"",C_first:"", D_second:"",C_second:""}}
//       onSubmit={(values) => {
//         modelUser({ ...values});
//       }}
//     >
// <Form>

// <InputControl
//                 name="D_first"
//                 label="D_first"
//                 inputProps={{
//                   placeholder: "Enter Dfirst...",
                 
//                 }}
//               />   



// <InputControl
//                 name="C_first"
//                 label="C_first"
//                 inputProps={{
//                   placeholder: "Enter Cfirst...",
                 
//                 }}
//               />  


// <InputControl
//                 name="D_second"
//                 label="D_second"
//                 inputProps={{
//                   placeholder: "Enter Dsecond...",
                 
//                 }}
//               />   



// <InputControl
//                 name="C_second"
//                 label="C_second"
//                 inputProps={{
//                   placeholder: "Enter Csecond...",
                 
//                 }}
//               />  
//               </Form>
//               </Formik>








//               <Formik
//       initialValues={{ D_first:"",C_first:"", D_second:"",C_second:""}}
//       onSubmit={(values) => {
//         modelUser({ ...values });
//       }}
//     >
// <Form>

// <InputControl
//                 name="D_first"
//                 label="D_first"
//                 inputProps={{
//                   placeholder: "Enter Dfirst...",
                 
//                 }}
//               />   



// <InputControl
//                 name="C_first"
//                 label="C_first"
//                 inputProps={{
//                   placeholder: "Enter Cfirst...",
                 
//                 }}
//               />  


// <InputControl
//                 name="D_second"
//                 label="D_second"
//                 inputProps={{
//                   placeholder: "Enter Dsecond...",
                 
//                 }}
//               />   



// <InputControl
//                 name="C_second"
//                 label="C_second"
//                 inputProps={{
//                   placeholder: "Enter Csecond...",
                 
//                 }}
//               />  

//                  <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                   
                      
                      
//                       <SubmitButton  isLoading={isLoading}>Predict</SubmitButton>
                      
             
//                     </div>
              
              
              
//               </Form>
//               </Formik>

//     </div>
//   )
// }

// export default Model