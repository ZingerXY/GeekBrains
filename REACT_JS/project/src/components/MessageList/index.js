
import propTypes from 'prop-types';
import { messagesConnect } from '../../connects/messages';
import { List, ListItem, ListItemText } from '@material-ui/core';

export const MessageListRender = ({messages, ...rest}) => {
	return (
		<List>
			{
				messages?.map(({author, text, date}) => 
					<ListItem key={date}>
						<ListItemText primary={author} secondary={text} />
					</ListItem>)
			}
		</List>
	);
}

MessageListRender.propTypes = {
	messages: propTypes.arrayOf(propTypes.shape({
		chatId: propTypes.number,
		author: propTypes.string,
		text: propTypes.string,
		date: propTypes.number,
	}))
}

export const MessageList = messagesConnect(MessageListRender);
