

"use client";


import React from 'react'
import { Provider } from "react-redux";
import { store } from "../store/store";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Provider store={store}>{children}</Provider>
    </>
  )
}

export default Providers









// "use client";

// import React from "react";
// import { SessionProvider } from "next-auth/react";

// interface Props {
//   children?: React.ReactNode;
// }

// export default function NextAuthSessionProvider({ children }: Props) {
//   return <SessionProvider>{children}</SessionProvider>;
// }