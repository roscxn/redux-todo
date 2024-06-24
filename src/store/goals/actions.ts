import { Goal, ADD_GOAL } from "./types"

export function addGoal(goal: Goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}
