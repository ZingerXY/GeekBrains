
import {string, func} from 'prop-types';
import { List } from '@material-ui/core';

export const MessageList = ({chatId, children}) => {

	return (
		<List>
			{
				children(chatId)
			}
		</List>
	);
}

MessageList.propTypes = {
	chatId: string.isRequired,
	children: func.isRequired,
}