import { access } from "fs";
import { useState } from "react";
import { useEffect } from "react";




const [getToken,setGetToken] = useState()






const storeToken = (value:string) => {
    if (value) {
        // console.log("Store Token")
        const refresh:string  = value
        const access:string = value
        localStorage.setItem('access_token', JSON.stringify(access))
        localStorage.setItem('refresh_token', JSON.stringify(refresh))
      }
    }





useEffect(() => {


//      const storeToken = (value:string) => {
//      if (value) {
//        // console.log("Store Token")
//        const { access, refresh } = value
//         setCart(localStorage.getItem('access_token', JSON.stringify(access))),
//         setCart(localStorage.setItem('refresh_token', JSON.stringify(refresh)))
//      }
//    }



   if (localStorage.getItem("access_token") && (localStorage.getItem("refresh_token") )) {
      
    setGetToken(JSON.parse(localStorage.getItem("access_token") || " ") )
    setGetToken(JSON.parse(localStorage.getItem("refresh_token") || " ") )

   // const pl = (localStorage.getItem("name"));
 }
}, [])



//   export { storeToken, getToken, removeToken }




// const storeToken = (value) => {
//     if (value) {
//       // console.log("Store Token")
//       const { access, refresh } = value
//       localStorage.setItem('access_token', access)
//       localStorage.setItem('refresh_token', refresh)
//     }
//   }
  
//   const getToken = () => {
//     let access_token = localStorage.getItem('access_token')
//     let refresh_token = localStorage.getItem('refresh_token')
//     return { access_token, refresh_token }
//   }
  
//   const removeToken = () => {
//     localStorage.removeItem('access_token')
//     localStorage.removeItem('refresh_token')
//   }
  
  export { storeToken, getToken }