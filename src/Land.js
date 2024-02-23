import React from "react";
import "./App.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel, Card } from "react-bootstrap";
export default function Land() {
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);

  const newSectionRef = useRef(null);
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        <header className="header-1" id="header">
          <nav className="nav bd-grid">
            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bxs-grid"></i>
            </div>
            <a href="#" className="nav__logo">
              <span style={{ fontSize: "28px" }}>sneakerzone</span>
            </a>
            &nbsp; &nbsp;
            <br />
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="/" className="nav__link">
                    HOME
                  </a>
                </li>
                <li className="nav__item">
                  <Link to="/shop" className="nav__link">
                    SHOP
                  </Link>
                </li>
                <li className="nav__item">
                  <a
                    href="#"
                    className="nav__link"
                    onClick={() => scrollToRef(newSectionRef)}
                  >
                    NEW
                  </a>
                </li>
                <li
                  className="nav__item"
                  onClick={() => scrollToRef(contactUsRef)}
                >
                  <a href="#" className="nav__link">
                    CONTACT US
                  </a>
                </li>
                <li
                  className="nav__item"
                  onClick={() => scrollToRef(servicesRef)}
                >
                  <a href="#" className="nav__link">
                    SERVICES
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav__shop">
              <i className="bx bx-shopping-bag"></i>
            </div>
          </nav>
        </header>
        <main className="l-main">
          <section className="home" id="home">
            <div className="home__container bd-grid">
              <div className="home__sneaker">
                <div className="home__shape"></div>
                <img
                  src="https://github.com/bedimcode/responsive-ecommerce-website-sneakers/blob/master/assets/img/imghome.png?raw=true"
                  alt=""
                  className="home__img"
                />
              </div>

              <div
                className="home__data"
                style={{
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <span className="home__new">New in</span>
                <h1 className="home__title">
                  YEEZY BOOST <br /> SPLY - 350
                </h1>
                &nbsp;&nbsp;{" "}
                <p
                  className="home__description"
                  style={{
                    textAlign: "left",
                    justifyContent: "center",
                    display: "flex",
                    paddingLeft: "300px",
                  }}
                >
                  <br />
                  &nbsp;Explore the new collections of sneakers. Our latest
                  YEEZY &nbsp; BOOST SPLY-350 combines style <br />
                  and comfort for the ultimate sneaker experience.
                </p>
                <a href="#" className="button">
                  Explore Now
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <br />

      <section className="new-section" ref={newSectionRef}>
        <div className="new-collection-container">
          <h2 className="new-collection-heading">
            Discover Our Latest Arrivals
          </h2>
          <p className="new-collection-description">
            Elevate your style with our stunning new shoe collection. From sleek
            sneakers to elegant heels, each pair is crafted with precision and
            passion. Explore the perfect blend of fashion and comfort and step
            into a world of endless possibilities. Whether you're strutting down
            the street or making a statement at the office, our shoes are
            designed to turn heads and leave a lasting impression.
          </p>
          <Carousel nextLabel="" prevLabel="" className="custom-carousel">
            {/* First Slide */}
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  background: "white",
                  width: "100%",
                  // height: "500px",
                }}
              >
                {" "}
                <Card style={{ width: "350px", height: "350px" }}>
                  <Card.Img
                    style={{ width: "100%", height: "60%" }}
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.Y5dpT1xu59gPAlMzB8mJ5QHaFB?rs=1&pid=ImgDetMain"
                  />
                  <Card.Body style={{ height: "60%" }}>
                    <Card.Title>First Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the first shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the second shoe in the first slide */}
                  <Card.Img
                    style={{ width: "100%", height: "60%" }}
                    variant="top"
                    src="https://th.bing.com/th/id/R.12726edfbf4639a4bf42ef5013bb962a?rik=V4iheIz6ysmOuA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshoes-transparent%2fshoes-transparent-1.png&ehk=6zf3EmkoV4xG6fFKuGVLmeULfc%2bOPN7e%2fFqDoRIQxuo%3d&risl=&pid=ImgRaw&r=0"
                  />
                  <Card.Body>
                    <Card.Title>Second Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the second shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the third shoe in the first slide */}
                  <Card.Img
                    style={{ width: "100%", height: "60%" }}
                    variant="top"
                    src="https://i.pinimg.com/originals/47/3a/9d/473a9dc9d45032630c4cb907dc21d40f.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Third Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the third shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  background: "white",
                }}
              >
                {" "}
                {/* Set background color for the slide */}
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the first shoe in the second slide */}
                  <Card.Img
                    variant="top"
                    style={{ width: "100%", height: "60%" }}
                    src="https://th.bing.com/th/id/R.7130621996c89d8049923c8539606198?rik=G7RxJilYf5%2bvHg&riu=http%3a%2f%2fimage.sportsmansguide.com%2fadimgs%2fl%2f1%2f184338_ts.jpg&ehk=Kv%2fqmes3uEDbxLtcTmnFC6ckc5tqSXisYwW07obeU14%3d&risl=&pid=ImgRaw&r=0"
                  />
                  <Card.Body>
                    <Card.Title>Fourth Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the fourth shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the second shoe in the second slide */}
                  <Card.Img
                    style={{ width: "100%", height: "60%" }}
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.NhPRBqBORfVRW3xdaEbR4gHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain"
                  />
                  <Card.Body>
                    <Card.Title>Fifth Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the fifth shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the third shoe in the second slide */}
                  <Card.Img
                    variant="top"
                    style={{ width: "100%", height: "60%" }}
                    src="https://th.bing.com/th/id/OIP.rM399JfcQuMAEx1yDstU1wHaFj?w=272&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  />
                  <Card.Body>
                    <Card.Title>Sixth Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the sixth shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  background: "white",
                }}
              >
                {" "}
                {/* Set background color for the slide */}
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the first shoe in the third slide */}
                  <Card.Img
                    style={{ width: "100%", height: "60%" }}
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.3f1g-1FWcKXHSHM_lv5DSgHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  />
                  <Card.Body>
                    <Card.Title>Seventh Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the seventh shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the second shoe in the third slide */}
                  <Card.Img
                    style={{ width: "100%", height: "60%" }}
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.-H0BEb5EJRe1MVEjyC4IcAHaFR?w=271&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  />
                  <Card.Body>
                    <Card.Title>Eighth Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the eighth shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "350px", height: "350px" }}>
                  {/* Image URL for the third shoe in the third slide */}
                  <Card.Img
                    style={{ width: "100%", height: "60%" }}
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.Zfrw2iZsBPA66TA0btqnygHaIq?pid=ImgDet&w=182&h=212&c=7&dpr=1.3"
                  />
                  <Card.Body>
                    <Card.Title>Ninth Shoe Name</Card.Title>
                    <Card.Text>
                      Description or details about the ninth shoe.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <br />

      <div className="services-container" ref={servicesRef}>
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          {/* First Row */}
          <div className="service">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/423/038/original/free-shipping-delivery-service-logo-badge-vector.jpg"
              alt="Free Shipping"
              className="service-icon"
            />
            <h3 className="service-title">Free Shipping</h3>
            <p className="service-description">
              Enjoy free shipping on all orders over $50. No promo code
              required!
            </p>
          </div>
          <div className="service">
            <img
              src="https://thumbs.dreamstime.com/b/easy-returns-sign-label-delivery-service-vector-stock-illustration-261427909.jpg"
              alt="Easy Returns"
              className="service-icon"
            />
            <h3 className="service-title">Easy Returns</h3>
            <p className="service-description">
              Not completely satisfied with your purchase? No problem! We offer
              hassle-free returns within 30 days of delivery.
            </p>
          </div>

          {/* Second Row */}
          <div className="service">
            <img
              src="https://th.bing.com/th/id/OIP.a4LHhCDaBphaJFZajllbsgHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3"
              alt="Wide Selection"
              className="service-icon"
            />
            <h3 className="service-title">Wide Selection</h3>
            <p className="service-description">
              Explore our extensive collection of sneakers from top brands. From
              classic styles to the latest releases, we've got something for
              everyone.
            </p>
          </div>
          <div className="service">
            <img
              src="https://img.freepik.com/premium-vector/24-7-support-abstract-style-white-background-customer-service-online-support-call-center_123447-1208.jpg?w=2000"
              alt="24/7 Support"
              className="service-icon"
            />
            <h3 className="service-title">24/7 Support</h3>
            <p className="service-description">
              Need assistance? Our customer support team is available 24/7 to
              help you with any questions or concerns.
            </p>
          </div>

          {/* Third Row */}
          <div className="service">
            <img
              src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-data-protection-internet-flat-illustration-png-image_4753677.png"
              alt="Secure Payments"
              className="service-icon"
            />
            <h3 className="service-title">Secure Payments</h3>
            <p className="service-description">
              Shop with confidence knowing that your payment information is
              securely processed. We use the latest encryption technology to
              protect your personal data.
            </p>
          </div>
          <div className="service">
            <img
              src="https://png.pngtree.com/png-clipart/20210912/original/pngtree-exclusive-sale-poster-png-image_6707593.jpg"
              alt="Exclusive Deals"
              className="service-icon"
            />
            <h3 className="service-title">Exclusive Deals</h3>
            <p className="service-description">
              Subscribe to our newsletter to receive exclusive deals, discounts,
              and updates on new arrivals straight to your inbox.
            </p>
          </div>
        </div>
      </div>
      <br />

      <footer className="footer-container" ref={contactUsRef}>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>{" "}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>SK & COMPANY
                </h6>
                <p>
                  SK & Co brings you the latest trends in fashion and lifestyle,
                  offering quality products with style and elegance.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    MEN'S SHOE
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    WHOMEN'S SHOE
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    SLIPPERS
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    ETC..
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> Melur,Madurai
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  srikanthbala24@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> +91 7010891016
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> +91 6382728496
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          class="text-center p-4"
          style={{ backgroundColor: "#333", color: "white" }}
        >
          © 2024 Copyright:&nbsp;
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            @sk&co
          </a>
        </div>
      </footer>
    </>
  );
}
