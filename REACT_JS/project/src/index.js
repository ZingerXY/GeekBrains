import './index.css';
import App from './App';
import { store, persistor } from './store'
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);
