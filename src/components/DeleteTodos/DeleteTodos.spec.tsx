// import { render, fireEvent } from '@testing-library/react';
// import DeleteTodos from './DeleteTodos';
// import { Provider } from 'react-redux';
// import store from '../../store';

// describe('DeleteTodos', () => {
//   it('Should call onClick handler when delete button is clicked', () => {
//     const mockedOnClick = jest.fn();

//     const { getByText } = render(
//       <Provider store={store}>
//         <DeleteTodos todoId={1} />
//       </Provider>
//     );

//     const buttonDelete = getByText('X');
//     fireEvent.click(buttonDelete);

//     expect(mockedOnClick).toHaveBeenCalled();
//   });
// });

import { render, fireEvent } from '@testing-library/react';
import DeleteTodos from './DeleteTodos';
import { Provider } from 'react-redux';
import store from '../../store';

// Mock useDispatch from react-redux
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('DeleteTodos', () => {
  it('Should dispatch deleteTodo action when delete button is clicked', () => {
    const mockDispatch = jest.fn(); 
		
		// Mock dispatch function
    require('react-redux').useDispatch.mockReturnValue(mockDispatch); 
		
		// Set up the useDispatch mock to return the mock dispatch function

    const { getByText } = render(
      <Provider store={store}>
        <DeleteTodos todoId={1} />
      </Provider>
    );

    const buttonDelete = getByText('X');
    fireEvent.click(buttonDelete);

    // Check if the deleteTodo action is dispatched with the correct todoId
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'DELETE_TODO', todoId: 1 });
  });
});

