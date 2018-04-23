import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Actor extends PureComponent {
    
  render() {
    const { _id, name } = this.props;

    return (
      <li>
        <Link to={`/actors.${_id}`}>
          <h3>{name}</h3>
        </Link>
      </li>
    );
  }
}

export default Actor;