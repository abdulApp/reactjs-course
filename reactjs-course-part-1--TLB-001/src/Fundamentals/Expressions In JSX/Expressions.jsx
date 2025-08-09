import React from 'react'

const Expressions = () => {
    const name = 'Abdulrahman Alamoudi';
    const multiply = (a, b) => a * b;
    const specialClass = 'simple-class';
  return (
    <section>
        <p>2 + 2 = {2 + 2}</p>
        <h1>{name}</h1>
        <p>2 * 2 = {multiply(2, 2)}</p>
        <p className={specialClass}>This is special class "open the inspect to see the class"</p>
    </section>
  )
}

export default Expressions