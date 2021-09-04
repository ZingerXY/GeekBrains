import './index.css';
// import { propTypes } from 'prop-types';
import { TextField, Button } from "@material-ui/core";
import { useSimpleForm } from "../../hooks/useSimpleForm";
import { messagesConnect } from "../../connects/messages";

const AUTHORS = {
	BOT: 'Bot',
	ME: 'You',
}

const createMessage = (chatId, author, text) => {
	const date = Date.now();
	return {
		chatId,
		author,
		text,
		date,
	}
};

export const CreateMessageFormRender = ({chatId, addMessage}) => {
	const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});
	const onSubmit = (event) => {
		event.preventDefault();
		const message = createMessage(chatId, AUTHORS.ME, getFieldValue('text'));
		addMessage(message);
		setTimeout(() => {
			const botMessage = createMessage(chatId, AUTHORS.BOT, 'Hello!');
			addMessage(botMessage);
		}, 1000)
		resetForm();
	}

	const onChange = (event) => {
		setFieldValue('text', event.target.value);
	}

	return (
		<form className="container" noValidate autoComplete="off" onSubmit={onSubmit}>
			<TextField name="text" autoFocus={true} value={getFieldValue('text')} onChange={onChange} label="Message" />
			<Button variant="contained" type="submit">Send</Button>
		</form>
	);
};

// CreateMessageFormRender.propTypes = {
// 	chatId: propTypes.number.isRequired,
// 	addMessage: propTypes.func.isRequired,
// };

export const CreateMessageForm = messagesConnect(CreateMessageFormRender);
