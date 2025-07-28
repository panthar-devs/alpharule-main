"use client"

import Image from "next/image";
import Image1 from "../../assets/image/Impact/image1.png";
import style from "./index.module.css";
import { useContext, useRef } from "react";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"

const Impact = () => {
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

    const imageWrapperY = useTransform(scrollYProgress, [0, 1], ["0px", "-1150px"])

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
                                    <div className={style.btn_div} >
                                        View Portfolio
                                    </div>

                                    <div className={style.arrow_div}>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={style.img_flex_1} >

                        <motion.div style={{ y: imageWrapperY }} className={style.img_div} >
                            <Image src={Image1} alt="image" />
                            <Image src={Image1} alt="image" />
                            <Image src={Image1} alt="image" />
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Impact