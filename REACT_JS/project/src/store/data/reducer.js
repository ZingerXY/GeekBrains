import { CHANGE_DATA_LOADING, CHANGE_DATA_ERROR, CHANGE_DATA_DATA } from ".";

const initalState = {
	isLoading: false,
	error: null,
	data: null,
}

export const dataReducer = (state = initalState, action) => {
	switch (action.type) {
		case CHANGE_DATA_LOADING:
			return {
				...state,
				isLoading: action.payload,
			}
		case CHANGE_DATA_ERROR:
			return {
				...state,
				error: action.payload,
			}
		case CHANGE_DATA_DATA:
			return {
				...state,
				data: action.payload,
			}
		default:
			return state;
	}
}