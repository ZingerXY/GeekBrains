import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { chatsSelectors } from '../../store/chats';
import { MessageList } from "../../components/MessageList";
import { CreateMessageForm } from "../../components/CreateMessageForm";

export const Chat = () => {
	const { chatName } = useParams();
	const chatId = useSelector(chatsSelectors.getChatByName(chatName))?.id;

	if (!chatId) {
		return <Redirect to="/chats" />;
	}

	return (
		<>
			<h3>{chatName}</h3>
			<MessageList chatId={chatId}/>
			<CreateMessageForm chatId={chatId}/>
		</>
	)
}
