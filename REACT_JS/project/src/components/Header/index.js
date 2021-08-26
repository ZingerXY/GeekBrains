import React from "react"
import { Link as LinkRouter } from "react-router-dom"
import { routes } from "../../pages/routes"
import { Link, makeStyles, Toolbar } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	tolbarSecondary: {
		justifyContent: 'center',
		overflow: 'auto',
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	}
}));

export const Header = (props) => {
	const classes = useStyles();

	return (
		<Toolbar component="nav" variant="dense" className={classes.tolbarSecondary}>
		{
			routes.map(({name, path}, index) => (
				<Link key={index} component={LinkRouter} to={path} className={classes.toolbarLink}>{name}</Link>
			))
		}
		</Toolbar>
	)
}