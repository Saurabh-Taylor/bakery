import Image from 'next/image'
import React from 'react';
import world from "@/../public/home/travel-destination.gif";
import cake from "@/../public/home/Cake.gif";
import store from "@/../public/home/Bakery-shop.gif";
import cupCake from "@/../public/home/cupcake.gif";

function OurAchievement() {
    return (
        <div className='max-w-defaultWidth p-defaultPadding m-auto'>
            <h1 className='text-[#c9ada7] text-center text-headingSize font-bold mb-10'>
                Our Achievement
            </h1>
            <div className='grid grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-4 gap-4 content-center items-center' >
                <div className=" flex flex-col gap-4 justify-center items-center ">
                    <figure className="w-[100px]">
                        <Image src={world} className="attachment-full size-full wp-image-3655" alt="travel-destination" />
                    </figure>
                    <div className="text-center">
                        <h3 className=" text-[30px] ">300+</h3>
                        <p className="text-[25px] text-[#B42F3C]">Outlets Across the Globe</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-4 justify-center items-center ">
                    <figure className="w-[100px]">
                        <Image src={cake} className="attachment-full size-full wp-image-3655" alt="travel-destination" />
                    </figure>
                    <div className="text-center">
                        <h3 className=" text-[30px] ">1M+</h3>
                        <p className="text-[25px] text-[#B42F3C]">Cakes Sold Worldwide Every Month</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-4 justify-center items-center ">
                    <figure className="w-[100px]">
                        <Image src={store} className="attachment-full size-full wp-image-3655" alt="travel-destination" />
                    </figure>
                    <div className="text-center">
                        <h3 className=" text-[30px] ">3+</h3>
                        <p className="text-[25px] text-[#B42F3C]">Countries Where We Have Outlets</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-4 justify-center items-center ">
                    <figure className="w-[100px]">
                        <Image src={cupCake} className="attachment-full size-full wp-image-3655" alt="travel-destination" />
                    </figure>
                    <div className="text-center">
                        <h3 className=" text-[30px] ">1K+</h3>
                        <p className="text-[25px] text-[#B42F3C]">Varieties of products</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurAchievement