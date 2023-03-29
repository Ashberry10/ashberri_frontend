"use client";

import "styles/globals.css";
import { ReactNode } from "react";
import Header from "./Header";
import {Providers} from "./Provider";
import { SessionProvider } from "next-auth/react";
import SignUp from './auth/signup/page';

interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
      <SessionProvider>
        <Providers>
          <Header />
          {/* <SignUp/> */}

          <div className={"  min-h-screen "}>{children}</div>
        </Providers>
     </SessionProvider>
      </body>
    </html>
  );
}



