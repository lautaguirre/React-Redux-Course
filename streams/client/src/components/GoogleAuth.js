import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '319785968591-i7kh22ihba53783mhsqn5u302pc2skfd.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());

        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  renderAuthButton = () => {
    if (this.props.auth.isSignedIn === null) {
      return null;
    } else if (this.props.auth.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return (
      <div className="item">{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
