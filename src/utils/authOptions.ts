import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { BASE_URL } from "../../api_constants";
export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
    //   authorize(credentials, req) {
    //     // Perform database operations

    //     if (
    //       credentials?.email === "admin@example.com" &&
    //       credentials.password === "admin"
    //     ) {
    //       return {
    //         id: "1",
    //         email: "admin@example.com",
    //       };
    //     }

    //     return null;
    //   },




      async authorize(credentials, req) {
        const {email,password } = credentials as any;

        const res = await fetch(BASE_URL+'/account/login/', {
          

          // const res = await fetch('http://ashberri.in:8000/account/login/', {




  
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
        })
    })
    const user = await res.json();
    if (res.ok && user) {
      return user;
    } else{
    return null;
        }
      },
    }),
  ],
          callbacks: {
          async jwt({ token, user }) {
            return { ...token, ...user };
          },
          async session({ session, token, user }) {
            session.user = token as any;
            return session;
          },
          
        },
  pages: {
    signIn: "/login",
    signOut:"/login"
  },
};


