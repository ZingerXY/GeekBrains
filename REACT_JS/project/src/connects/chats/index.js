import {connect} from "react-redux";
import {chatsSelectors, createAddChat, createRemoveChat} from "../../store/chats";

const mapStateToProps = (state, {chatId}) => ({
	chats: chatsSelectors.getChats(state),
	chatIds: chatsSelectors.getChatByName(state, chatId),
})

const mapDispatchToProps = (dispatch) => ({
	addChat: (chat) => dispatch(createAddChat(chat)),
	removeChat: (chatId) => dispatch(createRemoveChat(chatId)),
})

export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);
