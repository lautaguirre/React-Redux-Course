import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    const { deleteStream, stream } = this.props;

    return (
      <Fragment>
        <button
          onClick={() => deleteStream(stream.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">Cancel</Link>
      </Fragment>
    );
  }

  renderContent= () => {
    const { stream } = this.props;

    if (!stream) {
      return 'Are you sure you want to delete the stream?';
    }

    return `Are you sure you want to delete the stream with title: ${stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);