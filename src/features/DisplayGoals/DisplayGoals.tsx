const LOCAL_BE = import.meta.env.VITE_LOCAL_BE

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import moment from "moment"

import { Goal } from "../../store/goals/types"
import { GoalState } from "../../store/goals/types"

import SimpleContainer from "../../components/SimpleContainer/SimpleContainer"
import { Box } from "@mui/material"

const DisplayGoals = () => {
  const goals = useSelector((state: GoalState) => state.goals)

  console.log("displaygoals tsx", goals)

  const [displayGoals, setDisplayGoals] = useState([])

  useEffect(() => {
    fetch(`${LOCAL_BE}/goals`)
      .then((response) => response.json())
      .then((data) => {
        setDisplayGoals(data.mockGetGoalsList.data)
      })
  }, [goals])

  return (
    <div>
      <Box component="h2" sx={{ ml: 2 }}>
        Goals List
      </Box>

      {displayGoals.map((goal: Goal) => (
        <SimpleContainer key={goal._id}>
          <div>Goal: {goal.goal}</div>
          <div>By: {moment(goal.deadline).format("DD MMM YYYY")}</div>
        </SimpleContainer>
      ))}
    </div>
  )
}

export default DisplayGoals
