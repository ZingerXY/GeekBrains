import { useState } from "react"

export const useMessageState = (initMessageList) => {
	const [messageList, setMessageList] = useState(initMessageList)

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