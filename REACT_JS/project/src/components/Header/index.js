import React from "react"
import { NavLink } from "react-router-dom"
import { routes } from "../../pages/routes"
import { Button, makeStyles, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
	title: {
		flexGrow: 1,
	},
}));

export const Header = (props) => {
	const classes = useStyles();

	return (
		<Toolbar>
			<Typography variant="h6" className={classes.title}>
				Project
			</Typography>
		{
			routes.map(({name, path}, index) => (
				<Button component={NavLink} to={path} color="inherit" key={index}>{name}</Button>
			))
		}
		</Toolbar>
	)
}