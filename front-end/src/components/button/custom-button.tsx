import React from 'react';
import { twMerge } from 'tailwind-merge'
import Link from 'next/link';

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  useA?: boolean;
}

export const CustomButton = (props: CustomButtonProps) => {
  const {  children, href, className, onClick , disabled=false, useA=false} = props;

  let buttonClasses = twMerge([
    'text-base font-medium px-2 py-2 md:px-4 md:py-3 md:text-lg cursor-pointer',
    'rounded bg-indigo-600 text-yellow-300 w-fit h-fit flex justify-center md:inline md:justify-normal',
    className,
    disabled?"text-gray-400 bg-gray-700":"",
  ]);

  if(disabled){
    return <div className={buttonClasses}>
      {children}
    </div>
  }

  if(!href){
    return <div onClick={onClick || undefined} className={buttonClasses}>
      {children}
    </div>
  }

  if(useA){
    return (
      <a onClick={onClick || undefined} href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }
  

  return (
    <Link onClick={onClick || undefined} href={href} className={buttonClasses}>
      {children}
    </Link>
  );
};