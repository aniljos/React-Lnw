import Counter from "./components/Counter"
import Message from "./components/Message"


function App() {
 
  return (
    <div>
      <h3>React Application</h3>

      {/* <Message text="Hello React" color="blue"/>
      <Message text="Hello Vite" color="green"/> */}
      
      <Counter initialCount={5}/>
      {/* <Counter initialCount={10}/> */}
    </div>
  )
}

export default App
