const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TodoMobile } from "../../store/todosMobile/types"
import SimpleContainer from "../../components/SimpleContainer/SimpleContainer"
import { RootState } from "../../store"

const MobileDisplay = () => {
  const todos = useSelector((state: RootState) => state.todosMobile)

  const [display, setDisplay] = useState([])

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}/api/todos`)
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
        display.map((todo: TodoMobile) => (
          <SimpleContainer key={todo._id}>{todo.task}</SimpleContainer>
        ))
      )}
    </div>
  )
}

export default MobileDisplay
