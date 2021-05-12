import { Route, Switch } from "react-router-dom";
import About from './About'
import Home from './home'
import Newsletter from './newsletter'
import Error from './Error'
import LoginForm from './sessions/New'

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/newsletter" component={Newsletter} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route component={Error} />
    </Switch>
  )
}

export default AppRoute