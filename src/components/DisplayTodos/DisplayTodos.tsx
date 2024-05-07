import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Todo } from '../../store/todos/types';
import { debounce } from 'lodash';
import TodoCheckbox from '../TodoCheckbox/TodoCheckbox';
import DeleteTodos from '../DeleteTodos/DeleteTodos';
import { DisplayTodoBox, LineThroughText } from './DisplayTodos.style';
import { TextBox } from '../AddTodos/AddTodos.style';
import { ButtonClearSearch } from './DisplayTodos.style';

const DisplayTodos = () => {
  const todos = useSelector((state: RootState) => state.todos);

  const [searchTodo, setSearchTodo] = useState('');

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos.todos);

  // Debounce the setSearchTodo function
  const debouncedSetSearchTodo = debounce((value: string) => {
    const filtered = todos.todos.filter((todo) =>
      todo.task.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTodos(value.length >= 3 ? filtered : todos.todos);
  }, 300);

  // Event handler for input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTodo(value);
    debouncedSetSearchTodo(value); 
  };

  const clearSearch = () => {
    setSearchTodo('');
  };

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
      <ButtonClearSearch onClick={clearSearch}>CLR</ButtonClearSearch>
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
