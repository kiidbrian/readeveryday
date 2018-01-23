import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';

class Main extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    );
  }
}

export default Main;
