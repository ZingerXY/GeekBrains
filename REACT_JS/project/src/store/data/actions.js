import { ENDPOINT } from "../../api/endpoints";

export const CHANGE_DATA_LOADING = 'CHANGE_DATA_LOADING';
export const CHANGE_DATA_ERROR = 'CHANGE_DATA_ERROR';
export const CHANGE_DATA_DATA = 'CHANGE_DATA_DATA';

export const changeDataLoading = (isLoading) => ({
	type: CHANGE_DATA_LOADING,
	payload: isLoading
});
export const changeDataError = (error) => ({
	type: CHANGE_DATA_ERROR,
	payload: error
});
export const changeDataData = (data) => ({
	type: CHANGE_DATA_DATA,
	payload: data
});

export const getDataAction = () => async (dispatch) => {
	dispatch(changeDataLoading(true));
	dispatch(changeDataError(null));
	dispatch(changeDataData(null));
	
	try {
		const response = await fetch(ENDPOINT);
		const result = await response.json();
		dispatch(changeDataData(result));
	} catch (e) {
		console.dir(e);
		dispatch(changeDataError(e));
	}

	dispatch(changeDataLoading(false));
}