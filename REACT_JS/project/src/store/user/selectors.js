
export const getUser = (state) => state.user.user;
export const getIsAuth = (state) => {
	console.log(state.user);
	return state.user.user !== null;
}
