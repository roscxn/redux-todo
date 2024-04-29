import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import AddTodos from "./AddTodos";
import store from "../../store";

describe("AddTodos", () => {
  it("Render input textbox", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <AddTodos />
      </Provider>
    );

    fireEvent.change(getByPlaceholderText("Add your new todo"), {
      target: { value: "Buy Groceries" },
    });

    const inputElement = getByPlaceholderText(
      "Add your new todo"
    ) as HTMLInputElement;

    expect(inputElement.value).toBe("Buy Groceries");
  });

  it("Should call onClick handler when button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <AddTodos />
      </Provider>
    );
    const submitButton = getByText("+");
    fireEvent.click(submitButton);

    })
  })
