"use client"

import { setCursor } from "@/common-functions"
import { CursorContext } from "@/context/CursorContext"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useContext, useEffect, useRef, useState } from "react"
import Mesh from "../../assets/image/Difference/bg.svg"
import style from "./index.module.css"



const Our_Service = () => {
  const getCursorContext = useContext(CursorContext)
  const buttonRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType)
    getCursorContext.setCursorStyle(cursor)
  }

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
    <div className={style.mainDiv}>
      <AnimatePresence mode="wait" >
        {visible &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 0.5, ease: [[.17, .67, .83, .67]] }}
            className={style.footer_orange} />
        }
      </AnimatePresence>
      <div className={style.bg_section}>
        <Image src={Mesh || "/placeholder.svg"} alt="background" className={style.image} />
      </div>

      <div className={style.flex_div}>
        <div className={style.div_flex_div}>
          <span className={style.green_span}>Ready to Elevate Your Brand</span>

          <div className={style.idea_div}>
            <span>Have</span>
            <span>an</span>
            <div
              className={style.service_title_container}
              onMouseEnter={() => {
                changeCursor("size_defference")
              }}
              onMouseLeave={() => {
                changeCursor("color_change")
              }}
            >
              <span>Idea</span>
            </div>
            <span>?</span>
          </div>
        </div>

        <div className={style.flex_get_div} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} >
          <div ref={buttonRef} className={style.hero_btn}>
            <span>Let's Connect</span>
            <ArrowRight className={style.icon} />
          </div>
        </div>

        <div>
          <p className={style.contact_text}>
            Let's bring your vision to life. Get in touch with ALPHARULE to start building a <br />
            digital experience that stands out and delivers results.
          </p>
        </div>
      </div>

      <div className={style.last_div}>
        <div>
          <span>&copy; 2024 ALPHARULE | All rights reserved</span>
        </div>
        <div>
          <span>TnC</span>
          <span>Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Our_Service
