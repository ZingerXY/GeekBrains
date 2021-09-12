import {connect} from "react-redux";
import {messagesSelectors, addMessageWithThunk} from "../../store/messages";

const mapStateToProps = (state, {chatId}) => ({
	messages: messagesSelectors.getChatMessages(state, chatId),
});

const mapDispatchToProps = (dispatch) => ({
	addMessage: (chatId, textMessage) => dispatch(addMessageWithThunk(chatId, textMessage)),
});

export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);
