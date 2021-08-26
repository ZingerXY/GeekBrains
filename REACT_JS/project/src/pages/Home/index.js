import React from "react"
import { useHistory } from "react-router-dom"


export const Home = (props) => {
	const history = useHistory();
	console.log(history);
	return (
		<div>
			Home
		</div>
	)
}