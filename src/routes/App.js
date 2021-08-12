import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import Login from "../pages/Login/Login.js";
import User from "../pages/UserInteface/User.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/user" component={User} /> */}
      </Switch>
    </Router>
  );
}

export default App;
