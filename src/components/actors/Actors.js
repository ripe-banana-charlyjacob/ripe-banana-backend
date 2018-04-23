import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadActors } from './actions';
import Actor from './Actor';
import AddActor from './AddActor';

class Actors extends PureComponent {

  componentDidMount() {
    this.props.loadActors();
  }

  render() {
    const { actors } = this.props;
    if(!actors) return null;

    return (
      <Fragment>
        <h2>Actors:</h2>
        <ul>
          {actors.map(actor => <Actor key={actor._id} {...actor}/>)}
        </ul>
        <AddActor/>
      </Fragment>
    );
  }
}

export default connect(
  ({ actors }) => ({ actors }),
  { loadActors }
)(Actors);