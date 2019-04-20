import React, { Component } from 'react';

import Button from './Button';
import Field from './Field';

class UserCreate extends Component {
  render() {
    return (
      <div className="ui form">
        <Field />
        <Button />
      </div>
    );
  }
}

export default UserCreate;
