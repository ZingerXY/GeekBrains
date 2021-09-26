import { routes } from "./pages/routes";
import { Header } from "./components/Header";
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIsAuth, initAuthAction } from "./store/user";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initAuthAction);
	}, [])

	const isAuth = useSelector(getIsAuth);
	return (
		<div className="App">
			<Header auth={isAuth}/>
			<Switch>
				{
					routes.map(({path, component, exact, Route}, index) => (
						<Route auth={isAuth} key={index} component={component} exact={exact} path={path} />
					))
				}
			</Switch>
		</div>
	);
}

export default App;
