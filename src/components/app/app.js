import React, { PureComponent, Fragment } from 'react';
import {
  Browserrouter as Router,
  Switch, Route/*, Redirect,
Link*/ } from 'react-router-dom';
// import Actors from '../actors/Actors';
// import ActorDetail from '../actors/ActorDetail';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>Home Page</h2>
        <p>placeholder placeholder placeholder</p>
      </Fragment>
    );
  }
}