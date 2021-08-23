import {array} from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

export const ChatItem = ({chatList}) => {
	return (
		<>
			{
				chatList.map(({id, name}) => 
					<ListItem key={id}>
						<ListItemText primary={name} secondary={null} />
					</ListItem>)
			}
		</>
	);
}

ChatItem.propTypes = {
	chatList: array.isRequired,
}