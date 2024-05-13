import { useDispatch } from "react-redux"
import { CheckboxInput } from "./TodoCheckbox.style"
import { setTodoCompleted } from "../../store/todos/actions"

const TodoCheckbox = ({
  todoId,
  isCompleted,
}: {
  todoId: number
  isCompleted: boolean
}) => {
  const dispatch = useDispatch()

  const handleChangeCheckBox = () => {
    try {
      dispatch(setTodoCompleted(todoId, !isCompleted))
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <CheckboxInput
      type="checkbox"
      onChange={handleChangeCheckBox}
      checked={isCompleted}
    />
  )
}

export default TodoCheckbox
