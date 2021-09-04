import React from 'react';
import propTypes from "prop-types";
import { profileConnect } from "../../connects/profile";
import { FormControlLabel, Switch } from "@material-ui/core";

export const ProfileCheckBoxRender = ({ checkBox, changeCheckBox }) => {
	return (
		<div>
			{
				<FormControlLabel
					control={
					<Switch
						checked={checkBox}
						onChange={() => {
							changeCheckBox(checkBox)
						}}
						name="checkedB"
						color="primary"
					/>
					}
					label="checkBox"
				/>
			}
		</div>
	);
};

ProfileCheckBoxRender.propTypes = {
  checkBox: propTypes.bool
}

export const ProfileCheckBox = profileConnect(ProfileCheckBoxRender);
