import React from 'react';
import LoginPage from "pages/Auth/Login";
import RegisterPage from "pages/Auth/Register";
import DashboardPage from "pages/Dashboard/DashboardPage";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRouter } from "components/Routing/PrivateRoute";
import { getProfileAction } from 'store/authentication/auth.action';
import { Loader } from 'components/Loader';


const App = () => {
	const [loading, setLoading] = React.useState(true);

	const dispatch = useDispatch();
	const history = useHistory();
	const { isAuth } = useSelector(store => store.auth)

	React.useEffect(() => {
		dispatch(getProfileAction());
	}, [dispatch]);

	React.useEffect(() => {
		if (!isAuth) {
			history.push('/login');
		} else {
			history.push('/');
		}

	}, [isAuth, history]);


	//! Прелоадер
	React.useEffect(() => {
		// Loading function to load data or 
		// fake it using setTimeout;
		const loadData = async () => {
	
		  // Wait for two second
			await new Promise((r) => setTimeout(r, 2000));
	
		  // Toggle loading state
			setLoading((loading) => !loading);
		};
		loadData();
	}, [])

	if (loading) {
        return <Loader />
    }

	return (
		<>
		<Switch>
			<PrivateRouter exact path='/' component={DashboardPage} /> 
			<Route path='/login' component={LoginPage}/> 
			<Route path='/register' component={RegisterPage}/>
		</Switch>
		</>
	);
}

export default App;
