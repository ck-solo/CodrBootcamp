import React from 'react'
import ProductCard from '../components/ProductCard'

function CartPage({cart}) {

    
  return (
    <div className=' flex flex-wrap gap-4'>
    { cart.map((elem)=>{
        return <ProductCard key={elem.id} elem={elem} />
    })   }
    </div>
  )
}

export default CartPage