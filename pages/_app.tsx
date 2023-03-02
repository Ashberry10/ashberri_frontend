import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '../app/store'
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Provider store={store}>
      <ChakraProvider>



     <Component {...pageProps} />
      </ChakraProvider>
     </Provider>
  )
}

export default MyApp





