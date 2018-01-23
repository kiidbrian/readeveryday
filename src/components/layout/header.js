import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse pull-right">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">HOME <span className="sr-only">(current)</span></a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">CONTACT</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#"><i className="fa fa-search"/></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
