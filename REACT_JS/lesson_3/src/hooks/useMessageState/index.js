import { useState } from "react"

export const useMessageState = () => {
	const [messageList, setMessageList] = useState([])

	const addMsg = (...items) => {
		setMessageList((state) => {
			return [
				...state,
				...items
			]
		});
	};

	return [messageList, {
		addMsg
	}]
}