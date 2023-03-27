import { Grid, Heading, Stack } from "@chakra-ui/layout";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React from 'react'
import Login from './Login';
import { useRouter } from "next/router";
import { useSignupUserMutation } from "../pages/api/authApi";
import { Form, Formik,Field } from "formik";
import { useFormik } from "formik";

import "react-datepicker/dist/react-datepicker.css";

import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";


function SignUp() {



  interface MyFormValues {
    name: string;
    email: string;
    password: string;
    day:string;
    month:string;
    year:string;
  }
  

  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  
  const [signupUser, { data, isLoading }] = useSignupUserMutation();
  const initialValues: MyFormValues ={ name: "",email:"",password:"",day:"",month:"",year:""}



  return (
      <>

      {/* {showModal ? ( */}

      <body
      className="bg-gray-100">

        <div className="mb-5">

          <h1 className='text-sky-400 text-6xl flex  justify-center'>ashberri</h1><br />
          <p className='text-gray-600 text-2xl flex justify-center '>People those how highly compatible  <br /> and  think  like U,connect in ashberri...</p>

        </div>
         <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b ">
                      <h3 className="text-3xl text-sky-400 font-semibold">
                        Sign Up
                      </h3>

                      <button
                        className=" bg-transparent border-0 text-black opacity-5 text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
              
                      </button>
                    </div>



                   <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        signupUser({ ...values });
        // console.log('Form data',values);
      }}
// yup code furthur


    >
      {({handleSubmit,values,handleChange,})=> (



              <Form onSubmit={handleSubmit}>
        
                    <p className="my-2 p-4 text-blueGray-500 text-sm leading-relaxed ">
    <Field  className="px-2 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" 

     type="text"
    name='name'
    placeholder="Fullname"

 
 /><br />

{/* <label  htmlFor="email">E-mail</label> */}
<Field  className="px-2 h-10 mb-2 w-full border border-2 outline-violet-300 border-gray-200 rounded-lg"  placeholder="email address" name='email'   

  /><br />


{/* <label htmlFor="password">Password</label> */}
<Field className="px-2 h-10 mb-6 w-full border border-2 outline-violet-300 border-gray-200 rounded-lg"  type='password' placeholder="Password" name='password' 

  />




<label className="pl-1 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-state">
                        Date of Birth (Provide correct DOB for your better future)
                      </label>




<Field className="px-10 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg"  as="select" placeholder="DD"  id='day' name='day' >




  <option className="hidden">DD</option>
    <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>

 

  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
  </div>





</Field>



<Field className="px-10 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg"  as="select" placeholder="MM"  name='month' >



{/*  
  <select
    className="block appearance-none bg-white  border-gray-200  border-2 outline-violet-300 border-gray-200 hover:border-violet-300  px-1 py-2 pr-12  rounded shadow leading-tight focus:outline-none focus:shadow-outline"  placeholder="dLast name"> */}
 <option className="hidden">MM</option>
    <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Ari</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dev</option>


  {/* </select> */}

  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
  </div>

</Field>



<Field className="px-10 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg"  as="select" placeholder="YYYY"  name='year' >


<option className="hidden">YYYY</option>
    <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>

</Field>


                    </p>



                    {/*footer*/}
                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => router.push("./Login")}
                      >
                        Close
                      </button>
                      
                      <button   className="bg-green-600 hover:bg-green-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >Submit</button>
                  
                    </div>
                    </Form>
      )}
                    </Formik>
                    
                  
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    
    </body>
   
    </>

    
  );
};

export default SignUp;



























// NOTE:- formik signup using formik,yup,material ui
// https://www.heady.io/blog/react-typescript-hooks-form-validation-with-formik-yup-and-material-ui



// import React, { useState } from 'react'
// import {
//     Grid,
//     TextField,
//     Button,
//     makeStyles,
//     createStyles,
//     Theme,
// } from '@material-ui/core'
// import { Formik, Form, FormikProps } from 'formik'
// import * as Yup from 'yup'

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             maxWidth: '450px',
//             display: 'block',
//             margin: '0 auto',
//         },
//         textField: {
//             '& > *': {
//                 width: '100%',
//             },
//         },
//         submitButton: {
//             marginTop: '24px',
//         },
//         title: { textAlign: 'center' },
//         successMessage: { color: 'green' },
//         errorMessage: { color: 'red' },
//     })
// )

// interface ISignUpForm {
//     fullName: string
//     password: string
//     confirmPassword: string
//     email: string
// }

// interface IFormStatus {
//     message: string
//     type: string
// }

// interface IFormStatusProps {
//     [key: string]: IFormStatus
// }

// const formStatusProps: IFormStatusProps = {
//     success: {
//         message: 'Signed up successfully.',
//         type: 'success',
//     },
//     duplicate: {
//         message: 'Email-id already exist. Please use different email-id.',
//         type: 'error',
//     },
//     error: {
//         message: 'Something went wrong. Please try again.',
//         type: 'error',
//     },
// }

// const SignUp: React.FunctionComponent = () => {
//     const classes = useStyles()
//     const [displayFormStatus, setDisplayFormStatus] = useState(false)
//     const [formStatus, setFormStatus] = useState<IFormStatus>({
//         message: '',
//         type: '',
//     })

