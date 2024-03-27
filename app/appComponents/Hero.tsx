'use client';
import React, { useRef } from 'react'
import PageContainer from './Container';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {

    const videoContainerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start start", "end end"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <div className='bg-mainbackground text-white'>
        <motion.div style={{opacity}} ref={videoContainerRef} className='absolute -top-[--header-height] left-0 w-full h-[200vh]'>
            <div className='sticky top-0 h-screen w-full object-cover'>
                <Image
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    width={1920}
                    height={1080}
                    
                />
            </div>
        </motion.div>
        <PageContainer className='relative z-10 h-[--hero-height]'>
            <motion.div 
            className='flex flex-col h-full justify-end items-start'
            variants={{
                hidden: {opacity: 0, y: 20},
                vidible: {opacity: 1, y: 0},
            }}
            whileInView="visible"
            exit="hidden"
            animate="hidden"
            viewport={{ amount: 0.9}}
            
            >
                <h1 className='text-5xl font-bold py-6'>All Smart TV originals.<br/> only on Smart TV+</h1>
                <Button size="lg" variant="outline" className='rounded-full mb-16'>
                    Stream now
                </Button>
                <p className='font-semibold'>Wath on the 📺Tv app.</p>
            </motion.div>
        </PageContainer>
    </div>
  )
}

export default Hero;
