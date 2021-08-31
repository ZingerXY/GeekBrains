import { FormControlLabel, Switch, Typography } from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux';
import {createActionChangeCheckBox} from "../../store/profile";

export const Profile = (props) => {
	const checkBox = useSelector((state) => state.checkBox);
	const dispatch = useDispatch();
	return (
		<div>
			<Typography variant="h6">
				Profile
			</Typography>
			<FormControlLabel
				control={
				<Switch
					checked={checkBox}
					onChange={() => {
						dispatch(createActionChangeCheckBox(checkBox))
					}}
					name="checkedB"
					color="primary"
				/>
				}
				label="checkBox"
			/>
		</div>
	)
}