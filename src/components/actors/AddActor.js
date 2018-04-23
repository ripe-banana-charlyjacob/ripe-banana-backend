import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  { withRouter } from 'react-router-dom';
import { addActor } from './actions';

class AddActor extends PureComponent {

    handleSubmit = event => {
      event.preventDefault();
      const { target: { elements } } = event;
      const { name, dob, pob } = elements;

      addActor({
        name: name.value,
        dob: dob.value,
        pob: pob.value
      })
        .then(({ _id }) => {
          history.push(`/ripe-banana/actors/${_id}`);
        });
    };

    render() {
      return (
        <section className="add-actor">
          <h4>Add</h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                <div>Name:</div>
                <input name="name" required/>
              </label>
            </div>
              
            <div>
              <label>
                <div>date of birth:</div>
                <input name="dob" required/>
              </label>
            </div>
              
            <div>
              <label>
                <div>place of birth:</div>
                <input name="pob" required/>
              </label>
            </div>
    
            <div>
              <label>
                <div>
                  <button>Add</button>
                </div>
              </label>
            </div>
    
          </form>
        </section>
      );
    }
}

export default withRouter(connect(
  null,
  { addActor }
)(AddActor));