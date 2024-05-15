import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todos/actions"
import { Todo } from "../../store/todos/types"

import {
  TextBox,
  ButtonSubmitTask,
  ErrorSubmitMessage,
  SuccessSubmitMessage,
} from "./AddTodos.style"

const AddTodos = () => {
  const [formData, setFormData] = useState<Todo>({
    id: 0,
    task: "",
    completed: false,
  })

  const [submitMessage, setSubmitMessage] = useState("")
  const [addSuccess, setAddSuccess] = useState(false)

  const dispatch = useDispatch()

  const handleTaskInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    setSubmitMessage("")
    if (value.length > 0 && !/[a-zA-Z]/.test(value)) {
      setAddSuccess(false)
      setSubmitMessage("Task must contain at least one alphabet character.")
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const trimmedValue = formData.task.trim()
      const newTodo: Todo = {
        id: Date.now(),
        task: trimmedValue,
        completed: false,
      }
      switch (true) {
        case trimmedValue === "" || trimmedValue.length < 3:
          setFormData({ id: 0, task: "", completed: false })
          setSubmitMessage("Task length must be at least 3 characters long.")
          setAddSuccess(false)
          break

        default:
          dispatch(addTodo(newTodo))
          setFormData({ id: 0, task: "", completed: false })
          setSubmitMessage("New task added successfully.")
          setAddSuccess(true)
          break
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <TextBox
          type="text"
          placeholder="Add your new todo"
          name="task"
          value={formData.task}
          onChange={handleTaskInputChange}
          minLength={3}
          required
        />
        <ButtonSubmitTask type="submit" name="AddTodo">
          +
        </ButtonSubmitTask>
      </form>

      {!addSuccess ? (
        <ErrorSubmitMessage>{submitMessage}</ErrorSubmitMessage>
      ) : (
        <SuccessSubmitMessage>{submitMessage}</SuccessSubmitMessage>
      )}
    </div>
  )
}

export default AddTodos
