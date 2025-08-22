import React, { createContext } from 'react'
import ComponentB from '../Props/ComponentB';

export const Data = createContext();

const Context = () => {
    const name = "Abdul"
  return (
    <div>
        <Data.Provider value={name}>
            <ComponentB />
        </Data.Provider>
    </div>
  )
}

export default Context