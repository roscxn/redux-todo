import DisplayTodos from "../DisplayTodos/DisplayTodos"
import AddTodosForm from "../AddTodosForm/AddTodoForm"

const TodosPage = () => {
  return (
    <div>
      <AddTodosForm />
      <DisplayTodos />
    </div>
  )
}

export default TodosPage
