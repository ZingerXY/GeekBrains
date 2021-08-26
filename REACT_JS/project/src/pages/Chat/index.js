import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router';

export const Chat = ({children, chats}) => {
	const { chatId } = useParams();

	if (!chats[chatId]) {
		return <Redirect to="/chats" />;
	}

	return (
		<>
			{children(chatId)}
		</>
	)
}
