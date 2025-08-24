import React, { useRef } from 'react'

const UseRef = () => {
    const inputElement = useRef(null);
    console.log("element: ", inputElement);
    
  return (
    <div>UseRef</div>
  )
}

export default UseRef