import React from 'react'
import PageContainer from './Container';
import { Button } from '@/components/ui/button';
import Image from "next/image";

const Hero = () => {
  return (
    <div className='relative h-[300vh] bg-mainbackground text-white'>
        <div className='absolute top-0 left-o w-full'>
            <Image
                src="/hero-bg.jpg"
                alt="Hero Background"
                width={1920}
                height={1080}
            />
        </div>
        <PageContainer className='relative z-10 min-h-[--hero-height] flex flex-col justify-end items-start'>
            <h1 className='text-5xl font-bold py-6'>All Smart TV originals.<br/> only on Smart TV+</h1>
            <Button size="lg" variant="outline" className='rounded-full mb-16'>
                Stream now
            </Button>
            <p className='font-semibold'>Wath on the 📺Tv app.</p>
        </PageContainer>
    </div>
  )
}

export default Hero;
