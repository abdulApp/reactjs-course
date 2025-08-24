import React, { useRef } from 'react'

const UseRef = () => {
    const inputElement = useRef(null);
    console.log("element: ", inputElement);
    
  return (
    <div>
        <input ref={inputElement} type="text" />
        <button onClick={() => inputElement.current.focus()}>Focus Input</button>
    </div>
  )
}

export default UseRef