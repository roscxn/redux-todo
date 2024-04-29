import { render } from "@testing-library/react";
import DeleteTodos from "./DeleteTodos";
import { Provider } from "react-redux";
import store from "../../store";

describe("DeleteTodos", () => {
  it("Should call onClick handler when delete button is click", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <DeleteTodos todoId={1}/>
      </Provider>
    );

  const buttonDelete = getByRole("button");
  expect(buttonDelete).toHaveBeenCalled
  });
});
