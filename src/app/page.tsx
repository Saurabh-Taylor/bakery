
import HeroPart from '@/components/home/HeroPart';
import HorizontalScroll from '@/components/home/HorizontalScroll';
import InfiniteMovingCarousel from '@/components/home/InfiniteMovingCarousel';
import OurProduct from '@/components/home/OurProduct';
import VideoGrid from '@/components/home/Viedo';
import React from 'react';



function Home() {
  return (
    <>
      <HeroPart />
      <InfiniteMovingCarousel />
      <OurProduct />
      <HorizontalScroll />
      <VideoGrid />
      {/* <div className=' max-w-defaultWidth p-defaultPadding m-auto ' >Home</div> */}
    </>
  )
}

export default Home