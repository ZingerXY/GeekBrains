import { List } from '@material-ui/core';
import { ChatItem } from '../ChatItem';
import { useState } from 'react';

export const ChatList = () => {
	const [chatList, setChatList] = useState([
		{
			id: 'uniqueString1',
			name: 'Home'
		},
		{
			id: 'uniqueString2',
			name: 'Bank'
		},
	]);

	return (
		<List>
			<ChatItem chatList={chatList}/>
		</List>
	);
}
