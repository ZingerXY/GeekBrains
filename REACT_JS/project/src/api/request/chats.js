import { db } from "../firebase";

export const chatsApi = {
	create: (name) => {
		return db.ref('chats').push({
			name
		})
			.then((ref) => ref.get())
			.then((snap) => ({
				id: snap.key,
				...snap.val(),
			}))
	},
	delete: (id) => db.ref('chats').child(id).remove(),
	getList: (callback) => {
		db
		.ref('chats')
		.on('value', (snapshot) => {
			const chats = []
			snapshot.forEach((snap) => {
				chats.push({
					id: snap.key,
					...snap.val(),
				})
			})
			callback(chats)
		})
	},
	getAdded: (callback) => db
		.ref('chats')
		.on('child_changed', snap => {
			callback({
				id: snap.key,
				...snap.val(),
		})
	}),
	getChanged: (callback) => db
		.ref('chats')
		.on('child_changed', snap => {
			callback({
				id: snap.key,
				...snap.val(),
		})
	})
}