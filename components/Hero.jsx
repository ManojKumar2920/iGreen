import Image from 'next/image';
import React from 'react';
import Banner from '@/assets/banner.jpg'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=' grid place-items-center h-full'>
        <div className=' flex flex-col items-center justify-center w-[70%] md:w-4/5'>
            <div>
                <Image src={Banner} alt='Banner' width={700} height={400} className=' rounded-2xl'></Image>
            </div>
            <div className=' text-center'>
                <p className=' text-[26px] font-semibold py-4'>Welcome to <span className=' text-jade-600'>iGreen</span>: Where Trees Get the Recognition They Never Asked For!</p>
                <p className=' text-sm text-gray-500'>Are you tired of strolling through campus without truly appreciating the majestic flora surrounding you? Do you often find yourself wondering, "What's the deal with that tree?" Fear not, for iGreen is here to turn your arboreal ignorance into botanical brilliance!</p>
                <div className=' py-4'>
                    <Link href={'/trees'} className=' bg-jade-600 text-white py-2 px-4 rounded-md'>Explore Trees</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero