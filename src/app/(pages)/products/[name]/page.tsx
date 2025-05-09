import React from 'react'

async function ProductsDetails({params}:{params:Promise<{name:string}>}) {
   const { name } = await params
  return (
    <div>
        ProductsDetails
        {name}
    </div>
  )
}

export default ProductsDetails