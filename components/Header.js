import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <header class="header_area" id="header">
      <div class="container-fluid h-100">
          <div class="row h-100">
              <div class="col-12 h-100">
                  <nav class="h-100 navbar navbar-expand-lg">
                      <a class="navbar-brand" href="index.html"><img src="/public/img/core-img/bo4.png" alt="" height="100px" width="100px" /></a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#dorneNav" aria-controls="dorneNav" aria-expanded="false" aria-label="Toggle navigation"><span class="fa fa-bars"></span></button>
                      <div class="collapse navbar-collapse" id="dorneNav">
                          <ul class="navbar-nav mr-auto" id="dorneMenu">
                              <li class="nav-item active">
                                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                              </li>
                              <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a class="dropdown-item" href="index.html">Home</a>
                                      <a class="dropdown-item" href="explore.html">Explore</a>
                                      <a class="dropdown-item" href="listing.html">Listing</a>
                                      <a class="dropdown-item" href="single-listing.html">Single Listing</a>
                                      <a class="dropdown-item" href="contact.html">Contact</a>
                                  </div>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="contact.html">Contact</a>
                              </li>
                          </ul>
                          <div class="dorne-signin-btn">
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
