import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from "./messages";
import { dataReducer } from "./data";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	profile: profileReducer,
	chats: chatsReducer,
	messages: messagesReducer,
	data: dataReducer,
});

export const store = createStore(
	persistReducer(persistConfig, rootReducer),
	composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
