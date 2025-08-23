
import { Component } from 'react'
import './App.css'
import Greeting from './Fundamentals/Components/Greeting'
import ConditionalRendering from './Fundamentals/ConditionalRendering/ConditionalRendering'
import Embedding from './Fundamentals/Embedding Dynamic Content/Embedding'
import ProductInfo from './Fundamentals/Embedding Dynamic Content/ProductInfo'
import Events from './Fundamentals/Events/Events'
import Move from './Fundamentals/Events/Move'
import Expressions from './Fundamentals/Expressions In JSX/Expressions'
import JSX from './Fundamentals/JSX/JSX'
import WelcomeMessage from './Fundamentals/JSX/WelcomeMessage'
import Lists from './Fundamentals/Lists/Lists'
import Props from './Fundamentals/props/Props'
import PropsChildren from './Fundamentals/PropsChildren/PropsChildren'
import CopyInput from './Portal/CopyInput'
import Usestate from './State&Hooks/usestate'
import UseEffect from './UseEffect/UseEffect'
import ComponentA from './Props/ComponentA'
import Context from './ContextAPI/Context'
import UseContext from './UseContext/UseContext'
import UseReducer from './UseReducer/UseReducer'

function App() {
  // const name = "Abdul"

  return (
    <>
      {/* <Greeting /> */}
      {/* <JSX /> */}
      {/* <WelcomeMessage /> */}
      {/* <Expressions /> */}
      {/* <Embedding /> */}
      {/* <ProductInfo /> */}
      {/* <Lists /> */}
      {/* <Props  name={"Abdul"}/>
      <PropsChildren>
        <h1>Hello</h1>
      </PropsChildren> */}
      {/* <ConditionalRendering isValid={true} /> */}
      {/* <Events /> */}
      {/* <Move /> */}
      {/* <Usestate /> */}
      {/* <CopyInput /> */}
      {/* <UseEffect /> */}
      {/* <Context /> */}
      {/* <UseContext /> */}
      {/* <ComponentA name={name} /> */}
      <UseReducer />
    </>
  )
}

export default App
