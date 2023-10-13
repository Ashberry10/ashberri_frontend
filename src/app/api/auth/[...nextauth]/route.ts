




// "use client"

// import { BASE_URL } from "../../../../../api_constants";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         // username: { label: "Username", type: "text", placeholder: "jsmith" },
//         // password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const {email,password } = credentials as any;
//         const res = await fetch(BASE_URL +'/account/login/', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
    

//         body: JSON.stringify({
//             email,
//             password,
//                 })
//         });
//         const user = await res.json();

//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],


//           callbacks: {
//           async jwt({ token, user }) {
//             return { ...token, ...user };
//           },
//           async session({ session, token, user }) {
//             session.user = token as any;
//             return session;
//           },
          
//         },
//   pages: {
//     signIn: "/signin",
//   },
// });







// import CredentialsProvider from "next-auth/providers/credentials";
// // import handler from '../../../store/slices/hello';
// // import { signOut } from 'next-auth/react';
// import NextAuth,{NextAuthOptions} from "next-auth"
// // import { BASE_URL } from "../../../../../api_constants";

// const authOptions:NextAuthOptions={


//   providers: [
//         CredentialsProvider({
//           name: "Credentials",
    
//           credentials: {
//             email: { label: "Email", type: "text", placeholder: "Enter Email" },
//             password: { label: "Password", type: "password" },
//           },
//           async authorize(credentials) {
    
    
    
//               if (!credentials || !credentials.email || !credentials.password) 
//                 return null;
           
//                 const user = users.find((item) => item.email === credentials?.email)
//                 if (user?.password === credentials?.password) {
//                   return user;
             
//                 } 
//                 return null;
//                         }
//                       }),
//       ],
//     }



// const handler = NextAuth(authOptions)
// export {handler as GET,handler as POST}




// final




import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };