import { useState } from "react"
import { ChatList } from "../../components/ChatList";
import { Chat } from "../Chat";
import { Grid } from "@material-ui/core";

import { Route } from "react-router-dom"

import { useDidUpdate } from "../../hooks/useDidUpdate";

import { MessageForm } from "../../components/MessageForm";
import { MessageList } from "../../components/MessageList";

import { ListItem, ListItemText } from '@material-ui/core';

const initialChats = {
	home: {
		name: 'Home',
		messages: [],
	},
	bank: {
		name: 'Bank',
		messages: [],
	},
	market: {
		name: 'Market',
		messages: [],
	}
}

const AUTHORS = {
	BOT: 'Bot',
	ME: 'You',
}

const createMsg = (author, text, date) => ({
	author, text, date,
})

export const Chats = (props) => {
	const [chats, setChats] = useState(initialChats);
	/**
	 * Не нашел другого способа обновления компонента кроме создания 
	 * счетчика который обновляется при обновлении списка чатов
	 */
	const [count, setCount] = useState(0);

	const addMsg = (id, message) => {
		chats[id].messages = [...chats[id].messages, message]
		setChats(chats);
		setCount(pCount => ++pCount);
	}

	const addChat = (id) => {
		id = id.toLowerCase();
		setChats((chatList) => 
			({
				...chatList,
				[id]: {
					name: id[0].toUpperCase() + id.slice(1),
					messages: [],
				}
			})
		);
	}

	useDidUpdate(() => {
		Object.keys(chats).forEach((id) =>
			{
				const length = chats[id].messages.length;
				if (!length) return;
				const lastMsg = chats[id].messages[length - 1];
				if (lastMsg.author === AUTHORS.ME) {
					setTimeout(() => {
						addMsg(id, createMsg(AUTHORS.BOT, 'Hello!', Date.now()))
					}, 1000)
				}
			}
		)
	}, chats)

	const sendMsg = (chatId, text) => {
		addMsg(chatId, createMsg(AUTHORS.ME, text, Date.now()));
	};

	const deleteChat = (chatId) => {
		delete chats[chatId];
		setChats(chats);
		setCount(pCount => ++pCount);
	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={2} md={2}>
				<ChatList chats={chats} onRemove={deleteChat} addChat={addChat} />
			</Grid>
			<Grid item xs={10} md={10}>
				<Route path='/chats/:chatId'>
					<Chat chats={chats}>
						{(chatId) => (
							<>
								<h3>{chats[chatId].name}</h3>
								<MessageList chatId={chatId}>
									{(chatId) => 
										chats[chatId].messages.map(({author, text, date}) => 
											<ListItem key={date}>
												<ListItemText primary={author} secondary={text} />
											</ListItem>)
									}
								</MessageList>
								<MessageForm onSubmit={sendMsg} chatId={chatId}/>
							</>
						)}
					</Chat>
				</Route>
			</Grid>
		</Grid>
	)
}
