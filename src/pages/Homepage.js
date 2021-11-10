import React from "react";
import {
  TruckDriver,
  Gatekeeper,
  House,
  Policeman,
  Hut,
  Studio,
  Image,
  Picnic,
} from "../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";
import HomepageCard from "../components/HomepageCard";
import "./HomepageNew.css";
import "../css/bootstrap.min.css";
import "../css/fontAwesome.css";
import "../css/bootstrap-theme.min.css";
import "../css/hero-slider.css";
import "../css/owl-carousel.css";
import "../css/templatemo-style.css";
import HomepageServicesCard from "../components/HomepageServicesCard";
import HomepageOurTeam from "../components/HomepageOurTeam";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      {/* <div className="wrapper__hero__container">
        <div className="hero__container__img">
          <Slider {...settings}>
            <div>
              <img src={TruckDriver} alt="Zoummar village" />
            </div>
            <div>
              <img src={Image} alt="Zoummar village" />
            </div>
            <div>
              <img src={Gatekeeper} alt="Zoummar village" />
            </div>
            <div>
              <img src={House} alt="Zoummar village" />
            </div>
            <div>
              <img src={Hut} alt="Zoummar village" />
            </div>
            <div>
              <img src={Policeman} alt="Zoummar village" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="wrapper__hero__cards">
        <h1 className="wrapper__content__title"> Our Activities</h1>
        <HomepageCard picture={Picnic} direction="left" />
        <HomepageCard picture={Picnic} direction="right" />
        <HomepageCard picture={Picnic} direction="left" />
      </div> */}
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <ol
              id="hero-carousel-indicators"
              className="carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: "url(../assets/img/hero-carousel/1.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      The Best Business Information{" "}
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      We're In The Business Of Helping You Start Your Business
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(assets/img/hero-carousel/2.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      At vero eos et accusamus
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Helping Business Security & Peace of Mind for Your Family
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(assets/img/hero-carousel/3.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Temporibus autem quibusdam
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        <div id="about" className="about-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>About eBusiness</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="well-left">
                  <div className="single-well">
                    <a href="#">
                      <img src="assets/img/about/1.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="well-middle">
                  <div className="single-well">
                    <a href="#">
                      <h4 className="sec-head">project Maintenance</h4>
                    </a>
                    <p>
                      Redug Lagre dolor sit amet, consectetur adipisicing elit.
                      Itaque quas officiis iure aspernatur sit adipisci quaerat
                      unde at nequeRedug Lagre dolor sit amet, consectetur
                      adipisicing elit. Itaque quas officiis iure
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check"></i> Interior design Package
                      </li>
                      <li>
                        <i className="bi bi-check"></i> Building House
                      </li>
                      <li>
                        <i className="bi bi-check"></i> Reparing of Residentail
                        Roof
                      </li>
                      <li>
                        <i className="bi bi-check"></i> Renovaion of Commercial
                        Office
                      </li>
                      <li>
                        <i className="bi bi-check"></i> Make Quality Products
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="services-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline services-head text-center">
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
            <HomepageServicesCard
              title="Expert Coder"
              text="will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by."
            />
          </div>
        </div>

        <div id="team" className="our-team-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Our special Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <HomepageOurTeam
                img="../img/team/2.jpg"
                job="gay"
                link="facebook.com"
                name="He/him"
              />
              <HomepageOurTeam
                img="../img/team/2.jpg"
                job="gay"
                link="facebook.com"
                name="He/him"
              />
              <HomepageOurTeam
                img="../img/team/2.jpg"
                job="gay"
                link="facebook.com"
                name="He/him"
              />
              <HomepageOurTeam
                img="../img/team/2.jpg"
                job="gay"
                link="facebook.com"
                name="He/him"
              />
            </div>
          </div>
        </div>

        <div className="reviews-area">
          <div className="row g-0">
            <div className="col-lg-6">
              <img src="assets/img/about/2.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 work-right-text d-flex align-items-center">
              <div className="px-5 py-5 py-lg-0">
                <h2>working with us</h2>
                <h5>
                  Web Design, Ready Home, Construction and Co-operate
                  Outstanding Buildings.
                </h5>
                <a href="#contact" className="ready-btn scrollto">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="portfolio-area area-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Our Portfolio</h2>
                </div>
              </div>
            </div>
            <div className="row wesome-project-1 fix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row awesome-project-content portfolio-container">
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfolio-item">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/1.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/1.jpg"
                        >
                          <h4>Business City</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/2.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/2.jpg"
                        >
                          <h4>Blue Sea</h4>
                          <span>Photosho</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-card">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/3.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/3.jpg"
                        >
                          <h4>Beautiful Nature</h4>
                          <span>Web Design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/4.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/4.jpg"
                        >
                          <h4>Creative Team</h4>
                          <span>Web design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/5.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/5.jpg"
                        >
                          <h4>Beautiful Flower</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src="assets/img/portfolio/6.jpg" alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href="assets/img/portfolio/6.jpg"
                        >
                          <h4>Night Hill</h4>
                          <span>Photoshop</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="pricing" className="pricing-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Pricing Table</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="pri_table_list">
                  <h3>
                    basic <br /> <span>$80 / month</span>
                  </h3>
                  <ol>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Online system</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-x"></i>
                      <span>Full access</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free apps</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Multiple slider</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Free domin</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Support unlimited</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Payment online</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-x"></i>
                      <span>Cash back</span>
                    </li>
                  </ol>
                  <button>sign up now</button>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="pri_table_list active">
                  <span className="saleon">top sale</span>
                  <h3>
                    standard <br /> <span>$110 / month</span>
                  </h3>
                  <ol>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Online system</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Full access</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free apps</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Multiple slider</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Free domin</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Support unlimited</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Payment online</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Cash back</span>
                    </li>
                  </ol>
                  <button>sign up now</button>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="pri_table_list">
                  <h3>
                    premium <br /> <span>$150 / month</span>
                  </h3>
                  <ol>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Online system</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Full access</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free apps</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Multiple slider</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free domin</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Support unlimited</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Payment online</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Cash back</span>
                    </li>
                  </ol>
                  <button>sign up now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="testimonials" className="testimonials">
          <div className="container">
            <div className="testimonials-slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div id="blog" className="blog-area">
          <div className="blog-inner area-padding">
            <div className="blog-overly"></div>
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h2>Latest News</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="blog.html">
                        <img src="assets/img/blog/1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">13 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">Assumenda repud eum veniam</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda
                        repud eum veniam optio modi sit explicabo nisi magnam
                        quibusdam.sit amet conse adipis elit Assumenda repud eum
                        veniam optio modi sit explicabo nisi magnam quibusdam.
                      </p>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="blog.html">
                        <img src="assets/img/blog/2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">130 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">Explicabo magnam quibusdam.</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda
                        repud eum veniam optio modi sit explicabo nisi magnam
                        quibusdam.sit amet conse adipis elit Assumenda repud eum
                        veniam optio modi sit explicabo nisi magnam quibusdam.
                      </p>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="blog.html">
                        <img src="assets/img/blog/3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">10 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="blog.html">Lorem ipsum dolor sit amet</a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda
                        repud eum veniam optio modi sit explicabo nisi magnam
                        quibusdam.sit amet conse adipis elit Assumenda repud eum
                        veniam optio modi sit explicabo nisi magnam quibusdam.
                      </p>
                    </div>
                    <span>
                      <a href="blog.html" className="ready-btn">
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h3>Welcome to our eBusiness company</h3>
                  <a className="sus-btn" href="#">
                    Get A quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="contact-area">
          <div className="contact-inner area-padding">
            <div className="contact-overly"></div>
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h2>Contact us</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="bi bi-phone"></i>
                      <p>
                        Call: +1 5589 55488 55
                        <br />
                        <span>Monday-Friday (9am-5pm)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="bi bi-envelope"></i>
                      <p>
                        Email: info@example.com
                        <br />
                        <span>Web: www.example.com</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <i className="bi bi-geo-alt"></i>
                      <p>
                        Location: A108 Adam Street
                        <br />
                        <span>NY 535022, USA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div> */}

                <div className="col-md-6">
                  <div className="form contact-form">
                    <form className="php-email-form">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-group mt-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="form-group mt-3">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="5"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Homepage;
