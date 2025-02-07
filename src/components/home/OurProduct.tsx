import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect';

const OurProductItems = [
    {
        id: 1,
        title: "string",
        description: "string",
        link: "string",
        imageUrl: "imageName"
    },
    {
        id: 2,
        title: "string",
        description: "string",
        link: "string",
        imageUrl: "imageName"
    },
    {
        id: 3,
        title: "string",
        description: "string",
        link: "string",
        imageUrl: "imageName"
    },
    {
        id: 4,
        title: "string",
        description: "string",
        link: "string",
        imageUrl: "imageName"
    },
    {
        id: 5,
        title: "string",
        description: "string",
        link: "string",
        imageUrl: "imageName"
    },
    {
        id: 6,
        title: "string",
        description: "string",
        link: "string",
        imageUrl: "imageName"
    },
]

function OurProduct() {
    return (
        <div className=' max-w-defaultWidth my-12 p-defaultPadding m-auto' >
            <h2 className='text-[#c9ada7] text-center text-headingSize font-bold ' > Our Product </h2>
            <p>  </p>
            <HoverEffect items={OurProductItems} />
        </div>
    )
}

export default OurProduct