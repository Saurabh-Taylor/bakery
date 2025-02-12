import Image from 'next/image'
import React from 'react'
// import cookieImage from "@/../public/favicon.png";

function CookieAnimation() {
    return (
        <div><div className=" overflow-hidden">
            <div className="h-[50px] flex items-center relative">
                <div className="animate-move-infinite">
                    {/* <Image
                        src={cookieImage}
                        alt="Animated product"
                        className="w-full object-cover rounded-lg shadow-lg"
                    /> */}
                </div>
            </div>
        </div></div>
    )
}

export default CookieAnimation