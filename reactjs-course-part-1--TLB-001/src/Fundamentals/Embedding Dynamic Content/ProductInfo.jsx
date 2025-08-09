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
        <p>Current Month: {new Date().toLocaleString('default', { month: 'long' })}</p>
        <p>Current Day: {new Date().toLocaleString('default', { weekday: 'long' })}</p>
        <p>Current Hour: {new Date().getHours()}</p>
        <p>Current Minute: {new Date().getMinutes()}</p>
        <p>Current Second: {new Date().getSeconds()}</p>
        <p>Current Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
        <p>Current Locale: {navigator.language}</p>
        <p>Current User Agent: {navigator.userAgent}</p>
        <p>Current Platform: {navigator.platform}</p>
        <p>Current Screen Width: {window.screen.width}px</p>
    </div>
  )
}

export default ProductInfo