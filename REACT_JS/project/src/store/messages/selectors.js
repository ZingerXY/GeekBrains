const getMessages = (state) => state.messages.messages || {};

const getChatMessages = (state, chatId) => getMessages(state)[chatId] || [];

export const messagesSelectors = {
	getMessages,
	getChatMessages
}
