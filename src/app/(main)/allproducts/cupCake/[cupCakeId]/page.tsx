import React from 'react'

async function SingleProduct({ params }: { params: { cupCakeId: string } }) {
    const paramsId = await (params).cupCakeId
    return (
        <div>{paramsId}</div>
    )
}

export default SingleProduct