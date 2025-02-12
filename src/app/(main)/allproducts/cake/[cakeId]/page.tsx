import { ProductGallery } from '@/components/allProduct/ProductGallery'
import { ProductInfo } from '@/components/allProduct/ProductInfo'
import { RelatedProducts } from '@/components/allProduct/RelatedProducts'
import { cakeDetails, ICardDetails } from '../page'

async function SingleProduct({ params }: { params: { cakeId: string } }) {
    const { cakeId: paramsId } = await params


    const details = cakeDetails.find((details: ICardDetails) => details.id === Number(paramsId))

    return (
        <div className="mx-auto min-h-screen max-w-7xl px-4 py-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Left side - Product Gallery */}
                <div className="sticky top-8 h-fit">
                    <ProductGallery
                        images={[
                            details?.image ?? '',
                            details?.image ?? '',
                            details?.image ?? ''
                        ]}
                    />
                </div>

                {/* Right side - Product Info */}
                <div className="mt-8 lg:mt-0">
                    <ProductInfo details= {details} />
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-16">
                <RelatedProducts />
            </div>
        </div>
    )
}

export default SingleProduct