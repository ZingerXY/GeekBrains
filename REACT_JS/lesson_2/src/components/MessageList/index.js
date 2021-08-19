
export const MessageList = (props) => {
	return (
		<ul>
			{
				props.messageList.map(({author, text}, key) => <li key={key}>
					<strong>{author}:</strong> {text}
				</li>)
			}
		</ul>
	);
}