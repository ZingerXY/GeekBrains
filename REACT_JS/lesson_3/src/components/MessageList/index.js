
import {array} from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

export const MessageList = ({messageList}) => {
	return (
		<List>
			{
				messageList.map(({author, text, date}) => 
					<ListItem key={date}>
						<ListItemText primary={author} secondary={text} />
					</ListItem>)
			}
		</List>
	);
}

MessageList.propTypes = {
	messageList: array.isRequired,
}