import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar.js';

class Site extends React.Component {
  render() {
    return (
      <Navbar />
    );
  }
}

ReactDOM.render(<Site />, document.getElementById("root"));