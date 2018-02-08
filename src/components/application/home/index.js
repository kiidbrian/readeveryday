import React, {Component} from 'react';
import $ from 'jquery';


class Home extends Component {
  render() {
    return(
      <div>
        <div className="teaser" id="navbar-section">
          <div className="container">
            <div className="text-logo">
              <p>Read</p>
              <p>Every</p>
              <p>Day</p>
            </div>
          </div>
        </div>

        <section className="about-us" id="about-us-section">
          <h1 className="section-title">About Us</h1>
          <div className="section-content">
            <p className="justify">Read Every Day (RED) is a kid focused nonprofit organization working to ensure high reading interests among
              children pre/post-kindergarten. RED was registered as a non-profit in 2017 with a highly efficient literacy program
              reaching many kids and their families by placing a mobile RED Lending Library kiosk (a kid’s friendly bookshelf) in
              every classroom/community and fostering family engagement through the RED Knowledge Bank (a consolidated vocabulary
              guide by kids for kids). According to the International Literacy Association, Children’s earliest experiences become
              the building blocks of cognition as it helps develop a rich conceptual knowledge base and verbal reasoning abilities
              to understand messages conveyed through print. We focus not only on engaging kids but parents particularly as the US
              Department of Education research shows that where parents are highly engaged, the reading scores of kids are at least
              28% above the national average and 46% below national average where parents are less engaged, suggesting a 74 point gap.</p>
          </div>
        </section>

        <section className="our-vision">
          <div className="row">
            <div className="col-md-6">
              <div className="tron-left">
                <img className="tron-image" src="img/shutterstock_4.png" id="our-vision-section" alt="baby" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tron-right">
              <h1 className="tron-title">Our Vision</h1>
              <p className="text-white font-styles justify">
              Our vision is to improve global opportunities for kids through reading. Reading helps children develop vital language
              skills necessary for expressing themselves verbally; it opens up new worlds; enriches children's lives through diversity
              of thought; improves their fine motor skills and helps them develop future interest.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="our-mission" id="our-mission-section">
          <div className="teaser-image"></div>
          <div className="row">
            <div className="col-md-5 col-md-offset-7 section-content">
              <h1 className="section-title">Our Mission</h1>
              <p className="section-content">
                Our mission is to encourage <br/> families to Read Every Day.
              </p>
            </div>
          </div>
        </section>

        <section className="our-team" id="our-team-section">
          <div className="our-team-box section-content">
            <h1 className="section-title">Our Team</h1>
            <p className="justify">
            RED in partnership with volunteers and committed personnel is able to diversify funding sources
            and continue to promote reading across the globe. Our reading partners throughout the United States
            and Africa including community centers/churches, early childhood programs, health centers, schools,
            migrant communities and/or special needs facilities make our mission of reaching families across the
            globe possible.
            </p>
          </div>


          <div className="container team-members">
            <div className="col-md-12">
              <div className="col-md-4">
                <div className="image-holder-1" id="img-holder">
                  {/* <img src="img/book.jpg" className="member-image" alt="member"/> */}
                </div>
              </div>

              <div className="col-md-4 image-holder-2">

              </div>

              <div className="col-md-4 image-holder-3">

              </div>
            </div>
          </div>

          <div id="modal-team-member-1" className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="teamModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Irene Acquah - Founder</h4>
              </div>
              <div className="modal-body">
                <p className="justify">
                  Irene Acquah is the Co. founder and CEO of Readeverydayinc. Irene is a business professional with
                  excellent organization and Project Management Skills. She is passionate about fostering educational
                  development of kids around the globe. She is a graduate of Delaware State University with a degree in
                  MBA Project Management, and an undergraduate degree in Business Administration from Central University
                  College. She has over 5 years of work experience in both Business and Project Management.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
              </div>
            </div>
          </div>

        </section>

        <section className="how-red" id="how-red-section">
          <div className="row">
            <div className="col-md-6">
              <div className="how-left">
                <img className="how-image" src="img/003.jpg" id="our-vision-section" alt="why" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="how-right">
              <h1 className="tron-title">How Red</h1>
              <p className="text-white font-styles justify">
              RED Leverages a highly efficient literacy program reaching many kids and their families by placing a mobile RED
              Lending Library kiosk (a kid’s friendly bookshelf) in every classroom/community and fostering family engagement
              through the RED Knowledge Bank (a consolidated vocabulary guide by kids for kids). In partnership with book publishers,
              distributors and volunteers, we are efficiently able to deliver literacy to many kids around the globe.
              Effectively we do this through:
              </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
