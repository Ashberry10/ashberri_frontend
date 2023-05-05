import Head from 'next/head';
// import Link from 'next/link';
import { FaUserCircle, FaThumbsUp, FaRegComment, FaShare } from 'react-icons/fa';  
export default function Home() {


// const {data:session} = useSession();
// const token:any = session?.user.accessToken;
// const {data,isSuccess} =  useAllUserPredictQuery(token)
// 
  return (
  
      //      <div className="todos">
      //  {data?.map((curElem:any) => (
      //     <div key={curElem.id}>
           
      //       <div>

      //        <Link href={`/${curElem.id}`}> {curElem.FriendName}={curElem.Compatiblity}</Link>     
             
       

      //       </div>
          
      //     </div>
      //   ))} 


      //  </div>




<div>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-md p-6">
          <div className="flex items-center mb-6">
            <FaUserCircle size={32} className="mr-2 text-gray-500" />
            <div>
              <p className="font-bold text-gray-800">John Doe</p>
              <p className="text-gray-600">2 hours ago</p>
            </div>
          </div>
          <p className="text-gray-800 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus ac sem egestas, vel eleifend nisi sollicitudin. Nullam vehicula sodales risus, at facilisis metus facilisis et. Morbi lacinia ex sit amet augue iaculis ultricies. Proin eu tellus eu nisl iaculis faucibus.</p>
          <div className="flex justify-between items-center text-gray-600">
            <div className="flex items-center">
              <FaThumbsUp className="mr-2" />
              <span>10 likes</span>
            </div>
            <div className="flex items-center">
              <FaRegComment className="mr-2" />
              <span>5 comments</span>
            </div>
            <div className="flex items-center">
              <FaShare className="mr-2" />
              <span>2 shares</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












// ai generer login
{/* <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-md sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="font-bold text-2xl mb-5">Login to your account</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <label htmlFor="email" className="font-bold text-gray-700 block mb-2">Email</label>
                  <input type="email" id="email" className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500" placeholder="Enter your email" />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="font-bold text-gray-700 block mb-2">Password</label>
                  <input type="password" id="password" className="w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                    <label htmlFor="remember" className="ml-2 block text-gray-700">Remember me</label>
                  </div>
                  <div className="text-sm">
                    <Link href="#">
                      <h1 className="font-medium text-blue-500 hover:text-blue-400">Forgot your password?</h1>
                    </Link>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue focus:ring-2 ring-blue-200 ring-opacity-50">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 */}





// generate code

/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
<header className="w-full h-16 bg-white shadow">
  <nav className="flex items-center justify-between w-full h-full px-4">
    <div className="font-bold text-xl">My Website</div>
    <div className="flex items-center">
      <a href="#" className="mx-4 hover:text-gray-500">Home</a>
      <a href="#" className="mx-4 hover:text-gray-500">About</a>
      <a href="#" className="mx-4 hover:text-gray-500">Contact</a>
    </div>
  </nav>
</header>
<main className="flex flex-col items-center justify-center w-full flex-1 px-4">
  <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Website</h1>
  <p className="text-xl text-center mb-8">This is a basic example of a responsive website using Tailwind CSS and React.</p>
  <button className="px-8 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700">Learn More</button>
</main>
<footer className="w-full h-16 bg-gray-200 flex items-center justify-center">
  <p>&copy; 2023 My Website</p>
</footer>
</div>
   */
//   );
// }






























