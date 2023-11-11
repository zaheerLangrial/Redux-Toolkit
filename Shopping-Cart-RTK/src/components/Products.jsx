import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

function Products() {
    const products = useSelector(state => state.products)
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
        <ul className=' grid grid-cols-4 gap-5 mt-5'>
            {
                products.map((product) => {
                    return(
                        <Card key={product.id} product={product} />
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Products