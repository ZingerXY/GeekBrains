import React from 'react'
import {render, fireEvent, act} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {CreateChatsFormPresentation, CreateChatsFormIds} from "./presentation";


describe('CreateChatsFormPresentation', () => {

	it('вызов метода onClick по клику на кнопку', () => {
		const onClick = jest.fn();
		const onChange = jest.fn();
		const name = 'test';
		const component = render(<CreateChatsFormPresentation name={name} onChange={onChange} onClick={onClick}/>)
		const button = component.queryByTestId(CreateChatsFormIds.button);
		act(() => {
			fireEvent.click(button);
		})
		expect(onClick).toBeCalled();
	});

	it('ввод данных в поле', () => {
		const testString = 'test_string';
		const onClick = jest.fn();
		const onChange = jest.fn();
		const component = render(<CreateChatsFormPresentation name={name} onChange={onChange} onClick={onClick}/>)
		const field = component.queryByTestId(CreateChatsFormIds.input);
		act(() => {
			fireEvent.change(field, {
				target: {
					value: testString,
				},
			})
		})
		expect(setFieldValue).toHaveBeenLastCalledWith('test_string', testString)
	})
})