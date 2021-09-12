import propTypes from 'prop-types';
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { messagesConnect } from "../../connects/messages";
import { CreateMessageFormPresentation } from './presentation';

export const CreateMessageFormRender = ({chatId, addMessage}) => {
	const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});
	const onSubmit = (event) => {
		event.preventDefault();
		addMessage(chatId, getFieldValue('text'));
		resetForm();
	}

	const onChange = (event) => {
		setFieldValue('text', event.target.value);
	}

	return (
		<CreateMessageFormPresentation
			text={getFieldValue('text')}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
};

CreateMessageFormRender.propTypes = {
	chatId: propTypes.number.isRequired,
	addMessage: propTypes.func.isRequired,
};

export const CreateMessageForm = messagesConnect(CreateMessageFormRender);
