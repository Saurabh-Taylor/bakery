import React from 'react'

async function SingleProduct({ params }: { params: { cookiesId: string } }) {
    const paramsId = await (params).cookiesId
    return (
        <div>{paramsId}</div>
    )
}

export default SingleProduct