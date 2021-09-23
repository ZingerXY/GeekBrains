import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from "./messages";
import { dataReducer } from "./data";
import thunk from 'redux-thunk';
import { userReducer } from './user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	profile: profileReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	data: dataReducer,
	user: userReducer
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
