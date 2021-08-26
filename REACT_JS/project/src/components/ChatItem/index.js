import { object } from 'prop-types';
import { ListItem, Link, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom'

export const ChatItem = ({chatList, onRemove}) => {
	return (
		<>
			{
				Object.keys(chatList).map((id, i) => 
					<ListItem key={id}>
						<Link component={RouterLink} to={`/chats/${id}`}>{chatList[id].name}</Link>
						<IconButton aria-label="delete" size="small" onClick={() => onRemove(id)}>
							<Delete fontSize="small" />
						</IconButton>
					</ListItem>)
			}
		</>
	);
}

ChatItem.propTypes = {
	chatList: object.isRequired,
}