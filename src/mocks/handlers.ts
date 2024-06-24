// second: https://mswjs.io/docs/getting-started
// https://mswjs.io/docs/network-behavior/rest

import { http, HttpResponse } from "msw"
import { mockGetGoalsList } from "./MockResponses"

const LOCAL_BE = "http://localhost:8081"

export const handlers = [
  http.get(`${LOCAL_BE}/goals`, () => {
    return HttpResponse.json({ mockGetGoalsList })
  }),
  http.post(`${LOCAL_BE}/goals`, async ({ request }) => {
    const newGoal = await request.json()
    return HttpResponse.json(newGoal, { status: 201 })
  }),
]
