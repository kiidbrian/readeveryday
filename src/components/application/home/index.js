import React, {Component} from 'react';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="teaser">
          <div className="container">
            <div className="text-logo">
              <p>Read</p>
              <p>Every</p>
              <p>Day</p>
            </div>
          </div>
        </div>

        <section className="about-us">
        <h1 className="section-title">About Us</h1>
        <div className="section-content">
          <p>Read Every Day (RED) is a kid driven non-profit organization working to ensure high reading interests among
            children pre/post kindergarten. RED was registered as a non-profit in 2017 with a highly efficient outreach program
            reaching many kids by either placing a RED kiosk, a kid's friendly bookshelf in every classroom, community or facility
            reading through RED Templates, a simple guide for parents and teachers. We focus not only engaging kids but parents particularly
            as the US Department of Education research show that where parents are highly engaged, the reading scores of kids are at least
            above 28% of the national average and 46% below national average where parents are less engaged, suggesting a 74 point gap</p>
        </div>
        </section>

        <section className="our-vision">
        <div className="row">
        <div className="col-md-6">
            <div className="tron-left">
              <img className="tron-image" src="img/shutterstock_4.png" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tron-right">
            <h1 className="tron-title">Our Vision</h1>
            <p className="text-white font-styles">
              Our vision is to improve global opportunities for kids through reading.
              Reading helps children develop vital language skills necessary for expressing themselves verbally;
              it opens up new worlds; enriches children's lives through diversity of thought;
              improves their fine motor skills and helps them develop future interest.
            </p>
            </div>
          </div>
        </div>
        </section>

        <section className="our-mission">
          <div className="teaser-image"></div>
          <div className="row">
            <div className="col-md-5 col-md-offset-7">
              <h1 className="section-title">Our Mission</h1>
              <p className="section-content">
                Our mission is to increase reading interest <br/>
                among kids in every corner of the globe
              </p>
            </div>
          </div>
        </section>

        <section className="our-team">
          <div className="our-team-box">
            <h1 className="section-title">Our Team</h1>
            <p className="section-content">
              RED in partnership with volunteers and committed personnel is able to diversify funding sources and continue
              to promote reading across the globe. Our reading partners throughout the United States and Africa including community
              centers/churches, early childhood programs, health centers, schools, migrant communities and/or special needs facilities make
              our mission of reaching kids across the globe possible.
            </p>
          </div>


          <div className="row team-members">
            <div className="col-md-12">
              <div className="col-md-4 image-holder-1">

              </div>

              <div className="col-md-4 image-holder-2">

              </div>

              <div className="col-md-4 image-holder-3">

              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default Home;
