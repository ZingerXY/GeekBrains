import { Switch, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { routes } from "./pages/routes";
import { profileStore } from "./store/profile";
import { Provider } from 'react-redux';

function App() {
	return (
		<div className="App">
			<Provider store={profileStore}>
				<Header />
				<Switch>
					{
						routes.map(({path, component, exact}, index) => (
							<Route key={index} component={component} exact={exact} path={path} />
						))
					}
				</Switch>
			</Provider>
		</div>
	);
}

export default App;