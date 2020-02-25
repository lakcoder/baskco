import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <header className="header_area" id="header">
      <div className="container-fluid h-100">
          <div className="row h-100">
              <div className="col-12 h-100">
                  <nav className="h-100 navbar navbar-expand-lg">
                      <a className="navbar-brand" href="index.html"><img src="/static/img/core-img/bo4.png" alt="" height="100px" width="100px" /></a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#dorneNav" aria-controls="dorneNav" aria-expanded="false" aria-label="Toggle navigation"><span className="fa fa-bars"></span></button>
                      <div className="collapse navbar-collapse" id="dorneNav">
                          <ul className="navbar-nav mr-auto" id="dorneMenu">
                              <li className="nav-item active">
                                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a className="dropdown-item" href="index.html">Home</a>
                                      <a className="dropdown-item" href="explore.html">Groceries</a>
                                      <a className="dropdown-item" href="listing.html">GIfts</a>
                                      <a className="dropdown-item" href="single-listing.html">Food</a>
                                      <a className="dropdown-item" href="contact.html">Laundry Services</a>
                                      <a className="dropdown-item" href="contact.html">Car Washing Services</a>
                                  </div>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="contact.html">Contact</a>
                              </li>
                          </ul>
                          <div className="dorne-signin-btn">
                              <a href="#">Sign in  or Register</a>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
  </header>
);

export default Header;
