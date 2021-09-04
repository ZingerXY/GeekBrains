import { Delete } from '@material-ui/icons';
import { number, string, func } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'
import { ListItem, Link, IconButton } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { createRemoveMessages } from '../../store/messages'

export const ChatItem = ({id, name, removeChat}) => {
	const dispatch = useDispatch();

	return (
		<ListItem key={id}>
			<Link component={RouterLink} to={`/chats/${name}`}>{name}</Link>
			<IconButton aria-label="delete" size="small" onClick={() => {
				removeChat(id);
				dispatch(createRemoveMessages(id));
			}}>
				<Delete fontSize="small" />
			</IconButton>
		</ListItem>
	);
}

ChatItem.propTypes = {
	id: number,
	name: string,
	removeChat: func,
}
