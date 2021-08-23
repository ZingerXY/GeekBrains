import { ChatList } from "./components/ChatList";
import { MessageForm } from "./components/MessageForm";
import { MessageList } from "./components/MessageList";
import { useDidUpdate } from "./hooks/useDidUpdate";
import { useMessageState } from "./hooks/useMessageState";
import { Grid } from "@material-ui/core";

const createMsg = (author, text, date) => ({
	author, text, date,
})

function App() {

	const [messageList, {addMsg}] = useMessageState();

	useDidUpdate(() => {
		if (!messageList.length) return;
		const lastMsg = messageList[messageList.length - 1];
		if (lastMsg.author === 'You') {
			setTimeout(() => {
				addMsg(createMsg('Bot', 'Hello!', Date.now()))
			}, 1000)
		}
	}, messageList)

	const sendMsg = (text) => {
		addMsg(createMsg("You", text, Date.now()));
	};

	return (
		<div className="App">
			<Grid container spacing={2}>
				<Grid item xs={2} md={2}>
					<ChatList />
				</Grid>
				<Grid item xs={10} md={10}>
					<MessageList messageList={messageList} />
					<MessageForm onSubmit={sendMsg} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;