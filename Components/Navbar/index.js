import React, { useEffect, useState, Fragment, useContext } from "react";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import nav_arrow from "../../assets/image/nav_arrow.svg";
import {
  primary_navigation,
  header,
  navbar_scroll,
  header_container,
  nav_link,
  nav_btn,
  menu_icon,
  main_nav,
  mobile_nav,
  mobile_navigation,
  show_mobile_menu,
  dropdown,
  dropdown_paragraph,
  dropdown_design,
  dropdown_technology,
  dropdown_business,
  mobile_services_container,
  nav_btn_started,
} from "./index.module.css";
import { Routingvariables } from "@/utilites/RoutingVariavles/routingVariables";
import nav_down_arrow from "../../assets/image/navbar-down-arrow.png";
import nav_dot from "../../assets/image/nav_dot.svg";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setIsMobile] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.pageYOffset;
      if (offset > 75) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    });
    // navbar up/down event
    let lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        setIsNavVisible(false);
      }
      if (y < lastVal) {
        setIsNavVisible(true);
      }
      if (y === 0) {
        setIsNavVisible(true);
      }
      lastVal = y;
    };
  }, []);

  const checkIsMobile = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const isServicesOpen = () => {
    if (!isOpen) {
      servicesMenuOpen();
    } else {
      servicesMenuClose();
    }
  };

  const servicesMenuOpen = () => {
    setIsOpen(true);
  };

  const servicesMenuClose = () => {
    setIsOpen(false);
  };

  const closeNavbar = () => {
    setShowMenu(false);
    setIsOpen(false);
  };

  // Change Cursor Part
  const getCursorContext = useContext(CursorContext);
  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };

  // Button Magnetic Part
  const [navbuttonPosition, setnavbuttonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const button = document.querySelector("#magnet_btn");
    const position = button.getBoundingClientRect();

    setnavbuttonPosition({
      x: position.left + position.width,
      y: position.top + position.height,
    });

    button.addEventListener("mousemove", function (e) {
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;

      button.style.transform = "translate(" + x * 0.5 + "px, " + y * 0.5 + "px)";

      // Animation part
      const xx = e.pageX - button.offsetLeft;
      const yy = e.pageY - button.offsetTop;

      button.style.setProperty("--xx", xx + "px");
      button.style.setProperty("--yy", yy + "px");
    });

    button.addEventListener("mouseout", function () {
      button.style.transform = "translate(0px, 0px)";
    });
  }, []);

  return (
    <>
      <Fragment>
        <header
          className={`${header} ${fixedNavbar ? navbar_scroll : ""}`}
          style={{ top: isNavVisible ? "0" : "-80px" }}
        >
          <div className="container">
            <div className={header_container}>
              <Link href={Routingvariables.home}>
                <Image src={logo} width={136} height={50} />
                {/* <div className={brand_text}>
              <h2>AlphaRule.</h2>
            </div> */}
              </Link>
              <div className={main_nav}>
                <nav className={primary_navigation}>
                  <ul>
                    <li onMouseEnter={servicesMenuClose}>
                      <Link href={Routingvariables.about} className={nav_link}>
                        About Us
                      </Link>
                    </li>
                    <Fragment>
                      <li onMouseEnter={() => servicesMenuOpen()} onClick={() => setIsOpen(!open)}>
                        <span className={nav_link}>
                          Our Services

                          <Image
                            style={{
                              marginLeft: "5px",
                              position: "absolute",
                              top: isOpen ? "-1px" : "5px",
                              right: isOpen ? "-22px" : "-15px"
                            }}
                            src={isOpen ? nav_down_arrow : nav_dot}
                            height={isOpen ? 20 : 7}
                          />
                        </span>
                      </li>
                    </Fragment>
                    <li onMouseEnter={servicesMenuClose}>
                      <Link href={Routingvariables.works} className={nav_link}>
                        Our Work
                      </Link>
                    </li>
                    <li>
                      <Link href={Routingvariables.contact}>
                        <div
                          id="magnet_btn"
                          className={nav_btn_started}
                          style={{ left: navbuttonPosition.x, top: navbuttonPosition.y }}
                        >
                          <span>Get Started</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className={menu_icon}
                onClick={() => {
                  setShowMenu(!showMenu);
                  setIsOpen(false);
                }}
              >
                <BsList style={{ fontSize: "2rem" }} />
              </div>
              {/* Mobile Navbar */}
              <div className={showMenu ? show_mobile_menu : mobile_nav}>
                <nav className={mobile_navigation}>
                  <ul>
                    <li>
                      <Link
                        href={Routingvariables.about}
                        className={nav_link}
                        onClick={closeNavbar}
                      >
                        About Us
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        isServicesOpen();
                        checkIsMobile();
                      }}
                    >
                      Our Services <Image src={nav_down_arrow} height={18} />
                    </li>
                    {isOpen && mobile ? (
                      <div className={mobile_services_container}>
                        <div
                          className={dropdown}
                          onMouseLeave={() => {
                            servicesMenuClose();
                          }}
                          onClick={() => {
                            servicesMenuClose();
                          }}
                        >
                          <Link href={Routingvariables.services_design} onClick={closeNavbar}>
                            <div className={dropdown_design}>
                              <h1>Design</h1>
                              <div className={dropdown_paragraph}>
                                <p>Hand Craft the User Experience</p>
                                <Image src={nav_arrow} alt=""></Image>
                              </div>
                            </div>
                          </Link>
                          <Link href={Routingvariables.services_technology} onClick={closeNavbar}>
                            <div className={dropdown_technology}>
                              <h1>Technology</h1>
                              <div className={dropdown_paragraph}>
                                <p>Leverage The Power of Code</p>
                                <Image src={nav_arrow} alt=""></Image>
                              </div>
                            </div>
                          </Link>
                          <Link href={Routingvariables.services_business} onClick={closeNavbar}>
                            <div className={dropdown_business}>
                              <h1>Business</h1>
                              <div className={dropdown_paragraph}>
                                <p>Creative Strategies for Brands</p>
                                <Image src={nav_arrow} alt=""></Image>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <li>
                      <Link
                        href={Routingvariables.works}
                        className={nav_link}
                        onClick={closeNavbar}
                      >
                        Our Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={Routingvariables.contact}
                        className={nav_btn}
                        onClick={closeNavbar}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* -----------------navber Dropdown--------- */}
            {isOpen && !mobile ? (
              <div
                data-aos="fade-right"
                className={dropdown}
                onMouseLeave={() => {
                  servicesMenuClose();
                }}
                onClick={() => {
                  servicesMenuClose();
                  changeCursor();
                }}
              >
                <Link href={Routingvariables.services_design}>
                  <div
                    onMouseEnter={() => {
                      changeCursor("size_defference");
                    }}
                    onMouseLeave={() => {
                      changeCursor();
                    }}
                    className={dropdown_design}
                  >
                    <h1>Design</h1>
                    <div className={dropdown_paragraph}>
                      <p>Hand Craft the User Experience</p>
                      <Image data-aos="fade-right" src={nav_arrow} alt=""></Image>
                    </div>
                  </div>
                </Link>

                <Link href={Routingvariables.services_technology}>
                  <div
                    onMouseEnter={() => {
                      changeCursor("size_defference");
                    }}
                    onMouseLeave={() => {
                      changeCursor();
                    }}
                    className={dropdown_technology}
                  >
                    <h1>Technology</h1>
                    <div className={dropdown_paragraph}>
                      <p>Leverage The Power of Code</p>
                      <Image data-aos="fade-right" src={nav_arrow} alt=""></Image>
                    </div>
                  </div>
                </Link>
                <Link href={Routingvariables.services_business}>
                  <div
                    onMouseEnter={() => {
                      changeCursor("size_defference");
                    }}
                    onMouseLeave={() => {
                      changeCursor();
                    }}
                    className={dropdown_business}
                  >
                    <h1>Business</h1>
                    <div className={dropdown_paragraph}>
                      <p>Creative Strategies for Brands</p>
                      <Image data-aos="fade-right" src={nav_arrow} alt=""></Image>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </header>
      </Fragment>
    </>
  );
};

export default Navbar;
