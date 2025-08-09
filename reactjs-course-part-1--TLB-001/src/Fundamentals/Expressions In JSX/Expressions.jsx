import React from 'react'

const Expressions = () => {
    const name = 'Abdulrahman Alamoudi';
    const multiply = (a, b) => a * b;
  return (
    <section>
        <p>2 + 2 = {2 + 2}</p>
        <h1>{name}</h1>
        <p>2 * 2 = {multiply(2, 2)}</p>
    </section>
  )
}

export default Expressions