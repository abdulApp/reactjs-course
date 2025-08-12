import React from 'react'

const Events = () => {
    const copyHandler = () => {
        console.log('Text copied!');
    }
  return (
    <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatum qui odit obcaecati nisi ab praesentium ratione natus est, sunt, quo possimus magnam necessitatibus dolorum vel facere id, quis iusto.
    </p>
  )
}

export default Events