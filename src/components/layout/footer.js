import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <footer id="contact-section">
        <div className="container">
          <div className="col-md-4">
            <h1 className="text-footer">Contact</h1>
            <p className="text-red">
              220 Ann Dr <br/>
              Middletown DE <br/>
              19709 <br/>
              USA
            </p>
            <p className="text-red">
              Tel: +13028839683 <br/>
              Email: readeverydayinc@gmail.com <br/>
              Web: www.readeverydayinc.org
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
              <ul className="list-inline pull-right">
                  <li>
                    <a href="https://www.facebook.com/Readeverydayinc/">
                      <i className="fa fa-facebook-f text-red"/></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/readeverydayinc">
                      <i className="fa fa-twitter text-red"/></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/readeverydayinc/">
                      <i className="fa fa-instagram text-red"/></a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
