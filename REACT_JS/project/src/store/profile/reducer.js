import { TOGGLE_CHECKBOX } from "./actions";

const initialState = {
	checkBox: false
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case TOGGLE_CHECKBOX: {
			return {
				checkBox: !state.checkBox
			};
		}

		default: {
			return state;
		}
	}
}