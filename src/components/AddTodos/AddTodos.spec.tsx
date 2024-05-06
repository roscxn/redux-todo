import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddTodos from './AddTodos';
import store from '../../store';
import { addTodo } from '../../store/todos/actions';

describe('AddTodos', () => {
  it('Should add a new todo when submit button is called', () => {
    
    const mockedDispatch = jest.spyOn(store, 'dispatch');

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <AddTodos />
      </Provider>
    );

    fireEvent.change(getByPlaceholderText('Add your new todo'), {
      target: { value: 'Buy Groceries' },
    });

    const inputElement = getByPlaceholderText(
      'Add your new todo'
    ) as HTMLInputElement;

    expect(inputElement.value).toBe('Buy Groceries');

    const submitButton = getByText('+');

    fireEvent.click(submitButton);

    expect(mockedDispatch).toHaveBeenCalledWith(
      addTodo({
        id: expect.any(Number),
        task: 'Buy Groceries',
        completed: false,
      })
    );
  });
});
