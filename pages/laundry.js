import Layout from '../components/Layout';
import Link from 'next/link';

export default function index() {
  return (
    <Layout>
    <section className="dorne-welcome-area bg-img bg-overlay bg-img">
      <style jsx>{`
        .bg-img {
          background-image: url(/static/img/bg-img/bg13.jpeg);
        }
        `}</style>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="hero-content">
                        <h2>Discover the new...</h2>
                        <h4>Find the best solutions for your daily needs!</h4>
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
                                                <a href="/groceries">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.2s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-1.png" alt="" />
                                                            <h6>Groceries</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-sm-6 col-md">
                                                <a href="/laundry">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.4s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-2.png" alt="" />
                                                            <h6>Laundry Services<br/></h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-sm-6 col-md">
                                                <a href="/car_washing">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.6s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-3.png" alt="" />
                                                            <h6>Car Washing Services</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-sm-6 col-md">
                                                <a href="/food">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.8s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-4.png" alt="" />
                                                            <h6>Food</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* Single Catagory Area */}
                                            <div className="col-12 col-md">
                                                <a href="gifts">
                                                    <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="1s">
                                                        <div className="catagory-content">
                                                            <img src="img/core-img/icon-5.png" alt="" />
                                                            <h6>Gifts</h6>
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
            <a href="https://instagram.com/baskco_?igshid=r925llcvkaeg"><i className="fa fa-instagram" aria-haspopup="true"></i></a>
            <a href="https://www.linkedin.com/company/baskco"><i className="fa fa-linkedin" aria-haspopup="true"></i></a>
            <a href="https://twitter.com/Baskco1?s=09"><i className="fa fa-twitter" aria-haspopup="true"></i></a>
            <a href="https://www.facebook.com/Baskco-103014131304762/?modal=admin_todo_tour"><i className="fa fa-facebook" aria-haspopup="true"></i></a>
            </div>
        </div>
    </section>
    </Layout>
  );
}
