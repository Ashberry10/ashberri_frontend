import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signIn, signOut, useSession } from "next-auth/react";
import { BASE_URL } from '../../../../api_constants';

export const postApi = createApi({
    reducerPath:'postApi',

    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + '/post/'
    }),


    endpoints:(builder) => ({

        sendCreatePostRequest: builder.mutation({ 
            query: ({access,formData}) => ({
                url: 'create/',
                method: 'POST',
                headers: {
                'authorization': `Bearer ${access}`,
                },
                body: formData,
            }),
        }),

    }),

});

export const { useSendCreatePostRequestMutation } = postApi;
