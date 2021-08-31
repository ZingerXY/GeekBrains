import {createStore} from 'redux';

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const createActionChangeCheckBox = (payload) => ({
	type: TOGGLE_CHECKBOX,
	payload
})

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

export const profileStore = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());