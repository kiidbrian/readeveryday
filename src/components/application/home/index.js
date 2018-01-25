import React, {Component} from 'react';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="teaser" style={
          {
            backgroundColor: "transparent",
            backgroundImage: "url('img/shutterstock.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
          }}>
          <div className="container">
            <div className="text-logo">
              <p>Read</p>
              <p>Every</p>
              <p>Day</p>
            </div>
          </div>
        </div>

        <section className="">
          <div className="container">
            <h1 className="section-title">About Us</h1>

            <div className="section-content">
              <p>Read Every Day (RED) is a kid driven non-profit organization working to ensure high reading interests among
                children pre/post kindergarten. RED was registered as a non-profit in 2017 with a highly efficient outreach program
                reaching many kids by either placing a RED kiosk, a kid's friendly bookshelf in every classroom, community or facility
                reading through RED Templates, a simple guide for parents and teachers. We focus not only engaging kids but parents particularly
                as the US Department of Education research show that where parents are highly engaged, the reading scores of kids are at least
                above 28% of the national average and 46% below national average where parents are less engaged, suggesting a 74 point gap</p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="col-md-6"></div>
            <div className="col-md-6 container">

            </div>
          </div>
        </section>

        <section className="">
          <div className="jumboman">
            <div className="col-md-6"></div>
            <div className="col-md-6">

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
