import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../store"
import DisplayTodos from "./DisplayTodos"

describe("DisplayTodo", () => {
  it("Should render todo list correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <DisplayTodos />
      </Provider>
    )

    expect(getByText("Buy a new gaming laptop")).toBeTruthy()
    expect(getByText("Complete a previous task")).toBeTruthy()
  })
})
