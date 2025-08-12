
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

function App() {

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
      <ConditionalRendering isValid={true} />
      {/* <Events /> */}
      <Move />
    </>
  )
}

export default App
