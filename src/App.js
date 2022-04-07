import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Menu from "./Components/Menu";
import './App.css';
import React from "react";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div style={{ backgroundColor: '#0d6efd' }}>
            <Menu />
          </div>
          <Switch>
            {routes.map((route, index) => {
              return <Route key={index} path={route.path} exact={route.exact} component={route.component}></Route>
            })};
            {/*<Route path='/' exact component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route component={NotFound}></Route>*/}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
