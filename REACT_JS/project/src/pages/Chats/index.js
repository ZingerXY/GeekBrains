import { Chat } from "../Chat";
import { Route } from "react-router-dom"
import { ChatList } from "../../components/ChatList";
import { Grid, Typography } from "@material-ui/core";

export const Chats = () => {
	return (
		<>
			<Typography variant="h6">
				Chats
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={2} md={2}>
					<ChatList />
				</Grid>
				<Grid item xs={10} md={10}>
					<Route path='/chats/:chatName'>
						<Chat/>
					</Route>
				</Grid>
			</Grid>
		</>
	)
}
