import { setCursor } from "@/common-functions";
import { CursorContext } from "@/context/CursorContext";
import { Routingvariables } from "@/utilites/RoutingVariavles/routingVariables";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import techText from "../../assets/image//landingPage/hero_images/technology_text.svg";
import fullbusinessImage from "../../assets/image/landingPage/hero-business.png";
import fulldesignImage from "../../assets/image/landingPage/hero-design.png";
import fulltechImage from "../../assets/image/landingPage/hero-tech.png";
import blueBoxBusiness from "../../assets/image/landingPage/hero_images/blueBoxBusiness.svg";
import blueBoxDesign from "../../assets/image/landingPage/hero_images/blueBoxDesign.svg";
import blueBoxTech from "../../assets/image/landingPage/hero_images/blueBoxTech.svg";
import hero_business from "../../assets/image/landingPage/hero_images/business1.png";
import businessImage from "../../assets/image/landingPage/hero_images/business_img.png";
import hero_design from "../../assets/image/landingPage/hero_images/design1.png";
import designImage from "../../assets/image/landingPage/hero_images/design_img.png";
import designText from "../../assets/image/landingPage/hero_images/design_text.svg";
import pinkBoxBusiness from "../../assets/image/landingPage/hero_images/pinkBoxBuisness.svg";
import pinkBoxDesign from "../../assets/image/landingPage/hero_images/pinkBoxDesign.svg";
import pinkBoxTech from "../../assets/image/landingPage/hero_images/pinkBoxTech.svg";
import hero_tech from "../../assets/image/landingPage/hero_images/tech1.png";
import {
  hero_body,
  hero_btn,
  hero_business_image,
  hero_container,
  hero_design_image,
  hero_left,
  hero_right,
  hero_section,
  hero_technology_image,
  hero_title,
  hero_title_container,
  Image_mobile
} from "./index.module.css";

const Hero = () => {
  const INITIAL_TIMER = 0;
  const TARGET_TIMER = 0;
  const hero_categories = {
    design: "design",
    tech: "tech",
    business: "business",
  };

  const getCursorContext = useContext(CursorContext);
  const [isHovered, setIsHovered] = useState(false);

  const [hoverImage, setHoverImage] = useState("design");
  console.log(hoverImage)
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [isMobile, setIsMobile] = useState(false);
  const interval = useRef();

  useEffect(() => {
    if (isAutoSlide) {
      if (hoverImage == hero_categories.design) {
        setHoverImage(hero_categories.tech);
      } else if (hoverImage == hero_categories.tech) {
        setHoverImage(hero_categories.business);
      } else {
        setHoverImage(hero_categories.design);
      }
    }
  }, [timer, isAutoSlide]);

  useEffect(() => {
    function handleTimer() {
      interval.current = setInterval(() => {
        setTimer((count) => count + 1);
      }, 3000);
    }

    if (timer <= TARGET_TIMER && interval.current) {
      clearInterval(interval.current);
    }
    if (timer === INITIAL_TIMER) {
      handleTimer();
    }
  }, [timer]);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  // Button Magnetic Part
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const button = document.querySelector("#magnet");
    const position = button.getBoundingClientRect();

    setButtonPosition({
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
    <section className={hero_section} >
      <div className="container">
        <div className={hero_container}>
          <div className={hero_left}>
            <div className={hero_title_container}>
              <span
                className={hero_title}
                onMouseOver={() => {
                  setHoverImage(hero_categories.design);
                  setIsAutoSlide(false);
                  changeCursor("size_defference");
                }}
                onMouseLeave={() => {
                  setIsAutoSlide(true);
                  changeCursor();
                }}
                style={{ color: hoverImage == hero_categories.design ? "var(--dark)" : "#fff" }}
              >
                Design
              </span>
              <span
                className={hero_title}
                onMouseOver={() => {
                  setHoverImage(hero_categories.tech);
                  setIsAutoSlide(false);
                  changeCursor("size_defference");
                }}
                onMouseLeave={() => {
                  setIsAutoSlide(true);
                  changeCursor();
                }}
                style={{ color: hoverImage == hero_categories.tech ? "var(--dark)" : "#fff" }}
              >
                Technology
              </span>
              <span
                className={hero_title}
                onMouseOver={() => {
                  setHoverImage(hero_categories.business);
                  setIsAutoSlide(false);
                  changeCursor("size_defference");
                }}
                onMouseLeave={() => {
                  setIsAutoSlide(true);
                  changeCursor();
                }}
                style={{ color: hoverImage == hero_categories.business ? "var(--dark)" : "#fff" }}
              >
                Business
              </span>
            </div>
            <p className={hero_body}>
              Transform Your Business with Our Expert Design, Development, and Marketing Services.
            </p>
            <Link href={Routingvariables.contact}>
              <div
                id="magnet"
                className={hero_btn}
                style={{ left: buttonPosition.x, top: buttonPosition.y }}
              >
                <span>Get Started</span>
              </div>
            </Link>
          </div>
          <div className={hero_right}>
            {hoverImage == hero_categories.design ? (
              <>
                {isMobile ? (
                  <div className={Image_mobile}>
                    <Image data-aos="zoom-in" src={fulldesignImage}></Image>
                  </div>
                ) : (
                  <>
                    <div className={hero_design_image}>
                      <Image data-aos="fade-up" src={pinkBoxDesign} alt=""></Image>
                      <Image data-aos="fade-down-right" src={blueBoxDesign} alt=""></Image>
                      <Image data-aos="fade-down-left" src={designText} alt=""></Image>
                      <Image data-aos="fade-up" src={designImage} alt=""></Image>
                    </div>
                    <Image
                      data-aos="fade"
                      alt=""
                      src={hero_design}
                      style={{ maxWidth: "648px", height: "auto" }}
                    />
                  </>
                )}
              </>
            ) : (
              ""
            )}

            {hoverImage == hero_categories.tech ? (
              <>
                {isMobile ? (
                  <div className={Image_mobile}>
                    {" "}
                    <Image data-aos="zoom-in" src={fulltechImage}></Image>
                  </div>
                ) : (
                  <>
                    <div className={hero_technology_image}>
                      <Image data-aos="fade-down-left" src={pinkBoxTech} alt=""></Image>
                      <Image data-aos="fade-up-left" src={blueBoxTech} alt=""></Image>
                      <Image data-aos="fade-up-right" src={techText} alt=""></Image>
                    </div>
                    <Image
                      data-aos="fade"
                      alt=""
                      src={hero_tech}
                      style={{ maxWidth: "648px", height: "auto" }}
                    />
                  </>
                )}
              </>
            ) : (
              ""
            )}

            {hoverImage == hero_categories.business ? (
              <>
                {isMobile ? (
                  <div className={Image_mobile}>
                    <Image data-aos="zoom-in" src={fullbusinessImage}></Image>
                  </div>
                ) : (
                  <>
                    {" "}
                    <div className={hero_business_image}>
                      <Image data-aos="fade-up-right" src={pinkBoxBusiness} alt=""></Image>
                      <Image data-aos="fade-left" src={blueBoxBusiness} alt=""></Image>
                      <Image data-aos="fade-down" src={businessImage} alt=""></Image>
                    </div>
                    <Image
                      data-aos="fade"
                      alt=""
                      src={hero_business}
                      style={{ maxWidth: "648px", height: "auto" }}
                    />
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
