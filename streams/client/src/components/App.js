import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import StreamList from './streams/SreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" component={StreamList} exact />
        <Route path="/streams/new" component={StreamCreate} exact />
        <Route path="/streams/edit" component={StreamEdit} exact />
        <Route path="/streams/delete" component={StreamDelete} exact />
        <Route path="/streams/show" component={StreamShow} exact />
      </BrowserRouter>
    </div>
  );
};

export default App;