import { useDispatch } from "react-redux"
import { ButtonDelete } from "./DeleteTodos.style"
import { deleteTodo } from "../../store/todos/actions"

const DeleteTodos = ({ todoId }: { todoId: number }) => {
  const dispatch = useDispatch()

  const handleDeleteTask = (todoId: number) => {
    try {
      dispatch(deleteTodo(todoId))
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <ButtonDelete
      onClick={() => {
        handleDeleteTask(todoId)
      }}
    >
      X
    </ButtonDelete>
  )
}

export default DeleteTodos
