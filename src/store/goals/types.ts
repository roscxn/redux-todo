export interface Goal {
  _id: string
  goal: string
  deadline: string
}

export interface GoalState {
  goals: Goal[]
}

export const ADD_GOAL = "ADD_GOAL"

interface AddGoalAction {
  type: typeof ADD_GOAL
  goal: Goal
}

export type GoalActionTypes = AddGoalAction
