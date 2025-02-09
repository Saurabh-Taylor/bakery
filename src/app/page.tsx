
import HeroPart from '@/components/home/HeroPart';
import HorizontalScroll from '@/components/home/HorizontalScroll';
import InfiniteMovingCarousel from '@/components/home/InfiniteMovingCarousel';
import OurAchievement from '@/components/home/OurAchievement';
import OurPresence from '@/components/home/OurPresence';
import OurProduct from '@/components/home/OurProduct';
import VideoGrid from '@/components/home/Viedo';
import React from 'react';
import OurStory from '@/components/home/OurStory';
import CookieAnimation from '@/components/home/CookieAnimation';



function Home() {
  return (
    <>
      <HeroPart />
      <InfiniteMovingCarousel />
      <OurProduct />
      <OurStory />
      <VideoGrid />
      <OurPresence />
      <OurAchievement />

      {/* this is animation of cookies */}
      <CookieAnimation />

      {/* <div className=' max-w-defaultWidth p-defaultPadding m-auto ' >Home</div> */}
    </>
  )
}

export default Home