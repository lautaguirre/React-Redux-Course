import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions/index';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    console.log(this.props.streams);
    return (
      <div>
        StreamList
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);