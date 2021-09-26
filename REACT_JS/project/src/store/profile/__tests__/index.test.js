import {initialState, profileReducer} from "../reducer";

describe('profileReducer', () => {

	it('вызов редьюсера без экшена вернет initialState', () => {

		const result = profileReducer();

		expect(result).toEqual(initialState);
	});

})