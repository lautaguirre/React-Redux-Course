import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            type="text"
            className="field"
            onChange={e => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;