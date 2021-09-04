import {connect} from "react-redux";
import {messagesSelectors, createAddMessage} from "../../store/messages";

const mapStateToProps = (state, {chatId}) => ({
	messages: messagesSelectors.getChatMessages(state, chatId),
});

const mapDispatchToProps = (dispatch) => ({
	addMessage: (chat) => dispatch(createAddMessage(chat)),
});

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);
