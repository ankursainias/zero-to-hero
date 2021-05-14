import { Route, Switch } from "react-router-dom";
import About from './About'
import Home from './home'
import Newsletter from './newsletter'
import Error from './Error'
import LoginForm from './sessions/New'
import NewMovie from './NewMovie'
import EditMovie from '../pages/movies/edit'
import ShowMovie from '../pages/movies/show'
import Counter from './counter'

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/newsletter" component={Newsletter} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
      <Route exact path="/movies/:id" component={ShowMovie} />
      <Route component={Error} />
    </Switch>
  )
}

export default AppRoute