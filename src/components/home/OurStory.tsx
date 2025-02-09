import React from 'react'

function OurStory() {
    return (
        <div className='max-w-defaultWidth mb-9 p-defaultPadding flex flex-col gap-6 m-auto' >
            {/* <HorizontalScroll /> */}
            <h2 className='text-[#c9ada7] text-center text-headingSize font-bold ' > Our Story </h2>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 content-center items-center ' >
                <div className=' uppercase text-headingSize font-semibold '>
                    From humble beginnings <br />
                    to <span className='text-[#B12028]' > atulya parivar </span>
                </div>
                <div>
                    <span className=' font-semibold ' >
                        Once upon a time, in a cozy little store, Vili Bakery was born out of a love for spreading smiles in the year 2007.
                    </span>
                    <br />
                    <br />

                    Our founder, Vili Vekariya, believed that the secret to happiness lies in the simple pleasure of sharing freshly baked goodies with loved ones. Today, we continue to spread joy through our delectable range of artisanal breads, pastries, and cakes each crafted with love.</div>
            </div>

        </div>
    )
}

export default OurStory