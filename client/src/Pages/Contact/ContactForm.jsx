import './Contact.css';
import NavFront from '../LandingPage/NavFront';
import Footer from '../LandingPage/FooterFront';
export default function ContactForm() {
  return (
    <>
      <NavFront />
      <section className="ftco-section contact-section mb-3" id="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center animate_animated animate_slideInLeft">
              <span className="subheading" style={{color: "#218c74"}}>Contact us</span>
              <h2 className="mb-4">Message us for more details</h2>
              <p>
                Beyond speaking we offer all other opportunities to make our languages unique (demo) 
              </p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-8">
              <form action="#" className="p-4 p-md-5 contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 d-flex pl-md-5">
              <div className="row">
                <div className="dbox w-100 d-flex ">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Address:</span> 198 West 21th Street, Suite 721 New
                      York NY 10016
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex ">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Phone:</span>{' '}
                      <a href="tel://1234567920" style={{color: '#218c74'}}>+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex ">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Email:</span>{' '}
                      <a href="/cdn-cgi/l/email-protection#8fe6e1e9e0cff6e0fafdfce6fbeaa1ece0e2">
                        <span
                          className="__cf_email__"
                          data-cfemail="ed84838b82ad9482989f9e849988c38e8280"
                          style={{color: '#218c74'}}
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="dbox w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text">
                    <p>
                      <span>Website</span> <a href="#" style={{color: '#218c74'}}>yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div id="map" className="map"></div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
