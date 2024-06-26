import Link from 'next/link';
import React from 'react'
import PageContainer from './Container';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
        
        <header className='bg-backgroundContrast relative z-20 text-white'>
            <PageContainer className="flex items-center min-h-[--header-row-height]" >
                <Link href="/" className='-ml-6 h-[--header-row-height] flex items-center px-6 text-xl'> <span className='sr-only'>Back to home page</span> 🌍</Link>
            </PageContainer>
        </header>
    
    
        <div className="bg-backgroundContrast sticky top-0 text-white z-20">
            <PageContainer className='flex justify-between items-center min-h-[--header-row-height]'>
                <p className='text-xl font-semibold font-sans'>Smart Tv</p>
                <div>
                    <Button className='bg-white text-black rounded-full' size="sm" variant={'outline'}>Stream now</Button>
                </div>
            </PageContainer>
        </div>
        
    </>
  )
}

export default Header;
