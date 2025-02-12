import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import cakeImage from "@/../public/home/cakeImage.jpg"
import cupCakeImage from "@/../public/home/blueCake.jpg"


const items = [
    {
        id: 1,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/blueCake.jpg"
    },
    {
        id: 2,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/cake2.jpg"
    },
    {
        id: 3,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/cupcake.jpg"
    },
    {
        id: 4,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/donut.jpg"
    },
    {
        id: 5,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/lava-cake.jpg"
    },
    {
        id: 6,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/cupcake2.jpg"
    },
    {
        id: 7,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/fruit-cake.jpg"
    },
    {
        id: 8,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/cho-cake.jpg"
    },
    {
        id: 9,
        quote: "string",
        name: "string",
        title: "string",
        src: "/home/image-cake.jpg"
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