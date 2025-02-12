import React from 'react';
import homeBanner from "@/../public/home/homeBanner.jpg";
import b1 from "@/../public/b1.jpg";
import b2 from "@/../public/b2.jpg";
import b3 from "@/../public/b3.jpg";
import { FlipWords } from './FlipWords';
import { Carousel } from '../ui/carousel';



const slides = [
    {
      title: "string",
      button: "string",
      src: "/home/home-banner1.jpg",
    },
    {
      title: "string",
      button: "string",
      src: "/home/home-banner2.jpg",
    },
    {
      title: "string",
      button: "string",
      src: "/home/home-banner3.jpg",
    },
  ]
  
  const words = [" Cake", " Cupcake", " Pastry"]

function HeroPart() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 content-center items-center mb-5 max-w-defaultWidth p-defaultPadding m-auto'>
            <div className='col-span-1'>
          <FlipWords words={words} />
            </div>
            <div className='col-span-1'>
          <Carousel slides={slides} />
            </div>
        </div>
    )
}

export default HeroPart