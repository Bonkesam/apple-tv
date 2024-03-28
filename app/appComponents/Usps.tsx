'use client';
import React from 'react'
import PageContainer from './Container';
import FadeIn from './FadeIn';

const Usps = () => {
  return (
    <PageContainer className='text-4xl font-bold space-y-12 text-white max-w-[692px] py-36 z-10 relative'>
        <FadeIn>
            <p>New Apple originals every month- always ad free</p>
        </FadeIn>
        <FadeIn>
            <p> Stream on the appleTv app on apple devices, smart tv, consoles and sticks </p>
        </FadeIn>
        <FadeIn>
            <p>Watch in 4K HDR Video with immersive spatial Audio</p>
        </FadeIn>
        <FadeIn>
            <p>Share a single subscription with up to five people</p>
        </FadeIn>
    </PageContainer>
  )
}

export default Usps;
