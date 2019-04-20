import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamForm from '../common/StreamForm'
import { createStream } from '../../actions/index';

class StreamCreate extends Component {
  onSubmit = (data) => {
    this.props.createStream(data);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}


export default connect(null, { createStream })(StreamCreate);
