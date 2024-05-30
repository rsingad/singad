import { Link } from "react-router-dom";

function FooterPage() {
  return (
    <footer className="footer style-1">
      <div className="footer-sec">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img
                    width="90px"
                    height="42px"
                    src=""
                    alt="logo"
                  />
                  <span>tour</span>
                </div>

                <div className="subscribe-form-wrapper">
                  <p className="py-2">
                    Quis nostrud enisi ut aliquip euox eain commo do conse inrep
                    rehend
                  </p>
                  <div className="social-profile d-flex justify-content-around py-4">
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                  <div className="subscribe-form-widget">
                    <form>
                      <div className="mc4wp-form-fields d-flex justify-content-around">
                        <div className="single-field ">
                          <input type="email" placeholder="Your email here" />
                        </div>
                        <button className="submit-btn" type="submit">
                          <i className="fa-regular fa-envelope"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-6">
              <div className="container">
                <div className="row justify-content-lg-center widget-menu-wrapper">
                  <div className="col-6">
                    <div className="footer-widget widget_nav_menu">
                      <h2 className="footer-widget-title">Company</h2>
                      <ul>
                        <li>
                          <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/blog"}>Blog</Link>
                        </li>
                        <li>
                          <Link to={"/about"}>about us</Link>
                        </li>
                        <li>
                          <Link to={"/service"}>service</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="footer-widget widget_nav_menu">
                      <h2 className="footer-widget-title ">Solutions</h2>
                      <ul>
                        <li>
                          <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/blog"}>Blog</Link>
                        </li>
                        <li>
                          <Link to={"/about"}>about us</Link>
                        </li>
                        <li>
                          <Link to={"/service"}>service</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Address</h2>
                <div className="footer-widget-info">
                  <div className="footer-widget-contact">
                    <div className="footer-contact">
                      <ul>
                        <li>
                          <div className="contact-icon">
                          <i className="fa-solid fa-location-dot"></i>
                          </div>
                          <div className="contact-text">
                            <span>
                              6th Floor BTH Tower,blopalgard, Jodpur,India
                            </span>
                            <br/>
                            <span>
                              CYB-I, STPI Cyber Park RIICO Heavy Industrial
                              Area, Jodhpur,India
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="contact-icon">
                          <i className="fa-solid fa-mobile-retro"></i>
                          </div>
                          <div className="contact-text">
                            <a href="tel:+1234567890">+91-9462066846 (INDIA)</a>
                          </div>
                        </li>
                        <li>
                          <div className="contact-icon">
                          <i className="fa-regular fa-paper-plane"></i>
                          </div>
                          <div className="contact-text">
                            <Link to={"/"}>
                              <span>tourramesh@gmail.com</span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area p-0 pb-2">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-wrapper">
                <div className="d-md-flex d-sm-block justify-content-between">
                  <div className="copyright-text">
                    <p className="">
                      All Rights Reserved © 2024 ramesh singad.
                    </p>
                  </div>
                  <div className="footer-bottom-menu">
                    <ul className="d-flex">
                      <li>
                        <Link to={"/"} className="pe-5">
                          Terms & Condition
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="pe-5">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FooterPage;
