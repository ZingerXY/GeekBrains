import { Home } from "./Home";
import { Chats } from "./Chats";
import { Profile } from "./Profile";
import { API } from "./API";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { PublicRoute } from "../hocs/PublicRoute";
import { PrivateRoute } from "../hocs/PrivateRoute";
import { Route } from 'react-router-dom';

export const routes = [
	{
		name: 'Home',
		path: '/',
		exact: true,
		component: Home,
		Route: Route,
	},
	{
		name: 'Chats',
		path: '/chats',
		component: Chats,
		Route: Route,
	},
	{
		name: 'Profile',
		path: '/profile',
		component: Profile,
		Route: PrivateRoute,
		isAuth: true,
	},
	{
		name: 'RandomFoxApi',
		path: '/api',
		component: API,
		Route: Route,
	},
	{
		name: 'SignUp',
		path: '/signup',
		component: SignUp,
		Route: PublicRoute,
		isAuth: false,
	},
	{
		name: 'Login',
		path: '/login',
		component: Login,
		Route: PublicRoute,
		isAuth: false,
	},
]