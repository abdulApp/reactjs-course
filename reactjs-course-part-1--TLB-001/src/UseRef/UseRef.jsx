import React, { useRef } from 'react'

const UseRef = () => {
    const inputElement = useRef(null);
    console.log("element: ", inputElement);

    const focusInput = () => {
        // Access the input element and focus it
        inputElement.current.focus();
        inputElement.current.value = "Hello, World!";
    };
    
  return (
    <div>
        <input ref={inputElement} type="text" />
        <button onClick={() => focusInput()}>Focus Input</button>
    </div>
  )
}

export default UseRef