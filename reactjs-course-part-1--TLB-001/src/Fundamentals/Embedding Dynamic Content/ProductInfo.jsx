import React from 'react'

const ProductInfo = () => {
    const product = {
        name: 'Laptop',
        price: 999.99,
        inStock: true,
        description: 'A high-performance laptop for all your computing needs.',
        releaseDate: new Date('2023-01-01'),
        ratings: 4.5
    
    };
  return (
    <div>
        <h1>{product.name}</h1>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
        <p>{product.description}</p>
        <p>Release Date: {product.releaseDate.toLocaleDateString()}</p>
        <p>Ratings: {product.ratings} stars</p>
        <p>Current Date: {new Date().toLocaleDateString()}</p>
        <p>Current Time: {new Date().toLocaleTimeString()}</p>
        <p>Current Year: {new Date().getFullYear()}</p>
    </div>
  )
}

export default ProductInfo