import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
  componentDidMount(){
    $("#main-nav li a").click(function() {
      var target = $(this.hash);
      target = target.length ? target : "";
      if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
      }
    });
  }

  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#">
              <img alt="Brand" src="img/logo1.jpg" className="logo-image"/>
            </a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse pull-right">
            <ul className="nav navbar-nav" id="main-nav">
              <li><a href="#navbar-section">HOME <span className="sr-only">(current)</span></a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#about-us-section">ABOUT<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#our-vision-section">VISION</a></li>
                  <li><a href="#our-mission-section">MISSION</a></li>
                </ul>
              </li>
              <li><a href="#our-team-section">TEAM</a></li>
              <li><a href="#volunteer-section">VOLUNTEER</a></li>
              <li><a href="#contact-section">CONTACT</a></li>
              <li><a href="#"><i className="fa fa-sign-in"></i> &nbsp;LOGIN</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
