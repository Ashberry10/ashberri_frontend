// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }



import {SessionProvider} from "next-auth/react";

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '@/store/store'
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from 'react-redux'
import Header from '../components/Header'
import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css'
import 'daisyui/dist/full.css'


import  {useRouter} from "next/navigation";
import Layout from "../components/Layout";
import CreatePostForm from "../components/CreatePostForm";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
interface IProps {
  children : ReactNode;
  session : any;
}
function MyApp({ Component, pageProps}: AppProps) {

  return (
    
    <SessionProvider session={pageProps.session} >
    <Provider store={store}>
      <ChakraProvider>
     
      <Login/>
      <Layout>
        
            <CreatePostForm />
            <Component {...pageProps} />
            
          </Layout> 
      </ChakraProvider>
     </Provider>
     </SessionProvider>
  )
}

export default MyApp





