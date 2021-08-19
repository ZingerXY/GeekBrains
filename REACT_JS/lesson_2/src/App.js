import { MessageForm } from "./components/MessageForm";
import { MessageList } from "./components/MessageList";
import { useDidUpdate } from "./hooks/useDidUpdate";
import { useMessageState } from "./hooks/useMessageState";

const createMsg = (author, text) => ({
	author, text
})

function App() {

	const [messageList, {addMsg}] = useMessageState();

	useDidUpdate(() => {
		if (!messageList.length) return;
		const lastMsg = messageList[messageList.length - 1];
		if (lastMsg.author === 'You') {
			setTimeout(() => {
				addMsg(createMsg('Bot', 'Hello!'))
			}, 1000)
		}
	}, messageList)

	const sendMsg = (text) => {
		addMsg(createMsg("You", text));
	};

	return (
		<div className="App">
			<MessageList messageList={messageList} />
			<MessageForm onSubmit={sendMsg} />
		</div>
	);
}

export default App;