import AddTodos from "../../components/AddTodos/AddTodos";
import DisplayTodos from "../../components/DisplayTodos/DisplayTodos";
import { WebTheme, ToDoContainerBackground } from "./App.style";

function App() {
  return (
    <WebTheme>
      <ToDoContainerBackground>
        <h1>Todo App</h1>
        <AddTodos />
        <br/>
        <DisplayTodos />
      </ToDoContainerBackground>
    </WebTheme>
  );
}

export default App;