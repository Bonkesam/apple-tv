import React from 'react'
import { twMerge } from 'tailwind-merge';

interface containerProps {
    children: React.ReactNode;
    className?: string;
}

const PageContainer = ({children, className}: containerProps) => {
  return (
    <div className={twMerge('mx-auto max-w-[980px] px-6 pb-7', className)}>
      {children}
    </div>
  )
}

export default PageContainer;
