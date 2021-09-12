import './index.css';
import { TextField, Button } from "@material-ui/core";

export const CreateMessageFormPresentation = ({text, onChange, onSubmit}) => {
		return (
		<form className="container" noValidate autoComplete="off" onSubmit={onSubmit}>
			<TextField name="text" autoFocus={true} value={text} onChange={onChange} label="Message" />
			<Button variant="contained" type="submit">Send</Button>
		</form>
	);
}