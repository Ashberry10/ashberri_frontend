import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { access } from 'fs';
import { signIn, signOut, useSession } from "next-auth/react";
import { BASE_URL } from '@/api_constants';
// import { BASE_URL } from '../../api_constants';


// Function to retrieve the authentication token from your application's state
const getAuthToken = () => {
  // Retrieve the authentication token from your application's state (e.g., Redux store)
  // Return the token here
};

// Function to prepare the headers for the request, including the authorization header with the token


// export const friendApi = createApi({
//    reducerPath: 'friendApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://127.0.0.1:8000/friend/', // Replace '/api/' with the appropriate base URL for your API
//     prepareHeaders: (headers, { getState }) => {
//       // const { auth } = getState();
//       const {data:session} = useSession();

//       // const token = auth.token; // Assuming you store the token in auth.token
//       const token:any = session?.user.accessToken;

//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),




  export const friendApi  = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'friendApi ',
   
    // The base query to request data.
    // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
    baseQuery: fetchBaseQuery({
     baseUrl: BASE_URL + '/friend/'
     
     





   
    
    }),
   
  endpoints: (builder) => ({




      getAllUserFriendStatus: builder.query({
        query: (access) => ({
          url: 'friend-request/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access}`,

          },
        }),
      }),

// SendingFriendRequest
sendFriendRequest: builder.mutation({ 
  query: ({access,formData}) => ({
    url: 'friend-request/',
    method: 'POST',
    // body: friendRequestData,
    headers: {
      'authorization': `Bearer ${access}`,
    },
    body: formData,
  }),
}),

// cancelfriendrequest
cancelFriendRequest: builder.mutation({
  query: ({access,formData}) => ({
    url: `friend-request/`,
    method: 'DELETE',
    headers: {
      'authorization': `Bearer ${access}`,
    },
    
    body: formData,
    
  }),
}),


// SendingFriendRequest
 acceptFriendRequest: builder.mutation({ 
  query: ({access,formData}) => ({
    url: 'accept_or_reject_friendrequest/',
    method: 'POST',
    // body: friendRequestData,
    headers: {
      'authorization': `Bearer ${access}`,
    },
    body: formData,
  }),
}),



rejectFriendRequest: builder.mutation({ 
  query: ({access,formData}) => ({
    url: 'accept_or_reject_friendrequest/',
    method: 'POST',
    // body: friendRequestData,
    headers: {
      'authorization': `Bearer ${access}`,
    },
    body: formData,
  }),
}),


 


  }),
});

export const { useSendFriendRequestMutation, useCancelFriendRequestMutation,useGetAllUserFriendStatusQuery,useAcceptFriendRequestMutation,useRejectFriendRequestMutation } = friendApi;




