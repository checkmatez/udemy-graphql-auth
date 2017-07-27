import React, { Component, PropTypes } from 'react';

import Header from './Header';

const App = (props) => (
  <div className="container">
    <Header />
    {props.children}
  </div>
);

export default App;
