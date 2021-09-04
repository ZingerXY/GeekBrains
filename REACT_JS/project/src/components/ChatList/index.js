import propTypes from 'prop-types';
import { ChatItem } from '../ChatItem';
import { List } from '@material-ui/core';
import {chatsConnect} from "../../connects/chats";
import { CreateChatsForm } from '../CreateChatsForm';

export const ChatListRender = ({ chats, removeChat }) => {
	return (
		<List>
			{
				chats.map(({id, name}) =>
					<ChatItem key={id} id={id} name={name} removeChat={removeChat}/>
				)
			}
			<CreateChatsForm/>
		</List>
	);
}

ChatListRender.propTypes = {
	chats: propTypes.arrayOf(propTypes.shape({
		id: propTypes.number,
		name: propTypes.string,
	})),
	addChat: propTypes.func,
	removeChat: propTypes.func,
}

export const ChatList = chatsConnect(ChatListRender);
