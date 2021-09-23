import { db } from "../../api/firebase";

export const ADD_CHAT = 'ADD_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const CHANGE_CHAT = 'CHANGE_CHAT';

export const createAddChat = (chat) => ({
	type: ADD_CHAT,
	payload: chat,
})

export const createRemoveChat = (chatId) => ({
	type: REMOVE_CHAT,
	payload: chatId,
})

const getPayloadFromSnapshot = (snapshot) => {
	const chats = [];

	snapshot.forEach((mes) => {
		chats.push(mes.val());
	});

	return {
		chatId: snapshot.key,
		chats
	}
}

export const addChatWithFirebase = (name) => async () => {
	db.ref("chats").push({name});
};

export const initMessageTracking = () => (dispatch) => {
	db.ref("chats").on("child_changed", (snapshot) => {
		const payload = getPayloadFromSnapshot(snapshot);
		dispatch({
			type: CHANGE_CHAT,
			payload,
		});
	});

	db.ref("chats").on("child_added", (snapshot) => {
		const payload = getPayloadFromSnapshot(snapshot);
		dispatch({
			type: CHANGE_CHAT,
			payload,
		});
	});
};

export const deleteMessageWithFirebase = (chatId) => async () => {
	db.ref("chats").child(chatId).remove();
};