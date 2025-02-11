import React from 'react'

async function SingleProduct({ params }: { params: { creamRollId: string } }) {
    const paramsId = await (params).creamRollId
    return (
        <div>{paramsId}</div>
    )
}

export default SingleProduct