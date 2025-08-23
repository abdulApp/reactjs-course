import React, { useContext } from 'react'
import { Data } from '../ContextAPI/Context'

const UseContext = () => {
    const userName = useContext(Data);
  return (
    <div>
        <h1>
            My name is {userName}
        </h1>
    </div>
  )
}

export default UseContext