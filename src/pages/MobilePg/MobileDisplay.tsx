import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Todo } from "../../store/todos/types"
import SimpleContainer from "../../components/SimpleContainer/SimpleContainer"

const MobileDisplay = () => {
  const todos = useSelector((state: RootState) => state.todos)

  return (
    <div>
      {todos.todos.length === 0 ? (
        <h3>No task found </h3>
      ) : (
        todos.todos.map((todo: Todo) => (
          <SimpleContainer key={todo.id}>{todo.task}</SimpleContainer>
        ))
      )}
    </div>
  )
}

export default MobileDisplay
