import './index.css';
import App from './App';
import { store } from './store'
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);
