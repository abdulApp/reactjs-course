import React from 'react'

const Embedding = () => {
    const greet = 'Hello, World!';
    const date = new Date().toLocaleDateString();
  return (
    <div>
        <h1>{greet}</h1>
        <p>Date: {date}</p>
    </div>
  )
}

export default Embedding