import React from 'react'

async function SingleProduct({ params }: { params: { savoriesId: string } }) {
    const paramsId = await (params).savoriesId
    return (
        <div>{paramsId}</div>
    )
}

export default SingleProduct