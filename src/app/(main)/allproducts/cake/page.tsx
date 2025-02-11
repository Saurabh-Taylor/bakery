import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

export interface ICardDetails {
  id: number;
  name: string;
  price: number;
  image: string;
  link: string;
}

export const cakeDetails = [
  {
    id: 1,
    name: "chocolate cake",
    price: 20.00,
    image: "/allImage/cake.png",
    link: "/allproducts/cake/"
  },
  {
    id: 2,
    name: "red velvet cake",
    price: 24.00,
    image: "/allImage/redvelvetcake.png",
    link: "/allproducts/cake/"
  },
  {
    id: 3,
    name: "oreo cake",
    price: 20.00,
    image: "/allImage/oreoCake.png",
    link: "/allproducts/cake/"
  },
  {
    id: 4,
    name: "butter scotch cake",
    price: 20.00,
    image: "/allImage/butterscotchcake.png",
    link: "/allproducts/cake/"
  },
  {
    id: 5,
    name: "barbi Cake",
    price: 20.00,
    image: "/allImage/barbiCake.png",
    link: "/allproducts/cake/"
  },
  {
    id: 6,
    name: "wadding Cake",
    price: 20.00,
    image: "/allImage/waddingCake.png",
    link: "/allproducts/cake/"
  },
  {
    id: 7,
    name: "fruit Cake",
    price: 20.00,
    image: "/allImage/fruitCake.png",
    link: "/allproducts/cake/"
  },
];


function Cake() {
  return (
    <div className=' max-w-defaultWidth p-defaultPadding m-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {cakeDetails.map((cake: ICardDetails) => (
        <Link href={`/allproducts/cake/${cake.id}`} key={cake.id} >
          <Card className='flex flex-col hover:shadow-md hover:shadow-[#d29557] my-3 bg-[#F7EDE2] border border-black  justify-center items-center group'>
            <CardHeader className=' w-full flex justify-center items-center ' >
              <CardTitle className=' h-[200px] w-full justify-center items-center flex rounded-sm ' >
                <Image
                  src={cake.image}
                  alt={cake.name}
                  width={200}
                  height={200}
                  className='transition-transform rounded-sm object-cover h-full duration-500 group-hover:scale-110'
                />
              </CardTitle>
            </CardHeader>
            <CardContent className='flex w-full justify-start items-start flex-col gap-2'>
              <CardDescription className='capitalize text-[#e77132] text-lg font-bold'>{cake.name}</CardDescription>
              <p className='text-green-500'>$ {cake.price}</p>
            </CardContent>
          </Card>
        </Link>
      ))}

    </div>
  )
}

export default Cake