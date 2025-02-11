import React from 'react'

async function SingleProduct({ params }: { params: { sweetId: string } }) {
    const paramsId = await (params).sweetId
    return (
        <div>{paramsId}</div>
    )
}

export default SingleProduct