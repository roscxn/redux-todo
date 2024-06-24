const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import moment from "moment"

import { Todo } from "../../store/todos/types"
import { TodoState } from "../../store/todos/types"

import SimpleContainer from "../../components/SimpleContainer/SimpleContainer"
import { Box } from "@mui/material"

const DisplayTodos = () => {
  const todos = useSelector((state: TodoState) => state.todos)

  const [displayTodos, setDisplayTodos] = useState([])

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}/api/v1/todos`)
      .then((response) => response.json())
      .then((data) => {
        setDisplayTodos(data)
        console.log("todos", data)
        console.log("displaytodos []", displayTodos)
      })
  }, [todos])

  return (
    <div>
      <Box component="h2" sx={{ ml: 2 }}>
        Todos List
      </Box>
      {displayTodos.length === 0 ? (
        <h3>No task found</h3>
      ) : (
        displayTodos.map((todo: Todo) => (
          <SimpleContainer key={todo._id}>
            <div>
              <b>Todo:</b> {todo.task}
            </div>
            <div>
              <b>Status:</b>{" "}
              {todo.completed === false ? "Not Completed" : "Completed"}
            </div>

            <span>
              <b>Created at:</b>{" "}
              {moment(todo.createdAt).format("DD MMM YYYY, HH:MM:SS a")}{" "}
            </span>
          </SimpleContainer>
        ))
      )}
    </div>
  )
}

export default DisplayTodos
