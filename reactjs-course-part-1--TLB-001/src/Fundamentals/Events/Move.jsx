import React from 'react'

const Move = () => {

    function moveHandler() {
        alert('Mouse move event fired!');
        console.log('Mouse move event fired!');
    }
  return (
    <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatum qui odit obcaecati nisi ab praesentium ratione natus est, sunt, quo possimus magnam necessitatibus dolorum vel facere id, quis iusto.
    </p>
  )
}

export default Move