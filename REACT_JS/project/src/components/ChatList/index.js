import { List, TextField, Button, IconButton } from '@material-ui/core';
import { ChatItem } from '../ChatItem';
import { useState } from 'react';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export const ChatList = ({chats, onRemove, addChat}) => {
	const [chatName, setChatName] = useState('');

	const onChange = (event) => {
		setChatName(event.target.value);
	}

	const addNewChat = () => {
		if (!chatName) return;
		addChat(chatName);
		setChatName("");
	}

	return (
		<List>
			<ChatItem chatList={chats} onRemove={onRemove}/>
			<TextField value={chatName} onChange={onChange} label="Name new chat" />
			{/* <Button variant="contained" onClick={addNewChat}>Add</Button> */}
			<IconButton onClick={addNewChat} aria-label="delete">
				<ControlPointIcon />
			</IconButton>
		</List>
	);
}
