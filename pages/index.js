import Layout from '../components/Layout';
import Link from 'next/link';

export default function index() {
  return (
    <Layout>
    <section className="dorne-welcome-area bg-img bg-overlay bg-img">
      <style jsx>{`
        .bg-img {
          background-image: url(/static/img/bg-img/bg12.jpg);
        }
        `}</style>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="hero-content">
                        <h2>Discover the new...</h2>
                        <h4>This is the best place to cater to your needs</h4>
                    </div>
                    {/* Hero Search Form */
                    /* find places */
                    /* ***** Catagory Area Start ***** */}
                    <section className="dorne-catagory-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="all-catagories">
                                        <div className="row">
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-sm-6 col-md">
                                                <a href="#">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.2s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-1.png" alt="" />
                                                            <h6>Coming Soon!</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-sm-6 col-md">
                                                <a href="#">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.4s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-2.png" alt="" />
                                                            <h6>Coming Soon!</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-sm-6 col-md">
                                                <a href="./listing.html">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.6s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-3.png" alt="" />
                                                            <h6 className="yellow">Shopping</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-sm-6 col-md">
                                                <a href="#">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.8s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-4.png" alt="" />
                                                            <h6>Coming Soon!</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-md">
                                                <a href="#">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="1s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-5.png" alt="" />
                                                            <h6>Coming Soon!</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/****** Catagory Area End ***** */}
                </div>
            </div>
        </div>
        /*Hero Social Btn*/
        <div className="hero-social-btn">
            <div className="social-title d-flex align-items-center">
                <span></span>
            </div>
            <div className="social-btns">
                <a href="#"><i className="fa fa-linkedin" aria-haspopup="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-haspopup="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-haspopup="true"></i></a>
            </div>
        </div>
    </section>
    </Layout>
  );
}
