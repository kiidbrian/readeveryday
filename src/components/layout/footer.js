import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="container">
          <div className="col-md-4">
            <h1 className="text-footer">Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="col-md-8">
            <div className="row">
                <div className="col-md-6">
                  <input id="name" className="input-item" placeholder="Your Name" size="" required/>
                </div>
                <div className="col-md-6">
                  <input id="subject" className="input-item" placeholder="Subject" size="" required/>
                </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-t-50">
                <textarea id="message" className="textarea-item" placeholder="Say hello!" size="" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 p-t-40">
                <button className="btn btn-default send-now">Send Now </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-t-150">
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">All Rights Reserved &copy; readeveryday (RED) 2017-2018</p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline pull-right text-red">
                  <li><i className="fa fa-facebook-f"/></li>
                  <li><i className="fa fa-twitter"/></li>
                  <li><i className="fa fa-google-plus"/></li>
                  <li><i className="fa fa-instagram"/></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
