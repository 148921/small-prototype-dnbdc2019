import React, { Component } from "react";
import Home from "./components/home";
import Aktive from "./components/aktive";
import Info from "./components/info";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      url: "https://developer-api-sandbox.dnb.no/accounts"
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    console.log(this.state.data);
    return (
      <HashRouter>
        <div className="flex-container">
          <style>
            @import url('https://fonts.googleapis.com/css?family=Quicksand');
</style>
          <div className="main">
              <div className="header">
              </div>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                    path="/active/"
                    component={Aktive} />
                  <Route path="/info/" component={Info} />
                </Switch>
              </div></div></div>
      </HashRouter>
    );
  }
}

export default App;