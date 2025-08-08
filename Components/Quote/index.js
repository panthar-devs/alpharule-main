import React, { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./index.module.css";
import startop from "../../assets/image/Quote/right-top.png";
import stardown from "../../assets/image/Quote/left-down.png";
import Image from "next/image";
import { Routingvariables } from "@/utilites/RoutingVariavles/routingVariables";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";

const Quote = () => {
  const getCursorContext = useContext(CursorContext);
  const buttonRef = useRef(null)

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()

      // Calculate magnetic effect (relative to initial position)
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = (e.clientX - centerX) * 0.3
      const y = (e.clientY - centerY) * 0.3

      button.style.transform = `translate(${x}px, ${y}px)`

      const xx = e.clientX - rect.left
      const yy = e.clientY - rect.top

      button.style.setProperty("--xx", `${xx}px`)
      button.style.setProperty("--yy", `${yy}px`)
    }

    const handleMouseOut = () => {
      button.style.transform = "translate(0px, 0px)"
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseOut)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseOut)
    }
  }, [])

  return (
    <section
      className="container"
      onMouseEnter={() => {
        changeCursor("color_change");
      }}
      onMouseLeave={() => {
        changeCursor();
      }}
    >
      <div className={style.quote_container}>
        <div className={style.mainpart}>
          <h3>Let's create a measurable impact on your business.</h3>
          <div className={style.button_parts} ref={buttonRef} >
            <Link href={Routingvariables.contact} className={style.button_quote}>
              Request A Quote
            </Link>
          </div>
          <Image className={style.topstar} src={startop}></Image>
          <Image className={style.downstar} src={stardown}></Image>
        </div>
      </div>
    </section>
  );
};

export default Quote;
