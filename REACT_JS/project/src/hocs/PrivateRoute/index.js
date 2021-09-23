import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export function PrivateRoute({auth, ...rest}) {
	console.log(auth);
	return auth ? <Route {...rest}/> : <Redirect to={{
		pathname: '/login',
	}}/>
}