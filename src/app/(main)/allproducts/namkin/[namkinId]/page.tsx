import React from 'react'

async function SingleProduct({ params }: { params: { namkinId: string } }) {
    const paramsId = await (params).namkinId
    return (
        <div>{paramsId}</div>
    )
}

export default SingleProduct