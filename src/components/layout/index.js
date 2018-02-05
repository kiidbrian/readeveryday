import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Main from '../container/main';

class Layout extends Component {
  render() {
    return(
      <Router>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default Layout;
