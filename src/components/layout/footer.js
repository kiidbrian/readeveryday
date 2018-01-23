import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <footer>
        <hr/>
        <p>&copy; Company 2018</p>
      </footer>
    );
  }
}

export default Footer;
