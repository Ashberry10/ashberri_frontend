// // import axios from 'axios'
// // import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'



// // type User ={
// //   id:number
// //   name:string
// //   date_of_birth:string
// //   email:string
// // }



// // type InitialState ={
// //   loading:boolean
// //   users: User[]
// //   error:string
// // }

// // const initialState:InitialState = {
// //   loading: false,
// //   users: [],
// //   error: ''
// // }

// // //CreateAsyncThunk will automatacally Generates pending ,fulfilled and rejected action types
// // // CreateAsyncThunk only avalible in redux toolkit
// // export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
// //   return axios
// //     // .get('https://jsonplaceholder.typicode.com/users')
// //     .get('http://127.0.0.1:8000/api/user/getallusers/')

    
// //     // .then(response => response.data.map((user) => user.id)) //for only fetching the id

// //     .then(response => response.data) //for all data
// // })



// // // Reducers
// // // Note:-
// // // CreateSlice automatically generate an action with the same name
// // // as the reducers function we have written
// // const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers:{},
// //   extraReducers: builder => {
// //     builder.addCase(fetchUsers.pending, state => {
// //       state.loading = true
// //     })
// //     builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
// //       state.loading = false
// //       state.users = action.payload
// //       state.error = ''
// //     })
// //     builder.addCase(fetchUsers.rejected, (state, action) => {
// //       state.loading = false
// //       state.users = []
// //       state.error = action.error.message || 'Something went wrong'
// //     })
// //   }
// // })

// // export default userSlice.reducer







// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';





// type User ={
//   id:number
//   name:string
//   token:string
//   email:string
//   D_first:number
//   C_first:number
//   password:string
//   access_token:string




// }
// // It is used to define our endpoints and allow to create the API slice
// export const userAuthApi = createApi({
//  // The unique key that defines where the Redux store will store our cache.
//  reducerPath: 'authApi',

//  // The base query to request data.
//  // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
//  baseQuery: fetchBaseQuery({
//   baseUrl: 'http://127.0.0.1:8000/api/user/',
//  }),

//  // The set of operations that we want to perform against the server.
//  endpoints: (builder) => ({

// //GETALLUSER
//   getAllUser: builder.query<User[], void>({
//    query: () => ({
//     url: 'getallusers/',
//     // providesTags: [{ data: "Todos", id: "LIST" }],
//     method: 'GET'
//    })
//   }),



// //PROFILE VIEW
//   profile: builder.query({
//    query: (access_token) => ({
//     //  if (localStorage.getItem('token')) {
//     url: 'profile/',
//     method: 'GET',
//     headers: {
//       'authorization': `Bearer ${access_token}`,
//     }
//   //  }
//    })
//   }),

//   // signinUser: builder.mutation({
//   //   const token:string = localStorage.getItem('token')
//   //   query: (body: { email: string; password: string ; token:string = localStorage.getItem('token') }) => {
//   //     return {
//   //       url: "login/",
//   //       method: "post",
//   //       body,
//   //     };
//   //   },
//   // }),
    
// //   signinUser: builder.mutation({
// //     query: (body: { email: string; password: string }) => {
      
// //       //  if (localStorage.getItem('token')) {
    
// //       return {
// //         url: "login/",
// //         method: "post",
// //         body,
// //       };
      
// //   // }
// // },
// //   }),

//   //SIGNIN
//   loginUser: builder.mutation({
//     query: (body: { email: string; password: string  }) => {
//       return {
//         url: "login/",
//         method: "post",
//         body,
//       };
//     },
//   }),

  

// // user signup
//   registerUser: builder.mutation({
//     query: (body: { name: string;email:string,password:string,Dfirst:string,Cfirst:string  }) => {
//     // query: (body: { name: string; email: string; password: string; password2: string;  tc:string;   Dfirst:number; Cfirst:number; date_of_birth:string; }) => {

//     // query: (body:  User ) => {

//       return {
//         url: "register/",
//         method: "post",
//         body,
//       };
//     },

//   }),


// // user model
//   modelUser: builder.mutation({
//   query: (body: { C_second:string,D_second:string,D_first:string,C_first:string  }) => {
//   // query: (body: { name: string; email: string; password: string; password2: string;  tc:string;   Dfirst:number; Cfirst:number; date_of_birth:string; }) => {

//   // query: (body:  User ) => {

//     return {
//       url: "Modelapi/",
//       method: "post",
//       body,
//     };
//   },

// }),



//   // getuserById: builder.query({
//   //  query: (id) => {
//   //   console.log("ID:", id)
//   //   return {
//   //    url: `users/${id}`,
//   //    method: 'GET'
//   //   }
//   //  }
//   // }),

//   // getuserByLimit: builder.query({
//   //  query: (num) => {
//   //   console.log("Limit Number:", num)
//   //   return {
//   //    url: `users?_limit=${num}`,
//   //    method: 'GET'
//   //   }
//   //  }
//   // }),

//   // deleteuser: builder.mutation({
//   //  query: (id) => {
//   //   console.log("Delete ID:", id)
//   //   return {
//   //    url: `users/${id}`,
//   //    method: 'DELETE'
//   //   }
//   //  }
//   // }),

//   // createuser: builder.mutation({
//   //  query: (newuser) => {
//   //   console.log("Create user: ", newuser)
//   //   return {
//   //    url: `users`,
//   //    method: 'user',
//   //    body: newuser,
//   //    headers: {
//   //     'Content-type': 'application/json; charset=UTF-8',
//   //    }
//   //   }
//   //  }
//   // }),

//   // updateuser: builder.mutation({
//   //  query: (updateuserData) => {
//   //   console.log("Update user: ", updateuserData)
//   //   const { id, ...data } = updateuserData
//   //   console.log("Actual Update user: ", data)
//   //   return {
//   //    url: `users/${id}`,
//   //    method: 'PUT',
//   //    body: data,
//   //    headers: {
//   //     'Content-type': 'application/json; charset=UTF-8',
//   //    }
//   //   }
//   //  }
//   // }),
//  }),

// })

// // Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
// export const { useGetAllUserQuery,useProfileQuery,useRegisterUserMutation,useModelUserMutation, useLoginUserMutation, } = userAuthApi