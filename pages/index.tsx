import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import { UserView } from './user/UserView';
// import { decrement, increment } from '../slices/counterSlice';
// import type { RootState } from '../store'
// import { selectValue } from '../slices/counterSlice';
import Header from '../components/Header';


const Home: NextPage = () => {
  // const count = useSelector(selectValue);
  // const dispatch = useDispatch();
  // const token = localStorage.getItem("token");
  return (
    <>
    
    {/* <h1>index</h1> */}
    <Header/>
   
    {/* <UserView/> */}
    </>
//     <div className="flex min-h-screen flex-col items-center justify-center py-2">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
//         <h1>The value of count is {count}</h1>

// <button onClick={() => dispatch(increment())} className='w-full h-10 bg-green-400/50'>Increment</button>
// <button onClick={() => dispatch(decrement())} className='w-full h-10 bg-red-400/50'>Decrement</button>
//       </main>

//     </div>
//   )

  )
  }
export default Home










