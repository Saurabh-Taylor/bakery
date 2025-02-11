import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect';

const OurProductItems = [
    {
        id: 1,
        title: "Cakes",
        description: "22+ varieties",
        link: "/cake",
        imageUrl: "/allImage/cake.png"
      },
      {
        id: 2,
        title: "savories",
        description: "10+ varieties",
        link: "/cake",
        imageUrl: "/allImage/savories.png"
      },
      {
        id: 3,
        title: "cup cake",
        description: "50+ varieties",
        link: "/cake",
        imageUrl: "/allImage/cupCake.png"
      },
      {
        id: 4,
        title: "namkin",
        description: "20+ Namkin",
        link: "/cake",
        imageUrl: "/allImage/namkin.png"
      },
      {
        id: 5,
        title: "sweet",
        description: "5+ sweet",
        link: "/cake",
        imageUrl: "/allImage/sweet.png"
      },
      {
        id: 6,
        title: "cookies",
        description: "5+ varieties",
        link: "/cake",
        imageUrl: "/allImage/cookies.png"
      },
]

function OurProduct() {
    return (
        <div className=' max-w-defaultWidth my-12 p-defaultPadding m-auto' >
            <div className=' w-auto flex flex-col justify-center items-center' >
                <h1 className='text-textTitle text-center text-headingSize font-bold'>
                    Our Product
                </h1>
                <div className='border-t-4 border-borderHaddingColour w-[10%] h-[10px]' ></div>
            </div>

            <p>  </p>
            <HoverEffect items={OurProductItems}  />
        </div>
    )
}

export default OurProduct