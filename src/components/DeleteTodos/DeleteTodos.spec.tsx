import { render, fireEvent } from '@testing-library/react';
import DeleteTodos from './DeleteTodos';
import { Provider } from 'react-redux';
import store from '../../store';

describe('DeleteTodos', () => {
  it('Should dispatch deleteTodo action when delete button is clicked', () => {

    const mockedDispatch = jest.spyOn(store, 'dispatch');

    const { getByText } = render(
      <Provider store={store}>
        <DeleteTodos todoId={1} />
      </Provider>
    );

    const buttonDelete = getByText('X');
    fireEvent.click(buttonDelete);

    expect(mockedDispatch).toHaveBeenCalledWith({
      type: 'DELETE_TODO',
      todoId: 1,
    });
  });
});
