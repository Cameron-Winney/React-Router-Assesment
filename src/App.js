import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Components/welcome/Welcome";
import Navigation from "./Components/navigation/Navigation";
import Error from "./Components/404/error";
import Home from "./Components/Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route
            exact
            path="/welcome/:name"
            render={(props) => <Welcome name={props.match.params.name} />}
          />
          <Route>
            <Error />
          </Route>
        </Switch>
        {/*<Route path="/clock" component={clock} />
        <Route path="/contact" component={contact} />
    */}
      </div>
    );
  }
}

export default App;
