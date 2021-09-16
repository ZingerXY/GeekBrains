
export const getData = (state) => state.data;
export const getDataLoading = (state) => getData(state).isLoading;
export const getDataError = (state) => getData(state).error;
export const getDataData = (state) => getData(state).data;

export const dataSelectors = {
	getData,
	getDataLoading,
	getDataError,
	getDataData,
}