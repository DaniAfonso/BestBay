import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import $ from 'jquery'

it('renders without crashing', () => {
  // const div = document.createElement('div');
  const div = $("div", null);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


