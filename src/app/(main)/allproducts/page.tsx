import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'


const OurProductItems = [
  {
    id: 1,
    title: "Cakes",
    description: "22+ varieties",
    link: `/allproducts/cake`,
    imageUrl: "/allImage/cake.png"
  },
  {
    id: 2,
    title: "savories",
    description: "10+ varieties",
    link: "/allproducts/savories",
    imageUrl: "/allImage/savories.png"
  },
  {
    id: 3,
    title: "cup cake",
    description: "50+ varieties",
    link: "/allproducts/cupCake",
    imageUrl: "/allImage/cupCake.png"
  },
  {
    id: 4,
    title: "namkin",
    description: "20+ Namkin",
    link: "/allproducts/namkin",
    imageUrl: "/allImage/namkin.png"
  },
  {
    id: 5,
    title: "sweet",
    description: "5+ sweet",
    link: "/allproducts/sweet",
    imageUrl: "/allImage/sweet.png"
  },
  {
    id: 6,
    title: "cookies",
    description: "5+ varieties",
    link: "/allproducts/cookies",
    imageUrl: "/allImage/cookies.png"
  },
  {
    id: 7,
    title: "cream roll",
    description: "5+ varieties",
    link: "/cake",
    imageUrl: "/allImage/crimRoles.jpg"
  },
  {
    id: 8,
    title: "Rusk",
    description: "5+ varieties",
    link: "/cake",
    imageUrl: "/allImage/rusk.png"
  },
]

function page() {
  return (
    <div className=' max-w-defaultWidth p-defaultPadding m-auto '>
      <div className=' w-full mb-5 flex flex-col justify-center items-center' >
        <h1 className='text-textTitle text-center text-headingSize font-bold'>
          All Product
        </h1>
        <div className='border-t-4 border-borderHaddingColour w-[10%] h-[10px]' ></div>
      </div>
      <div>
        <HoverEffect items={OurProductItems} />
      </div>
      {/* <div className=' max-w-defaultWidth p-defaultPadding m-auto ' >Home</div> */}
    </div>
  )
}

export default page