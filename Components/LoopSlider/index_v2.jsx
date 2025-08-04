"use client"
import Image from "next/image";
import Phone from "../../assets/image/Difference/phone.svg";
import Mesh from "../../assets/image/Difference/bg.svg";
import { bg_section, smart_div, image, innovate_section, word_div, word_content, wrapper, tempDiv, secondDiv, phoneContainer, wrapper_firstDiv } from "./index.module.css";
import LoopSlider from ".";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const Difference = () => {

    const parentRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ["start end", "end center"]
    })

    const fastY = useTransform(scrollYProgress, [0, 1], ["20px", "-70px"])
    const smallY = useTransform(scrollYProgress, [0, 1], ["20px", "-75px"])

    return (
        <div className={innovate_section} >

            <div className={bg_section}>
                <Image src={Mesh} alt="background" className={image} />
            </div>


            <div className={word_div} ref={parentRef}  >
                <motion.div style={{ y: fastY }} className={wrapper_firstDiv} >
                    <WordSeparate word="EXPERIENCE" />
                    <WordSeparate word="THE" />
                </motion.div>

                <motion.div style={{ y: fastY }}  >
                    <WordSeparate word="DIFFERENCE" />
                </motion.div>

                <motion.div style={{ y: smallY }} className={smart_div} >
                    <span> {`{`} </span>
                    <span> SMART </span>
                    <span> DEVELOPMENT </span>
                    <span> {`}`} </span>
                </motion.div>
            </div>


            <div className={secondDiv} >
                <LoopSlider />
                <div className={tempDiv}></div>

                <div className={phoneContainer} >
                    <Image className={image} alt="phone" src={Phone} />
                </div>
            </div>
        </div>
    )
}

export default Difference

const WordSeparate = ({ word }) => {
    return (
        <div className={wrapper} >
            {word.split("").map((w, i) => (
                <div className={word_content} key={i} > {w} </div>
            ))
            }
        </div>
    )
}