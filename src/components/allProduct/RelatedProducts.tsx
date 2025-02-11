import Image from "next/image"
import Link from "next/link"

const relatedProducts = [
    {
        id: 1,
        name: "Butterscotch Cake",
        price: "$ 20.00",
        image:"/allImage/butterscotchcake.png",

    },
    {
        id: 2,
        name: "Fruit Cake",
        price: "$ 20.00",
        image: "/allImage/fruitCake.png",

    },
    {
        id: 3,
        name: "Rusk",
        price: "$ 20.00",
        image: "/allImage/rusk.png",

    },
    {
        id: 4,
        name: "Wadding Cake",
        price: "$ 20.00",
        image: "/allImage/waddingCake.png",

    },
]

export function RelatedProducts() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`} className="group">
                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium">{product.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">From {product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

