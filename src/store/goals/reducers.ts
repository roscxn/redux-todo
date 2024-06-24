import { GoalState, ADD_GOAL, GoalActionTypes } from "./types"

const initialState: GoalState = {
  goals: [],
}

export function goalsReducer(
  state = initialState,
  action: GoalActionTypes
): GoalState {
  switch (action.type) {
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.goal],
      }
    default:
      return state
  }
}
