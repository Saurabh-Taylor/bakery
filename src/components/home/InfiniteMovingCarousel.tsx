import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import cakeImage from "@/../public/home/cakeImage.jpg"
import cupCakeImage from "@/../public/home/cupCakeImage.jpg"


const items = [
    {
        id: 1,
        quote: "string",
        name: "string",
        title: "string",
        src: cakeImage
    },
    {
        id: 2,
        quote: "string",
        name: "string",
        title: "string",
        src: cupCakeImage
    },
    {
        id: 3,
        quote: "string",
        name: "string",
        title: "string",
        src: cakeImage
    },
    {
        id: 4,
        quote: "string",
        name: "string",
        title: "string",
        src: cupCakeImage
    },
    {
        id: 5,
        quote: "string",
        name: "string",
        title: "string",
        src: cakeImage
    },
    {
        id: 6,
        quote: "string",
        name: "string",
        title: "string",
        src: cupCakeImage
    },
    {
        id: 7,
        quote: "string",
        name: "string",
        title: "string",
        src: cakeImage
    },
    {
        id: 8,
        quote: "string",
        name: "string",
        title: "string",
        src: cakeImage
    },
]



function InfiniteMovingCarousel() {
    return (
        <div className='max-w-InfiniteMaxWidth my-5 p-defaultPadding m-auto'>
            <InfiniteMovingCards items={items} />
        </div>
    )
}

export default InfiniteMovingCarousel