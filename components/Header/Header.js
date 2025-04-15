

/*import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
function Headerr(){
    return(
        <>
        <Head>

  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link
    href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
  <link href="assets/css/flaticon.css" rel="stylesheet" />
  <link href="assets/css/owl.css" rel="stylesheet" />
  <link href="assets/css/bootstrap.css" rel="stylesheet" />
  <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
  <link href="assets/css/animate.css" rel="stylesheet" />
  <link href="assets/css/nice-select.css" rel="stylesheet" />
  <link href="assets/css/elpath.css" rel="stylesheet" />
  <link
    href="assets/css/color/theme-color.css"
    id="jssDefault"
    rel="stylesheet"
  />
  <link href="assets/css/switcher-style.css" rel="stylesheet" />
  <link href="assets/css/odometer.css" rel="stylesheet" />
  <link href="assets/css/rtl.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/module-css/banner.css" rel="stylesheet" />
  <link href="assets/css/module-css/clients.css" rel="stylesheet" />
  <link href="assets/css/module-css/about.css" rel="stylesheet" />
  <link href="assets/css/module-css/service.css" rel="stylesheet" />
  <link href="assets/css/module-css/speciality.css" rel="stylesheet" />
  <link href="assets/css/module-css/working.css" rel="stylesheet" />
  <link href="assets/css/module-css/video.css" rel="stylesheet" />
  <link href="assets/css/module-css/events.css" rel="stylesheet" />
  <link href="assets/css/module-css/faq.css" rel="stylesheet" />
  <link href="assets/css/module-css/cta.css" rel="stylesheet" />
  <link href="assets/css/responsive.css" rel="stylesheet" />
</Head>

        
  {/* main header *//*}
  <header className="main-header header-style-two">
    {/* header-lower *//*}
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light clearfix">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <Link  href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/About">About</Link>
                  </li>
                  <li className="current dropdown">
                    <Link href="/Service">Services</Link>
                    <ul>
                      <li>
                        <Link href="/Page1">Page 1</Link>
                      </li>
                      <li>
                        <Link href="/Page2">Page 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/News">News</Link>
                  </li>
                  <li>
                    <Link href="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu clearfix"></nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn">
      <i className="fas fa-times" />
    </div>
    <nav className="menu-box">
      <div className="nav-logo">
        <a href="#">
          <img src="assets/img/logo.png" alt="" title="" />
        </a>
      </div>
      <div className="menu-outer" />
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>MBS Pharma, USA</li>
          <li>
            <a href="tel:+8801682648101">+1-760-845-1576</a>
          </li>
          <li>
            <a href="mailto:info@example.com">info@mbapharmas.com</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li>
            <a href="#">
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>


  <Script src="assets/js/jquery.js"></Script>
    <Script src="assets/js/bootstrap.min.js"></Script>
    <Script src="assets/js/owl.js"></Script>
    <Script src="assets/js/wow.js"></Script>
    <Script src="assets/js/validation.js"></Script>
    <Script src="assets/js/jquery.fancybox.js"></Script>
    <Script src="assets/js/appear.js"></Script>
    <Script src="assets/js/isotope.js"></Script>
    <Script src="assets/js/parallax-scroll.js"></Script>
    <Script src="assets/js/jquery.nice-select.min.js"></Script>
    <Script src="assets/js/jQuery.style.switcher.min.js"></Script>
    <Script src="assets/js/language.js"></Script>
    <Script src="assets/js/scrolltop.min.js"></Script>
    <Script src="assets/js/gsap.js"></Script>
    <Script src="assets/js/ScrollTrigger.js"></Script>
    <Script src="assets/js/SplitText.js"></Script>
    <Script src="assets/js/odometer.js"></Script>
    <Script src="assets/js/script.js"></Script>
        </>
    )
}
export default Headerr;*/

/*function Headerr(){
  return(
    <>
    <>
  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link
    href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
  <link href="assets/css/flaticon.css" rel="stylesheet" />
  <link href="assets/css/owl.css" rel="stylesheet" />
  <link href="assets/css/bootstrap.css" rel="stylesheet" />
  <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
  <link href="assets/css/animate.css" rel="stylesheet" />
  <link href="assets/css/nice-select.css" rel="stylesheet" />
  <link href="assets/css/elpath.css" rel="stylesheet" />
  <link
    href="assets/css/color/theme-color.css"
    id="jssDefault"
    rel="stylesheet"
  />
  <link href="assets/css/switcher-style.css" rel="stylesheet" />
  <link href="assets/css/odometer.css" rel="stylesheet" />
  <link href="assets/css/rtl.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/module-css/banner.css" rel="stylesheet" />
  <link href="assets/css/module-css/clients.css" rel="stylesheet" />
  <link href="assets/css/module-css/about.css" rel="stylesheet" />
  <link href="assets/css/module-css/service.css" rel="stylesheet" />
  <link href="assets/css/module-css/speciality.css" rel="stylesheet" />
  <link href="assets/css/module-css/working.css" rel="stylesheet" />
  <link href="assets/css/module-css/video.css" rel="stylesheet" />
  <link href="assets/css/module-css/events.css" rel="stylesheet" />
  <link href="assets/css/module-css/faq.css" rel="stylesheet" />
  <link href="assets/css/module-css/cta.css" rel="stylesheet" />
  <link href="assets/css/responsive.css" rel="stylesheet" />
</>

<div className="boxed_wrapper ltr">
  <div id="search-popup" className="search-popup">
    <div className="popup-inner">
      <div className="upper-box clearfix">
        <figure className="logo-box pull-left">
          <a href="#">
            <img src="assets/img/logo.png" alt="" />
          </a>
        </figure>
        <div className="close-search pull-right">
          <span className="far fa-times" />
        </div>
      </div>
      <div className="overlay-layer" />
      <div className="auto-container">
        <div className="search-form">
          <form method="post" action="#">
            <div className="form-group">
              <fieldset>
                <input
                  type="search"
                  className="form-control"
                  name="search-input"
                  defaultValue=""
                  placeholder="Type your keyword and hit"
                  required=""
                />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* main header *//*}
  <header className="main-header header-style-two">
    {/* header-lower *//*}
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light clearfix">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li className="current dropdown">
                    <a href="">Services</a>
                    <ul>
                      <li>
                        <a href="#">Page 1</a>
                      </li>
                      <li>
                        <a href="#">Page 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu clearfix"></nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="mobile-menu">
    <div className="menu-backdrop" />
    <div className="close-btn">
      <i className="fas fa-times" />
    </div>
    <nav className="menu-box">
      <div className="nav-logo">
        <a href="#">
          <img src="assets/img/logo.png" alt="" title="" />
        </a>
      </div>
      <div className="menu-outer" />
      <div className="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>MBS Pharma, USA</li>
          <li>
            <a href="tel:+8801682648101">+1-760-845-1576</a>
          </li>
          <li>
            <a href="mailto:info@example.com">info@mbapharmas.com</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul className="clearfix">
          <li>
            <a href="#">
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</>
  )
}
export default Headerr*/



/*import React from "react";

const Headerr = () => {
  return (
    <>
    <>
    <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link
      href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
    <link href="assets/css/flaticon.css" rel="stylesheet" />
    <link href="assets/css/owl.css" rel="stylesheet" />
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
    <link href="assets/css/animate.css" rel="stylesheet" />
    <link href="assets/css/nice-select.css" rel="stylesheet" />
    <link href="assets/css/elpath.css" rel="stylesheet" />
    <link
      href="assets/css/color/theme-color.css"
      id="jssDefault"
      rel="stylesheet"
    />
    <link href="assets/css/switcher-style.css" rel="stylesheet" />
    <link href="assets/css/odometer.css" rel="stylesheet" />
    <link href="assets/css/rtl.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet" />
    <link href="assets/css/module-css/banner.css" rel="stylesheet" />
    <link href="assets/css/module-css/clients.css" rel="stylesheet" />
    <link href="assets/css/module-css/about.css" rel="stylesheet" />
    <link href="assets/css/module-css/service.css" rel="stylesheet" />
    <link href="assets/css/module-css/speciality.css" rel="stylesheet" />
    <link href="assets/css/module-css/working.css" rel="stylesheet" />
    <link href="assets/css/module-css/video.css" rel="stylesheet" />
    <link href="assets/css/module-css/events.css" rel="stylesheet" />
    <link href="assets/css/module-css/faq.css" rel="stylesheet" />
    <link href="assets/css/module-css/cta.css" rel="stylesheet" />
    <link href="assets/css/responsive.css" rel="stylesheet" />
  </>

    <div className="boxed_wrapper ltr">
      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box clearfix">
            <figure className="logo-box pull-left">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </figure>
            <div className="close-search pull-right">
              <span className="far fa-times"></span>
            </div>
          </div>
          <div className="overlay-layer"></div>
          <div className="auto-container">
            <div className="search-form">
              <form method="post" action="#">
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      value=""
                      placeholder="Type your keyword and hit"
                      required
                    />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* main header *//*}
      <header className="main-header header-style-two">
        {/* header-lower *//*}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="#">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">About</a>
                      </li>
                      <li className="current dropdown">
                        <a href="">Services</a>
                        <ul>
                          <li>
                            <a href="#">Page 1</a>
                          </li>
                          <li>
                            <a href="#">Page 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="#">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix"></nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="#">
              <img src="assets/img/logo.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>MBS Pharma, USA</li>
              <li>
                <a href="tel:+8801682648101">+1-760-845-1576</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@mbapharmas.com</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-facebook-square"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-pinterest-p"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Headerr;*/
