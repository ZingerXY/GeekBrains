// import { propTypes } from 'prop-types';
import { chatsConnect } from "../../connects/chats";
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { TextField, IconButton } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export const CreateChatsFormRender = ({addChat}) => {
	const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

	const onChange = (event) => {
		setFieldValue('name', event.target.value);
	}

	const addNewChat = () => {
		const chat = {
			id: 0,
			name: getFieldValue('name')
		}
		addChat(chat)
		resetForm();
	}

	return (
		<>
			<TextField name="name" value={getFieldValue('name')} onChange={onChange} label="Name new chat" />
			<IconButton onClick={addNewChat} aria-label="delete">
				<ControlPointIcon />
			</IconButton>
		</>
	);
};

// CreateChatsFormRender.propTypes = {
// 	addChat: propTypes.func.isRequired,
// }

export const CreateChatsForm = chatsConnect(CreateChatsFormRender);
