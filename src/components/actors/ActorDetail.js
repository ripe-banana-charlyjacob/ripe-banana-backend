import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadActor, removeActor } from './actions';

class ActorDetail extends PureComponent {

  componentDidMount() {
    const { loadActor, match } = this.props;
    loadActor(match.params.id);
  }

    handleRemove = () => {
      if(!confirm('Remove actor?')) return;

      const { actor: { _id }, removeActor, history } = this.props;
      removeActor(_id).then(() => history.push('/actors'));
    };

    render() {
      const { actor } = this.props;
      if(!actor) return null;

      const { name, dob, pob } = actor;

      return (
        <article>
          <h3>
            {name}
            <button onClick={this.handleRemove}></button>
          </h3>
          <h3>Born: {dob}</h3>
          <h3>From: {pob}</h3>
        </article>
      );
    }
}

export default connect(
  ({ actor }) => ({ actor }),
  { loadActor, removeActor }
)(ActorDetail);