//     // const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
//     //     try {
//     //         // API call integration will be here. Handle success / error response accordingly.
//     //         if (data) {
//     //             setFormStatus(formStatusProps.success)
//     //             resetForm({})
//     //         }
//     //     } catch (error) {
//     //         const response = error.response
//     //         if (
//     //             response.data === 'user already exist' &&
//     //             response.status === 400
//     //         ) {
//     //             setFormStatus(formStatusProps.duplicate)
//     //         } else {
//     //             setFormStatus(formStatusProps.error)
//     //         }
//     //     } finally {
//     //         setDisplayFormStatus(true)
//     //     }
//     // }

//     return (
//         <div className={classes.root}>
//             <Formik
//                 initialValues={{
//                     fullName: '',
//                     password: '',
//                     confirmPassword: '',
//                     email: '',
//                 }}
//                 onSubmit={(values: ISignUpForm, actions) => {
//                     // createNewUser(values, actions.resetForm)
//                     setTimeout(() => {
//                         actions.setSubmitting(false)
//                     }, 500)
//                 }}
//                 validationSchema={Yup.object().shape({
//                     email: Yup.string()
//                         .email()
//                         .required('Enter valid email-id'),
//                     fullName: Yup.string().required('Please enter full name'),
//                     password: Yup.string()
//                         .matches(
//                             /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
//                         )
//                         .required(
//                             'Please valid password. One uppercase, one lowercase, one special character and no spaces'
//                         ),
//                     confirmPassword: Yup.string()
//                         .required('Required')
//                         .test(
//                             'password-match',
//                             'Password musth match',
//                             function (value) {
//                                 return this.parent.password === value
//                             }
//                         ),
//                 })}
//             >
//                 {(props: FormikProps<ISignUpForm>) => {
//                     const {
//                         values,
//                         touched,
//                         errors,
//                         handleBlur,
//                         handleChange,
//                         isSubmitting,
//                     } = props
//                     return (
//                         <Form>
//                             <h1 className={classes.title}>Sign up</h1>
//                             <Grid
//                                 container
//                                 justify="space-around"
//                                 direction="row"
//                             >
//                                 <Grid
//                                     item
//                                     lg={10}
//                                     md={10}
//                                     sm={10}
//                                     xs={10}
//                                     className={classes.textField}
//                                 >
//                                     <TextField
//                                         name="fullName"
//                                         id="fullName"
//                                         label="Full Name"
//                                         value={values.fullName}
//                                         type="text"
//                                         helperText={
//                                             errors.fullName && touched.fullName
//                                                 ? errors.fullName
//                                                 : 'Enter your full name.'
//                                         }
//                                         error={
//                                             errors.fullName && touched.fullName
//                                                 ? true
//                                                 : false
//                                         }
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     lg={10}
//                                     md={10}
//                                     sm={10}
//                                     xs={10}
//                                     className={classes.textField}
//                                 >
//                                     <TextField
//                                         name="password"
//                                         id="password"
//                                         label="Password"
//                                         value={values.password}
//                                         type="password"
//                                         helperText={
//                                             errors.password && touched.password
//                                                 ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
//                                                 : 'One uppercase, one lowercase, one special character and no spaces'
//                                         }
//                                         error={
//                                             errors.password && touched.password
//                                                 ? true
//                                                 : false
//                                         }
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     lg={10}
//                                     md={10}
//                                     sm={10}
//                                     xs={10}
//                                     className={classes.textField}
//                                 >
//                                     <TextField
//                                         name="confirmPassword"
//                                         id="confirmPassword"
//                                         label="Confirm password"
//                                         value={values.confirmPassword}
//                                         type="password"
//                                         helperText={
//                                             errors.confirmPassword &&
//                                             touched.confirmPassword
//                                                 ? errors.confirmPassword
//                                                 : 'Re-enter password to confirm'
//                                         }
//                                         error={
//                                             errors.confirmPassword &&
//                                             touched.confirmPassword
//                                                 ? true
//                                                 : false
//                                         }
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     lg={10}
//                                     md={10}
//                                     sm={10}
//                                     xs={10}
//                                     className={classes.textField}
//                                 >
//                                     <TextField
//                                         name="email"
//                                         id="email"
//                                         label="Email-id"
//                                         value={values.email}
//                                         type="email"
//                                         helperText={
//                                             errors.email && touched.email
//                                                 ? errors.email
//                                                 : 'Enter email-id'
//                                         }
//                                         error={
//                                             errors.email && touched.email
//                                                 ? true
//                                                 : false
//                                         }
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     lg={10}
//                                     md={10}
//                                     sm={10}
//                                     xs={10}
//                                     className={classes.submitButton}
//                                 >
//                                     <Button
//                                         type="submit"
//                                         variant="contained"
//                                         color="secondary"
//                                         disabled={isSubmitting}
//                                     >
//                                         Submit
//                                     </Button>
//                                     {displayFormStatus && (
//                                         <div className="formStatus">
//                                             {formStatus.type === 'error' ? (
//                                                 <p
//                                                     className={
//                                                         classes.errorMessage
//                                                     }
//                                                 >
//                                                     {formStatus.message}
//                                                 </p>
//                                             ) : formStatus.type ===
//                                               'success' ? (
//                                                 <p
//                                                     className={
//                                                         classes.successMessage
//                                                     }
//                                                 >
//                                                     {formStatus.message}
//                                                 </p>
//                                             ) : null}
//                                         </div>
//                                     )}
//                                 </Grid>
//                             </Grid>
//                         </Form>
//                     )
//                 }}
//             </Formik>
//         </div>
//     )
// }

// export default SignUp