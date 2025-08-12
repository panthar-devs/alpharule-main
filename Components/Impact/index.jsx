"use client"

import Image from "next/image";
import Image1 from "../../assets/image/Impact/image1.png";
import Image2 from "../../assets/image/Impact/image2.png";
import Image3 from "../../assets/image/Impact/image3.png";
import style from "./index.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link";

const Impact = () => {
    const [isMobile, setIsMobile] = useState(false)

    const getCursorContext = useContext(CursorContext);

    const changeCursor = (changeType) => {
        const cursor = setCursor(changeType);
        getCursorContext.setCursorStyle(cursor);
    };

    const scrollParentRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: scrollParentRef,
        offset: ["start start", "end end"], // 0 when target top hits viewport top, 1 when target bottom hits viewport bottom
    })

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const imageWrapperY = useTransform(scrollYProgress, [0, 1], ["0px", "-1150px"])

    // Button Magnetic Part
    const buttonRef = useRef(null)
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
        <section className={style.impact_section} ref={scrollParentRef} >

            <div className={style.sticky_div}  >
                <div className={style.flex_div} >
                    <div className={style.flex_1} >

                        <div>
                            <div
                                onMouseEnter={() => {
                                    changeCursor("size_defference");
                                }}
                                onMouseLeave={() => {
                                    changeCursor();
                                }}
                            >
                                <span className={style.text_black_container}>Success</span>{" "}
                                <span className={style.text_container}>Stories</span> <br />
                                <span className={style.text_container}>with</span>{" "}
                                <span className={style.text_black_container}>Real Impact</span>
                            </div>

                            <div>
                                <p className={style.para} > Explore some of our recent projects that showcase the quality and diversity of our work. We take pride in helping clients achieve their goals, whether through beautifully designed interfaces, robust applications, or impactful branding. </p>

                                <div className={style.btn_flex_div} >
                                    <div ref={buttonRef} className={style.hero_btn}>
                                        <span>View Portfolio</span>
                                    </div>

                                    <div className={style.arrow_div}>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={style.img_flex_1} >

                        {isMobile ? (
                            <div className={style.img_div}>
                                <Image src={Image1} alt="image" />
                                <Image src={Image2} alt="image" />
                                <Image src={Image3} alt="image" />
                            </div>)
                            :
                            (<motion.div style={{ y: imageWrapperY }} className={style.img_div} >
                                <Image src={Image1} alt="image" />
                                <Image src={Image2} alt="image" />
                                <Image src={Image3} alt="image" />
                            </motion.div>)}
                    </div>

                </div>
            </div>

        </section >
    )
}

export default Impact