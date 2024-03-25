import Link from 'next/link';
import React from 'react'
import PageContainer from './Container';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
        
        <header className='bg-backgroundContrast text-white'>
            <PageContainer className="flex items-center min-h-11" >
                <Link href="/" className='-ml-6 h-11 flex items-center px-6'> <span className='sr-only'>Bak to home page</span> 🌍</Link>
            </PageContainer>
        </header>
    
    
        <div className="bg-backgroundContrast  sticky top-0 text-white">
            <PageContainer className='flex justify-between items-center min-h-11 '>
                Zone+ Tv
                <div>
                    <Button className='bg-white text-black rounded-full' size="sm" variant={'outline'}>Stream now</Button>
                </div>
            </PageContainer>
        </div>
        
    </>
  )
}

export default Header;