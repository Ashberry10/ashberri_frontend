"use client"

import React from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
interface NavlinkProps {
  href: string;
  text: string;
  activeClasses: string;
  className: string;
  icon: React.ReactNode; // Use React.ReactNode for the icon prop
}

const Sidelink: React.FC<NavlinkProps> = ({ href, text, activeClasses, className, icon }) => {
  const path = usePathname();
  const isActive = path === href;


  return (
    <Link href={href}>
      <div>
        <div className={`hover:bg-gray-200 rounded-md pl-2 py-2 flex items text-gray-600 hover:scale-105 ${isActive ? activeClasses : ''} ${className}`}>
          {icon}
          
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
};


export default Sidelink;