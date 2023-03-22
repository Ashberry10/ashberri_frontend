import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth,{NextAuthOptions} from "next-auth"

export const authOptions:NextAuthOptions = {
    providers:[
        // ..add more prodiver
        CredentialsProvider({
            // The Username to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, userUsername, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              Username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
            //   const user = { id: "1", Username: "J Smith", email: "jsmith@example.com" }
        
            //   if (user) {
            //     // Any object returned will be saved in `user` property of the JWT
            //     return user
            //   } else {
            //     // If you return null then an error will be displayed advising the user to check their details.
            //     return null
        
            //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            //   }
                 const {Username,password } = credentials as any;
                 const res = await fetch("http://127.0.0.1:8000/api/user/login",{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json"

                },

                body:JSON.stringify({
                  Username,
                  password,
                })
            })
            
            
            const user = await res.json();

            if (res.ok && user) {
                return user;
                
            } else return null;
            
            
           },
          })
        ],


        session:{
            strategy:"jwt"
        },
        pages:{
            signIn:"/Login"
        }
}

export default NextAuth(authOptions)