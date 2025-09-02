import React from 'react'

function ProductsCard({ product, onAddToCart }) {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-gray-200 rounded-xl shadow-lg hover:shadow-xl py-10 px-6">
      <img className='w-24' src={product.thumbnail} alt={product.title} />
      <h3 className='font-bold mb-6 font-bold text-xl'>{product.title}</h3>
      <p className='font-semibold mb-6 text-xl'>N{product.price}</p>
      <button className='bg-green-700 hover:bg-green-800 transition ease delay-150 text-white text-lg font-semibold py-2 px-4 rounded-lg ' onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductsCard
