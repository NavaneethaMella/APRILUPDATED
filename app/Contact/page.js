// pages/contact.js
/*import Head from "next/head";
import Script from "next/script";

const ContactPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Contact Us - MBS Pharma</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/contact1.css" rel="stylesheet" />
      <section className="contact-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Get in Touch</span>
            <h2>Contact Us at MBS Pharma</h2>
          </div>

          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <ul>
              <li>
                <strong>Phone:</strong> <a href="tel:+17608451576">+1-760-845-1576</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:abc@mbspharmas.com">abc@mbspharmas.com</a>
              </li>
              <li>
                <strong>Address:</strong> 123 Pharma Street, City, Country
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form action="#" method="POST" id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button type="submit" className="theme-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* External Scripts *//*}
      <Script src="/js/jquery.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/owl.js" />
      <Script src="/js/wow.js" />
      <Script src="/js/validation.js" />
      <Script src="/js/jquery.fancybox.js" />
      <Script src="/js/appear.js" />
      <Script src="/js/isotope.js" />
      <Script src="/js/parallax-scroll.js" />
      <Script src="/js/jquery.nice-select.min.js" />
      <Script src="/js/jQuery.style.switcher.min.js" />
      <Script src="/js/language.js" />
      <Script src="/js/scrolltop.min.js" />
      <Script src="/js/gsap.js" />
      <Script src="/js/ScrollTrigger.js" />
      <Script src="/js/SplitText.js" />
      <Script src="/js/odometer.js" />
      <Script src="/js/script.js" />
    </>
  );
};

export default ContactPage;*/

/*import React from 'react';

const ContactPage = () => {
  return (
    <div className="boxed_wrapper ltr">
      {/* Header Include *//*}
      {/* Replace this with your actual header component *//*}
      <header className="sticky-header">Sticky Header</header>

      <main className="main-content alternat-2">
        {/* Page Title Section *//*}
        <section className="page-title centred">
          <div
            className="bg-layer"
            style={{ backgroundImage: "url(assets/images/background/page-title-5.jpg)" }}
          ></div>
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-53.png)" }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h2>Contact Us</h2>
              <ul className="bread-crumb">
                <li><a href="/">Home</a></li>
                <li>-</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </section>
        


        {/* Contact Info Section *//*}
        <section className="contact-info-section pt_120 pb_90 centred">
          <div className="auto-container">
            <div className="row clearfix">
              {[
                {
                  icon: "icon-67",
                  title: "Our Location",
                  content: "MBS Pharma LLC , 11111"
                },
                {
                  icon: "icon-68",
                  title: "Email Address",
                  content: <a href="mailto:info@mbspharmas.com">info@mbspharmas.com</a>
                },
                {
                  icon: "icon-69",
                  title: "Phone Number",
                  content: <><div>Emergency Cases</div><a href="tel:1760-845-1576">+1-760-845-1576</a></>
                }
              ].map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 col-sm-12 info-block">
                  <div className="info-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <div className="r-hex"><div className="r-hex-inner"></div></div>
                        <div className="icon"><i className={item.icon}></i></div>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="working-style-two centred pt_120 pb_110">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(/img/shape/shape-6.png)" }}
        />
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(/img/shape/shape-11.png)" }}
        />
      </div>
      <div className="auto-container">
        <div className="sec-title mb_70 sec-title-animation animation-style2">
          <span className="sub-title mb_20 title-animation">Our Process</span>
          <h2 className="title-animation">How We Work</h2>
        </div>
        <div className="lower-content">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(/img/shape/shape-16.png)"
                    }}
                  />
                  <div className="icon-box">
                    <div className="r-hex">
                      <div className="r-hex-inner" />
                    </div>
                    <div className="icon">
                      <i className="icon-67" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">Our Location</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(/img/shape/shape-16.png)"
                    }}
                  />
                  <div className="icon-box">
                    <div className="r-hex">
                      <div className="r-hex-inner" />
                    </div>
                    <div className="icon">
                      <i className="icon-68" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">Email Address</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="r-hex">
                      <div className="r-hex-inner" />
                    </div>
                    <div className="icon">
                      <i className="icon-69" />
                    </div>
                  </div>
                  <h3>
                    <a href="#">Phone Number</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      </main>

      
    </div>
  );
};

export default ContactPage;*/



'use client';

import Link from 'next/link';
//import '../Styles/Styles.css'; // Make sure this path matches your file
import '../globals.css'
export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <div className="button-group">
        <button className="btn-black">Go Back</button>
        <Link href="/" >
        <button className="btn-green">Back to Home</button>
        </Link>
      </div>

      
      <br/>
      <div className="contact-boxes">
        <div className="contact-box">
          <div className="icon-container">
            <i className="fa fa-map-marker"></i>
          </div>
          <h3>Our Location</h3>
          <p>MBS Pharma LLC,<br />11111</p>
          <p className="small-red">3900 E Valley Ct Raleigh NC, 27606</p>
        </div>

        <div className="contact-box">
          <div className="icon-container">
            <i className="fa fa-envelope"></i>
          </div>
          <h3>Email Address</h3>
          <p><a href="mailto:info@mbspharmas.com">info@mbspharmas.com</a></p>
          <p className="small-red">michael</p>
        </div>

        <div className="contact-box">
          <div className="icon-container">
            <i className="fa fa-phone"></i>
          </div>
          <h3>Phone Number</h3>
          <p>Emergency Cases</p>
          <a href="tel:+17608451576">+1-760-845-1576</a>
        </div>
      </div>
    </div>
  );
}


