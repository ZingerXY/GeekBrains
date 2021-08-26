import React from "react"
import { useHistory } from "react-router-dom"


export const Profile = (props) => {
	const {goBack, push} = useHistory();
	return (
		<div>
			Profile
			<button onClick={goBack}>go back</button>
			<button onClick={() => push('/chats')}>go to chats</button>
		</div>
	)
}