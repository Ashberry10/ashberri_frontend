import { Grid, Heading, Stack } from "@chakra-ui/layout";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React from 'react'
import Login from './Login';
import { useRouter } from "next/router";
import { useSignupUserMutation } from "./api/authApi";
import { Form, Formik,Field } from "formik";
import { useFormik } from "formik";
// import DatePicker from "react-datepicker";
// import DatePicker from 'react-datepicker/dist/react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import Datepicker from "tailwind-datepicker-react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SignUp() {



  interface MyFormValues {
    name: string;
    email: string;
    password: string;
  }
  

  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  
  const [signupUser, { data, isLoading }] = useSignupUserMutation();
  const initialValues: MyFormValues ={ name: "amna",email:"",password:""}
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");

  // const [year, setYear] = useState("");


  // console.log(day);
  // console.log(month);
  // console.log(year);

  

  // const [date_of_birth, setdate_of_birth] = useState(new Date());
 
  // const [family, setFamily] = useState("")

  // console.log(family);


	// const [show, setShow] = useState < boolean > false

	// const handleChange = (selectedDate: Date) => {
	// 	console.log(selectedDate)
	// }
	// const handleClose = (state: boolean) => {
	// 	setShow(state)
	// }


  // console.log(data);
  // const initialValues:number={
  //   name:"",  
  //   date_of_birth:"",
  //   email:"",
  //   tc:"",
  //   Dfirst:"",
  //   Cfirst:"",
  //   password:"",
  //   password2:""
  
  
  // }




  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //   },
  //   onSubmit: (values) => {
  //     signupUser({ ...values });
  //   },
  // })
 

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
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl text-sky-400 font-semibold">
                        Sign Up
                      </h3>

                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span> */}
                      </button>
                    </div>

                    {/*body*/}


                   <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        // signupUser({ ...values });
        console.log('Form data',values);
      }}
      // validate={values => {
      //   //  values.name values.email values.password
      //   //  errors.name values.email values.password
      //   // error.name = 'This field is required'

      //   let errors = {}

      //   if (!values.name) {
      //     errors.name = 'Required'
          
      //   }
      //   if (!values.email) {
      //     errors.email = 'Required'
          
      //   }
        
        
        
      //   return errors
      // }}
    >
      {({handleSubmit,values,handleChange,})=> (



              <Form onSubmit={handleSubmit}>
        
                    <p className="my-2 p-4 text-blueGray-500 text-sm leading-relaxed ">
                      {/* <input className="px-2 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" type="name"  id="name" placeholder="Fullname"   />&nbsp;&nbsp;
                      <input className="px-2 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" type="text" placeholder="email" /><br />
                      <input className="px-2 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" type="text" placeholder="email address" />&nbsp;&nbsp;
                     
                      <input className="px-2 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" type="text" placeholder="First name" />&nbsp;&nbsp;<br/>
                      <input className="px-2 h-10 border border-2 outline-violet-300 border-gray-200 rounded-lg" type="password" placeholder="Password" />&nbsp;&nbsp;
                      <input className="px-2 h-10 border border-2 outline-violet-300 border-gray-200 rounded-lg" type="password" placeholder="Password" /><br/>
                      <input className="px-2 h-10 border border-2 outline-violet-300 border-gray-200 rounded-lg" type="password" placeholder="Password" />&nbsp;&nbsp;
                      <input className="px-2 h-10 border border-2 outline-violet-300 border-gray-200 rounded-lg" type="password" placeholder="Password" />
 */}


<label  htmlFor="name">Name</label>&nbsp;&nbsp;
<input  
type='text'
 id='name'
 name='name'
 value={values.name}
 onChange={handleChange}
 
 /><br />

<label  htmlFor="email">E-mail</label>
<input type='email' id='email' name='email'   value={values.email}
 onChange={handleChange}
  /><br />


<label htmlFor="password">Password</label>
<input type='password' id='password' name='password'  value={values.password}
 onChange={handleChange}
  />

















                       
                      {/* <label className="pl-1 pb-2 pt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-state">
                        Date of Birth (Provide correct DOB for your better future)
                        <input type="text" value={date_of_birth} onChange={(event) => setdate_of_birth(event.target.value)}/>
                      </label>
 */}



            {/* <SingleDatepicker
         
    name="date-input"
    date={date_of_birth}
    onDateChange={setdate_of_birth}
  /> */}


{/* <DatePicker selected={date_of_birth} dateFormat="dd-MM-yyyy" onChange={(date:Date) => setdate_of_birth(date)} /> */}




                       {/* <label className="pl-1 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-state">
                        Date of Birth (Provide correct DOB for your better future)
                      </label>


                      <div className="flex  flex-row space-x-2  mb-2  ">

                       
                        <div className=" relative  h-10 ">
                          
                          <select
                            className="block appearance-none bg-white  border-gray-200  border-2 outline-violet-300 border-gray-200 hover:border-violet-300  px-1 py-2 pr-12  rounded shadow leading-tight focus:outline-none focus:shadow-outline"  value={day}  onChange={(event) => setDay(event.target.value)} >


                            <option className="hidden"  >DD</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>


                          </select>

                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>

                        <div className=" relative   h-10 ">
                          <select className="block appearance-none bg-white  border-gray-200  border-2 outline-violet-300 border-gray-200 hover:border-violet-300 px-1 py-2 pr-12  rounded shadow leading-tight focus:outline-none focus:shadow-outline"   value={month}  onChange={(event) => setMonth(event.target.value)}  placeholder="dLast name">
                            <option className="hidden" value="">MM</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-gray-700">
                            <svg className="fill-current h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>


                        <div className="relative mb-3  h-10">
                          <select className="block appearance-none bg-white  border-gray-200  border-2 outline-violet-300 border-gray-200 hover:border-violet-300 2px-1 py-2 pr-14  rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={year}  onChange={(event) => setYear(event.target.value)}  placeholder="dLast name" >
                            <option className="hidden" value="">YYYY</option>
                            <option>1994</option>
                            <option>1995</option>
                            <option>1996</option>
                            <option>1997</option>
                            <option>1998</option>
                            <option>1999</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>


                      </div> */}

                      {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold " htmlFor="grid-state">
                        gender
                      </label>


                      <div className="">
                        <label className=" inline-flex items-center">
                          <input type="radio" className="form-radio " name="accountType" value="personal" />
                          <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          
                          <input type="radio" className="form-radio" name="accountType" value="busines" />
                          <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                          <input type="radio" className="form-radio" name="accountType" value="busines" />
                          <span className="ml-2">Other</span>
                        </label>
                      </div>  */}

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
                      
                      <button>Submit</button>
                      {/* <SubmitButton  isLoading={isLoading}>Signup</SubmitButton> */}
                      
                      {/* <button
                        className="bg-green-600 hover:bg-green-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                       
                      >
                        Sign UP
                      </button> */}
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