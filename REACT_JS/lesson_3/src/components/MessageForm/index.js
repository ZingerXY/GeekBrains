import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import {func} from 'prop-types';
import './index.css';

export const MessageForm = ({onSubmit}) => {
	const [text, setText] = useState('');

	const onChange = (event) => {
		setText(event.target.value);
	}

	const sendMsg = () => {
		onSubmit(text);
		setText("");
	}

	return (
		<form className="container" noValidate autoComplete="off" onSubmit={(event) => event.preventDefault()}>
			<TextField autoFocus={true} value={text} onChange={onChange} label="Message" />
			<Button variant="contained" onClick={sendMsg}>Send</Button>
		</form>
	);
}

MessageForm.propTypes = {
	onSubmit: func.isRequired,
}