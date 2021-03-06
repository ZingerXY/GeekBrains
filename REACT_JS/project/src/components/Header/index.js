import React from "react"
import { NavLink } from "react-router-dom"
import { routes } from "../../pages/routes"
import { Button, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { userApi } from "../../api/request/user";

const useStyles = makeStyles((theme) => ({
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
	title: {
		flexGrow: 1,
	},
}));

export const Header = ({auth}) => {
	return (
		<Toolbar>
			<Typography variant="h6" className={useStyles().title}>
				Project
			</Typography>
			{
				routes.map(({name, path, isAuth}, index) => {
						return isAuth === auth || isAuth === undefined ? (
							<Button component={NavLink} to={path} color="inherit" key={index}>{name}</Button>
						) : ''
					}
				)
			}
			{
				auth ? <Button onClick={userApi.logout} color="inherit">Logout</Button> : ''
			}
		</Toolbar>
	)
}
