// eslint-disable-next-line no-unused-vars
import MyComponent from "./MyComponent"
import Counter from "./Counter"
// React hook = Special function that allows functional components
//              to user React features without writing class components (React v16.8)
//              (userState, userEffect, useContext, userReducer, userCallback and more...)

// useState() = a React hook that allows the creation of a stateful variable 
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName] = useState("Joonbie")

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
