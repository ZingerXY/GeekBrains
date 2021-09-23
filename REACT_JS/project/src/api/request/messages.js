import { db } from "../firebase";

export const messagesApi = {
	create: (message) => {
		return db.ref('messages').push({
				...message
			})
			.then((ref) => ref.get())
			.then((snap) => ({
				id: snap.key,
				...snap.val(),
			}))
	},
	delete: (id) => db.ref('messages').child(id).remove(),
	getList: (callback) => {
		db
		.ref('messages')
		.on('value', (snapshot) => {
			const messages = []
			snapshot.forEach((snap) => {
				messages.push({
					id: snap.key,
					...snap.val(),
				})
			})
			callback(messages)
		})
	},
	getAdded: (callback) => db
		.ref('messages')
		.on('child_changed', snap => {
			callback({
				id: snap.key,
				...snap.val(),
			})
		}),
	getChanged: (callback) => db
		.ref('messages')
		.on('child_changed', snap => {
			callback({
				id: snap.key,
				...snap.val(),
			})
		})
}