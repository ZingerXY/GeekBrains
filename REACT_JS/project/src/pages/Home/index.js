import React from 'react';
import { Typography } from "@material-ui/core";
import { WithThemeContext } from "../../hoc/withThemeContext";
import { ProfileCheckBox } from '../../components/ProfileCheckBox';

export const HomeRender = () => {
	return (
		<div>
			<Typography variant="h6">
				Home
			</Typography>
			<ProfileCheckBox/>
		</div>
	)
}

export const Home = WithThemeContext(HomeRender);