/*"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData"; // Assuming this is properly structured

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar); // cleanup on component unmount
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const pathname = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}
            >
              <Image
                src="/assets/img/logo.png"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {/* Dynamically rendering menu items *//*}
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            pathname === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-black hover:text-primary dark:text-black/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-black group-hover:text-primary dark:text-black/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem, idx) => (
                              <Link
                                key={idx}
                                href={submenuItem.path}
                                className="block rounded py-2.5 text-sm text-black hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;*/

import Head from "next/head"
import Script from 'next/script'
function Index(){
    return(
        <>
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <title>MBS Pharmas</title>
  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link
    href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
  <link href="assets/css/flaticon.css" rel="stylesheet" />
  <link href="assets/css/owl.css" rel="stylesheet" />
  <link href="assets/css/bootstrap.css" rel="stylesheet" />
  <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
  <link href="assets/css/animate.css" rel="stylesheet" />
  <link href="assets/css/nice-select.css" rel="stylesheet" />
  <link href="assets/css/elpath.css" rel="stylesheet" />
  <link
    href="assets/css/color/theme-color.css"
    id="jssDefault"
    rel="stylesheet"
  />
  <link href="assets/css/switcher-style.css" rel="stylesheet" />
  <link href="assets/css/odometer.css" rel="stylesheet" />
  <link href="assets/css/rtl.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/module-css/banner.css" rel="stylesheet" />
  <link href="assets/css/module-css/clients.css" rel="stylesheet" />
  <link href="assets/css/module-css/about.css" rel="stylesheet" />
  <link href="assets/css/module-css/service.css" rel="stylesheet" />
  <link href="assets/css/module-css/speciality.css" rel="stylesheet" />
  <link href="assets/css/module-css/working.css" rel="stylesheet" />
  <link href="assets/css/module-css/video.css" rel="stylesheet" />
  <link href="assets/css/module-css/events.css" rel="stylesheet" />
  <link href="assets/css/module-css/faq.css" rel="stylesheet" />
  <link href="assets/css/module-css/cta.css" rel="stylesheet" />
  <link href="assets/css/responsive.css" rel="stylesheet" />
 
</>

       
      
  {/* main header */}
  <header className="main-header header-style-two">
    {/* header-lower */}
    <div className="header-lower">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar" />
              <i className="icon-bar" />
              <i className="icon-bar" />
            </div>
            <nav className="main-menu navbar-expand-md navbar-light clearfix">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/About">About</a>
                  </li>
                  <li className="current dropdown">
                    <a href="/Services">Services</a>
                    <ul>
                      <li>
                        <a href="/Page1">Page 1</a>
                      </li>
                      <li>
                        <a href="/Page2">Page 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/News">News</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <a href="#">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu clearfix"></nav>
          </div>
        </div>
      </div>
    </div>
  </header>

<Script src="assets/js/jquery.js"></Script>
    <Script src="assets/js/bootstrap.min.js"></Script>
    <Script src="assets/js/owl.js"></Script>
    <Script src="assets/js/wow.js"></Script>
    <Script src="assets/js/validation.js"></Script>
    <Script src="assets/js/jquery.fancybox.js"></Script>
    <Script src="assets/js/appear.js"></Script>
    <Script src="assets/js/isotope.js"></Script>
    <Script src="assets/js/parallax-scroll.js"></Script>
    <Script src="assets/js/jquery.nice-select.min.js"></Script>
    <Script src="assets/js/jQuery.style.switcher.min.js"></Script>
    <Script src="assets/js/language.js"></Script>
    <Script src="assets/js/scrolltop.min.js"></Script>
    <Script src="assets/js/gsap.js"></Script>
    <Script src="assets/js/ScrollTrigger.js"></Script>
    <Script src="assets/js/SplitText.js"></Script>
    <Script src="assets/js/odometer.js"></Script>
    <Script src="assets/js/script.js"></Script>
</>

    )
}
export default Index

