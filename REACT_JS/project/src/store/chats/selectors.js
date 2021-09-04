const getChats = (state) => state.chats.chats || [];

const getChatByName = chatName => state => state.chats.chats.find((e) => e.name === chatName);

export const chatsSelectors = {
	getChats,
	getChatByName
}