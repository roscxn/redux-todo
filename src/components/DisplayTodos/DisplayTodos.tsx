import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Todo } from "../../store/todos/types";
import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import DeleteTodos from "../DeleteTodos/DeleteTodos";
import { DisplayTodoBox, LineThroughText } from "./DisplayTodos.style";

const DisplayTodos = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div>
      {todos.todos.length === 0 ? (
        <h3>No task found</h3>
      ) : (
        todos.todos.map((todo: Todo) => (
          <DisplayTodoBox 
          key={todo.id}>
            <TodoCheckbox todoId={todo.id} isCompleted={todo.completed} />
            {todo.completed ? (
              <LineThroughText>{todo.task}</LineThroughText>
            ) : (
              <span>{todo.task}</span>
            )}
            <DeleteTodos todoId={todo.id} />
          </DisplayTodoBox>
        ))
      )}
    </div>
  );
};

export default DisplayTodos;
