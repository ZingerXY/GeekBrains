import { ADD_MESSAGE, REMOVE_MESSAGES } from "./actions";

const initialChats = {
	messages: {},
}

export const messagesReducer = (state = initialChats, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			const {chatId} = action.payload;

			if (state.messages.hasOwnProperty(chatId)) {
				state.messages[chatId] = [
					...state.messages[chatId],
					action.payload,
				]
			} else {
				state.messages[chatId] = [action.payload];
			}

			return {
				messages: {
					...state.messages,
				}
			}
		}
		case REMOVE_MESSAGES: {
			const chatId = action.payload;
			delete state.messages[chatId];
			return {
				messages: {
					...state.messages,
				}
			}
		}
		default: {
			return state;
		}
	}
}
