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
import Login from "@/components/modals/Login";
import SignUp from "@/components/modals/SignUp";
interface IProps {
  children : ReactNode;
  session : any;
}
function MyApp({ Component, pageProps}: AppProps) {

  return (
    
    <SessionProvider session={pageProps.session} >
    <Provider store={store}>
      <ChakraProvider>
     
      {/* <SignUp/> */}
      <Login/>
      <Layout>
        
            <Component {...pageProps} />
          </Layout> 
      </ChakraProvider>
     </Provider>
     </SessionProvider>
  )
}

export default MyApp





