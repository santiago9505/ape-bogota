import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import Login from "../pages/Login/Login.js";
import User from "../pages/UserInteface/User.js";
import { AuthProvider } from "../auth/Auth";
import PrivateRoute from "../pages/PrivateRoute.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/user" component={User} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
