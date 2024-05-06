import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Todo } from '../../store/todos/types';
import TodoCheckbox from '../TodoCheckbox/TodoCheckbox';
import DeleteTodos from '../DeleteTodos/DeleteTodos';
import { DisplayTodoBox, LineThroughText } from './DisplayTodos.style';
import { TextBox } from '../AddTodos/AddTodos.style';

const DisplayTodos = () => {
  const todos = useSelector((state: RootState) => state.todos);

  const [searchTodo, setSearchTodo] = useState("");
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTodo(event.target.value);
  }

  const filteredTodos = todos.todos.filter(todo =>
    todo.task.toLowerCase().includes(searchTodo.toLowerCase())
  );

  return (
    <div>
      <TextBox
        type='text'
        name='searchTodo'
        placeholder='Search todo'
        onChange={handleSearchChange}
        value={searchTodo}
        minLength={3}
      />
      {filteredTodos.length === 0 ? (
        <h3>No task found</h3>
      ) : (
        filteredTodos.map((todo: Todo) => (
          <DisplayTodoBox key={todo.id}>
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
