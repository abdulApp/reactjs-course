import React, { useState, useEffect } from 'react'

// https://reactjs.org/docs/hooks-effect.html
// We setup useEffect hook to run some code WHEN
// 👉 Component renders for the (First Time)
// 👉 & WHENEVER it re-renders
// 👉 & some data in our component changed.
// 👉 Component re-renders (State/Props change)

const UseEffect = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("call useEffect");
        document.title = `You clicked ${value} times`;
    }, [value]); // dependency array
  return (
    <div>
        <h2>
            You clicked {value} times
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </h2>
    </div>
  )
}

export default UseEffect