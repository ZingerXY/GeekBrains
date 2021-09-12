export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';

export const createAddMessage = (message) => ({
	type: ADD_MESSAGE,
	payload: message,
})

export const createRemoveMessages = (chatId) => ({
	type: REMOVE_MESSAGES,
	payload: chatId,
})

const AUTHORS = {
	BOT: 'Bot',
	ME: 'You',
}

const createMessage = (chatId, author, text) => {
	const date = Date.now();
	return {
		chatId,
		author,
		text,
		date,
	}
};

export const addMessageWithThunk = (chatId, textMessage) => (dispatch, getState) => {
	const message = createMessage(chatId, AUTHORS.ME, textMessage);
	dispatch(createAddMessage(message));
	if (message.author !== AUTHORS.BOT) {
		const botMessage = createMessage(chatId, AUTHORS.BOT, 'Hello!');;
		setTimeout(() => dispatch(createAddMessage(botMessage)), 2000);
	}
}
