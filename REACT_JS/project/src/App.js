import { Switch, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { routes } from "./pages/routes";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				{
					routes.map(({path, component, exact}, index) => (
						<Route key={index} component={component} exact={exact} path={path} />
					))
				}
			</Switch>
		</div>
	);
}

export default App;