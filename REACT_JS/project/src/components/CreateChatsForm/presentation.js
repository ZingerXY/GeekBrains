import { TextField, IconButton } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

export const CreateChatsFormPresentation = ({name, onChange, onClick}) => {
	return (
		<>
			<TextField name="name" value={name} onChange={onChange} label="Name new chat" />
			<IconButton onClick={onClick} aria-label="delete">
				<ControlPointIcon />
			</IconButton>
		</>
	)
}