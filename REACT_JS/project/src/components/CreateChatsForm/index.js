import propTypes from 'prop-types';
import { chatsConnect } from "../../connects/chats";
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { CreateChatsFormPresentation } from "./presentation"

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
		<CreateChatsFormPresentation
			name={getFieldValue('name')}
			onChange={onChange}
			onClick={addNewChat}
		/>
	);
};

CreateChatsFormRender.propTypes = {
	addChat: propTypes.func.isRequired,
}

export const CreateChatsForm = chatsConnect(CreateChatsFormRender);
