import { db } from "../../api/firebase";

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';
export const CHANGE_MESSAGES = 'CHANGE_MESSAGES';

export const createAddMessage = (message) => ({
	type: ADD_MESSAGE,
	payload: message,
})

export const createRemoveMessages = (chatId) => ({
	type: REMOVE_MESSAGES,
	payload: chatId,
})

const AUTHORS = {
	BOT: 'Bot',
	ME: 'You',
}

const createMessage = (chatId, author, text) => {
	const date = Date.now();
	return {
		chatId,
		author,
		text,
		date,
	}
};

export const addMessageWithThunk = (chatId, textMessage) => (dispatch, getState) => {
	const message = createMessage(chatId, AUTHORS.ME, textMessage);
	dispatch(createAddMessage(message));
	if (message.author !== AUTHORS.BOT) {
		const botMessage = createMessage(chatId, AUTHORS.BOT, 'Hello!');;
		setTimeout(() => dispatch(createAddMessage(botMessage)), 2000);
	}
}

const getPayloadFromSnapshot = (snapshot) => {
	const messages = [];

	snapshot.forEach((mes) => {
		messages.push(mes.val());
	});

	return {
		chatId: snapshot.key,
		messages
	}
}

export const addMessageWithFirebase = (chatId, message) => async () => {
	db.ref("messages").child(chatId).child(message.id).set(message);
};

export const initMessageTracking = () => (dispatch) => {
	db.ref("messages").on("child_changed", (snapshot) => {
		const payload = getPayloadFromSnapshot(snapshot);
		dispatch({
			type: CHANGE_MESSAGES,
			payload,
		});
	});

	db.ref("messages").on("child_added", (snapshot) => {
		const payload = getPayloadFromSnapshot(snapshot);
		dispatch({
			type: CHANGE_MESSAGES,
			payload,
		});
	});
};

export const deleteMessageWithFirebase = (chatId, messageId) => async () => {
	db.ref("messages").child(chatId).child(messageId).remove();
};