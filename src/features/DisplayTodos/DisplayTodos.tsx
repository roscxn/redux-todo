const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Todo } from "../../store/todos/types"
import SimpleContainer from "../../components/SimpleContainer/SimpleContainer"
import { RootState } from "../../store"

const DisplayTodos = () => {
  const todos = useSelector((state: RootState) => state.todos)

  const [display, setDisplay] = useState([])

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}/api/v1/todos`)
      .then((response) => response.json())
      .then((data) => {
        setDisplay(data)
      })
  }, [todos])

  return (
    <div>
      {display.length === 0 ? (
        <h3>No task found</h3>
      ) : (
        display.map((todo: Todo) => (
          <SimpleContainer key={todo._id}>{todo.task}</SimpleContainer>
        ))
      )}
    </div>
  )
}

export default DisplayTodos
