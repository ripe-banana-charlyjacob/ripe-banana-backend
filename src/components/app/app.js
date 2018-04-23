import React, { PureComponent, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link } from 'react-router-dom';
import Actors from '../actors/Actors';
import ActorDetail from '../actors/ActorDetail';
import AddActor from '../actors/AddActor';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/actors" component={Actors}/>
              <Route exact path="/actor-detail" component={ActorDetail}/>
              <Route exact path="/add-actor" component={AddActor}/>
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
        <Link to="/add-actor">Add Actors</Link>
      </Fragment>
    );
  }
}