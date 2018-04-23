import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Actor extends PureComponent {
    
  render() {
    const { _id, name, dob, pob } = this.props;

    return (
      <li>
        <Link to={`/actors.${_id}`}>
          <h3>{name}</h3>
        </Link>
        <h5>Born: {dob}</h5>
        <h5>From: {pob}</h5>
      </li>
    );
  }
}

export default Actor;