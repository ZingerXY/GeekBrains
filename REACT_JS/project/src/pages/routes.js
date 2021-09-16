import { Home } from "./Home";
import { Chats } from "./Chats";
import { Profile } from "./Profile";
import { API } from "./API";

export const routes = [
	{
		name: 'Home',
		path: '/',
		exact: true,
		component: Home,
	},
	{
		name: 'Chats',
		path: '/chats',
		component: Chats,
	},
	{
		name: 'Profile',
		path: '/profile',
		component: Profile,
	},
	{
		name: 'RandomFoxApi',
		path: '/api',
		component: API,
	}
]