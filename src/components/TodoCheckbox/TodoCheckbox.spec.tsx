import { render, fireEvent } from '@testing-library/react';
import TodoCheckbox from './TodoCheckbox';
import { Provider } from 'react-redux';
import store from '../../store';

describe('TodoCheckbox', () => {
  it('Should change checked to be true', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <TodoCheckbox todoId={1} isCompleted={false} />
      </Provider>
    );

    const checkBoxInput = getByRole('checkbox') as HTMLInputElement;
    fireEvent.change(checkBoxInput, { target: { checked: true } });

    expect(checkBoxInput.checked).toBe(true);
  });
  
});
