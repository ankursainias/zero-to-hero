import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './home';
import Newsletter from './newsletter';
import Error from './Error';
import LoginForm from './sessions/New';
import NewMovie from './NewMovie';
import EditMovie from '../pages/movies/edit';
import ShowMovie from '../pages/movies/show';
import Items from '../pages/items/index';
import CartItems from '../pages/items/CartItems';
import Counter from './counter';
import { useSelector } from 'react-redux';

const AppRoute = () => {
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	return (
		<Switch>
			<Route exact path="/about" component={About} />
			<Route exact path="/newsletter" component={Newsletter} />
			<Route exact path="/" component={Home} />
			{!isAuth && <Route exact path="/login" component={LoginForm} />}
			<Route exact path="/counter" component={Counter} />
			<Route exact path="/movies/new" component={NewMovie} />
			<Route exact path="/movies/:id/edit" component={EditMovie} />
			<Route exact path="/movies/:id" component={ShowMovie} />
			<Route exact path="/items" component={Items} />
			<Route exact path="/cart" component={CartItems} />
			<Route component={Error} />
		</Switch>
	);
};

export default AppRoute;
