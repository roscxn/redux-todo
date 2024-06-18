const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const LOCAL_BE = import.meta.env.VITE_LOCAL_BE

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Todo } from "../../store/todos/types"
import SimpleContainer from "../../components/SimpleContainer/SimpleContainer"
import { RootState } from "../../store"
import moment from "moment"

import { usersList } from "../../mocks/MockTypes"

const DisplayTodos = () => {
  const todos = useSelector((state: RootState) => state.todos)

  const [displayTodos, setDisplayTodos] = useState([])

  const [displayUsers, setDisplayUsers] = useState([])

  useEffect(() => {
    fetch(`${VITE_BACKEND_URL}/api/v1/todos`)
      .then((response) => response.json())
      .then((data) => {
        setDisplayTodos(data)
      })
  }, [todos])

  useEffect(() => {
    fetch(`${LOCAL_BE}/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log("display users", data)
        console.log("users data", data.mockGetUsersList.data)
        setDisplayUsers(data.mockGetUsersList.data)
      })
  }, [])

  return (
    <div>
      {displayTodos.length === 0 ? (
        <h3>No task found</h3>
      ) : (
        displayTodos.map((todo: Todo) => (
          <SimpleContainer key={todo._id}>
            {todo.task}
            <br />

            <span>
              {moment(todo.createdAt).format("DD MMM YYYY, HH:MM:SS a")}{" "}
            </span>
          </SimpleContainer>
        ))
      )}

      <ul>
        {displayUsers.map((user: usersList) => (
          <li key={user.id}>
            {user.fullName}
            <br />
            {user.numberOfTasks}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayTodos
