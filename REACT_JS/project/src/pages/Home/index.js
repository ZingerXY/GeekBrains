import React from 'react';
import {FormControlLabel, Switch, Typography} from "@material-ui/core";
import {WithThemeContext} from "../../hoc/withThemeContext";

import {useDispatch, useSelector} from 'react-redux';
import {createActionChangeCheckBox} from "../../store/profile";


export const HomeRender = (props) => {
	const checkBox = useSelector((state) => state.checkBox);
	const dispatch = useDispatch();
	return (
		<div>
			<Typography variant="h6">
				Home
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

export const Home = WithThemeContext(HomeRender);