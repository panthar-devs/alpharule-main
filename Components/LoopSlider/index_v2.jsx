"use client"
import Image from "next/image";
import Phone from "../../assets/image/Difference/phone.svg";
import Frame from "../../assets/image/Difference/frame.svg";
import Video from "../../assets/image/Difference/video.svg";
import Mesh from "../../assets/image/Difference/bg.svg";
import { bg_section, smart_div, image, innovate_section, word_div, word_content, wrapper, tempDiv, secondDiv, phoneContainer, wrapper_firstDiv, phone_video, phone_frame } from "./index.module.css";
import LoopSlider from ".";
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";

const Difference = () => {

    const parentRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ["start end", "end center"]
    })

    const fastY = useTransform(scrollYProgress, [0, 1], ["-20px", "360px"])
    const mobileFastY = useTransform(scrollYProgress, [0, 1], ["-20px", "200px"])
    const smallY = useTransform(scrollYProgress, [0, 1], ["-10px", "270px"])
    const mobileSmallY = useTransform(scrollYProgress, [0, 1], ["-10px", "200px"])

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    return (
        <div className={innovate_section} >

            <div className={bg_section}>
                <Image src={Mesh} alt="background" className={image} />
            </div>


            <div className={word_div} ref={parentRef}  >
                <motion.div style={{ y: isMobile ? mobileFastY : fastY }} className={wrapper_firstDiv} >
                    <WordSeparate word="EXPERIENCE" />
                    <WordSeparate word="THE" />
                </motion.div>

                <motion.div style={{ y: isMobile ? mobileFastY : fastY }}  >
                    <WordSeparate word="DIFFERENCE" />
                </motion.div>

                <motion.div style={{ y: isMobile ? mobileSmallY : smallY }} className={smart_div} >
                    <span> {`{`} </span>
                    <span> SMART </span>
                    <span> DEVELOPMENT </span>
                    <span> {`}`} </span>
                </motion.div>
            </div>


            <div className={secondDiv} >
                <LoopSlider />
                <div className={tempDiv} ></div>

                <div style={{ position: "relative" }} >
                    <div className={phoneContainer} >
                        <Image className={image} alt="phone" src={Phone} />

                        {/* Video layer - positioned to cover phone screen area */}
                        <div className={phone_video}>
                            <Image src={Video} alt="Video content" className={image} />
                        </div>

                        {/* Frame layer - creates phone frame illusion on top */}
                        <div className={phone_frame}>
                            <Image src={Frame} alt="Phone frame" className={image} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
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