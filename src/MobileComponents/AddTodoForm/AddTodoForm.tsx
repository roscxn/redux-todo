import React, { useState } from "react"
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import {
  ErrorSubmitMessage,
  SuccessSubmitMessage,
} from "../../components/AddTodos/AddTodos.style"

import { useDispatch } from "react-redux"
import { addTodoMobile } from "../../store/todosMobile/actions"

const AddTodoForm = () => {
  const initialFormData = {
    task: "",
  }

  const [newTodoData, setNewTodoData] = useState(initialFormData)

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
      setNewTodoData({ ...newTodoData, [name]: value })
    }
  }

  const handleAddTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedTask = newTodoData.task.trim()

    if (trimmedTask.length < 3) {
      setSubmitMessage("Task length must be at least 3 characters")
      setAddSuccess(false)
      return
    }
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/todos/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoData),
      })

      if (response.ok) {
        dispatch(
          addTodoMobile({
            _id: "",
            task: newTodoData.toString(),
            completed: false,
          })
        )
        setNewTodoData(initialFormData)
        setAddSuccess(true)
        setSubmitMessage("Task added successfully.")
      } else {
        setAddSuccess(false)
      }
    } catch (error) {
      console.error("Error:", error)
      setAddSuccess(false)
      setSubmitMessage("Failed to add task.")
    }
  }

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleAddTask}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          name="task"
          value={newTodoData.task}
          onChange={handleTaskInputChange}
        />

        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Box>

      {!addSuccess ? (
        <ErrorSubmitMessage>{submitMessage}</ErrorSubmitMessage>
      ) : (
        <SuccessSubmitMessage>{submitMessage}</SuccessSubmitMessage>
      )}
    </div>
  )
}

export default AddTodoForm
