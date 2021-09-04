import { ADD_CHAT, REMOVE_CHAT } from "./actions";

const initialChats = {
	chats: [
		{
			id: 1,
			name: 'Home',
		},
		{
			id: 2,
			name: 'Bank',
		},
		{
			id: 3,
			name: 'Market',
		}
	],
}

const filterById = (targetId) => ({id}) => targetId !== id;

const getMaxId = (chats) => chats.reduce((n, e) => e.id > n ? e.id : n, 0)

export const chatsReducer = (state = initialChats, action) => {
	switch (action.type) {
		case ADD_CHAT: {
			const chat = action.payload;
			chat.id = getMaxId(state.chats) + 1;
			return {
				chats: [
					...state.chats,
					chat,
				]
			}
		}
		case REMOVE_CHAT: {
			const chatId = action.payload;
			return {
				chats: state.chats.filter(filterById(chatId)),
			};
		}
		default: {
			return state;
		}
	}
}