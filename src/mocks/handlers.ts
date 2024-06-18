// second: https://mswjs.io/docs/getting-started

import { http, HttpResponse } from "msw"
import { mockGetUsersList } from "./MockResponses"

const LOCAL_BE = "http://localhost:8081"

export const handlers = [
  http.get(`${LOCAL_BE}/users`, () => {
    return HttpResponse.json({ mockGetUsersList })
  }),
]
