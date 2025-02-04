import Image from "next/image";

export default function HeaderText() {
    return (
      <div className="w-full max-w-[1200px] mx-auto px-4 py-8">
        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(./awardspage-main-image.png)",
            }}
          />
          <div className="relative h-full flex items-center justify-center px-8">
            <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-medium max-w-3xl">
              Our customers' satisfaction is the biggest achievement that we have received.
            </h2>
          </div>
          
        </div>
        {/* <div className="absolute right-24 top-40 z-50">
          <Image alt="balloon and cup" src="/ballon-1.png" width={50} height={50} className="object-contain" />
        </div> */}
      </div>
    )
  }
  
  