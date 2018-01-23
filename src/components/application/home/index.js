import React, {Component} from 'react';

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="jumbotron" style={
        {
          backgroundColor: "transparent",
          backgroundImage: "url('img/shutterstock.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "100% auto"}}>
        <div className="container">
          <p>Read</p>
          <p>Every</p>
          <p>Day</p>
        </div>
      </div>
    );
  }
}

export default Home;
