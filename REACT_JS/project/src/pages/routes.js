import { Home } from "./Home";
import { Chats } from "./Chats";
import { Profile } from "./Profile";

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
	}
]