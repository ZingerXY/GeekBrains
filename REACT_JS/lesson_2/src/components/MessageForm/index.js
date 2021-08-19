import { useState } from "react";
import './index.css';

export const MessageForm = (props) => {
	const [text, setText] = useState('');

	const onChange = (event) => {
		setText(event.target.value);
	}

	const sendMsg = () => {
		props.onSubmit(text);
		setText("");
	}

	return (
		<div className="container">
			<input className="msgText" value={text} onChange={onChange} type="text"/>
			<button className="butSend" onClick={sendMsg}>Send</button>
		</div>
	);
}