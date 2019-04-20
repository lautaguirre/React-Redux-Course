import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

import Header from './Header';
import StreamList from './streams/SreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" component={StreamList} exact />
        <Route path="/streams/new" component={StreamCreate} exact />
        <Route path="/streams/edit/:id" component={StreamEdit} exact />
        <Route path="/streams/delete/:id" component={StreamDelete} exact />
        <Route path="/streams/show/:id" component={StreamShow} exact />
      </Router>
    </div>
  );
};

export default App;