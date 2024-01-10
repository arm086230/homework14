import TodoApp from "./component/TodoApp"
import { TodoContextProvider } from "../src/context/TodoContext"

function App() {
  return (
    <div className="app">
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </div>
  )
}

export default App