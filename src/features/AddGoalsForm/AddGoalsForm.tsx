const LOCAL_BE = import.meta.env.VITE_LOCAL_BE

import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addGoal } from "../../store/goals/actions"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

import {
  SuccessSubmitMessage,
  ErrorSubmitMessage,
} from "../../components/MessageStatus/MessageStatus"

const AddGoalsForm = () => {
  const initialFormData = {
    goal: "",
  }

  const [newGoalData, setNewGoalData] = useState(initialFormData)
  const [submitMessage, setSubmitMessage] = useState("")
  const [addSuccess, setAddSuccess] = useState(false)

  const dispatch = useDispatch()

  const handleGoalInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    setSubmitMessage("")
    if (value.length > 0 && !/[a-zA-Z]/.test(value)) {
      setAddSuccess(false)
      setSubmitMessage(
        "Goal description must contain at least one alphabet character."
      )
    } else {
      setNewGoalData({ ...newGoalData, [name]: value })
    }
  }

  const handleAddGoal = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedGoal = newGoalData.goal.trim()

    if (trimmedGoal.length < 3) {
      setSubmitMessage("Goal description must be at least 3 characters")
      setAddSuccess(false)
      return
    }
    try {
      const response = await fetch(`${LOCAL_BE}/goals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGoalData),
      })

      if (response.ok) {
        dispatch(
          addGoal({
            _id: "",
            goal: newGoalData.toString(),
            deadline: "",
          })
        )
        setNewGoalData(initialFormData)
        setAddSuccess(true)
        setSubmitMessage("Goal added successfully.")
      } else {
        setAddSuccess(false)
      }
    } catch (error) {
      console.error("Error:", error)
      setAddSuccess(false)
      setSubmitMessage("Failed to add goal.")
    }
  }

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleAddGoal}
        sx={{
          "& > :not(style)": { m: 2, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="Add Goal Description"
            variant="outlined"
            name="goal"
            value={newGoalData.goal}
            onChange={handleGoalInputChange}
            sx={{ width: "70%" }}
          />

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

export default AddGoalsForm
