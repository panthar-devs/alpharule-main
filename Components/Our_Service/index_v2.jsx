"use client"

import { setCursor } from "@/common-functions"
import { CursorContext } from "@/context/CursorContext"
import { mainTexts } from "@/utilites/data"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { Asterisk } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useContext, useRef, useState } from "react"
import BigGreenStar from "../../assets/image/landingPage/big_green_star.svg"
import BlueStar from "../../assets/image/Service/blue_star.svg"
import GreenStar from "../../assets/image/Service/green_star.svg"
import RedStar from "../../assets/image/Service/red_star.svg"
import Star from "../../assets/image/Service/star.svg"
import styles from "./index.module.css"

export default function ServiceSection() {


    const getCursorContext = useContext(CursorContext);

    const changeCursor = (changeType) => {
        const cursor = setCursor(changeType);
        getCursorContext.setCursorStyle(cursor);
    };
    const [openIndex, setOpenIndex] = useState(null)
    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index))
    }

    return (
        <section className={styles.innovate_section} >
            <div className={styles.service_v2_container} >

                <div
                    className={styles.service_v2_title_container}
                    onMouseEnter={() => {
                        changeCursor("size_defference");
                    }}
                    onMouseLeave={() => {
                        changeCursor("color_change");
                    }}
                >
                    <span className={styles.service_title_container_span} >Crafting</span>{"  "}
                    <span className={styles.service_v2_title_container_span} >Solutions</span><br />
                    <span className={styles.service_title_container_span} >Tailored to Your Needs</span>
                </div>

                <div className={styles.green_div} >
                    <Image src={BigGreenStar} />
                </div>
            </div>

            {mainTexts.map((item, i) => (
                <Card item={item} index={i} isOpen={openIndex === i} onToggle={handleToggle} />
            ))}

            <div className={styles.service_v2_last_container} >
                <span> We aim to keep you at updated at all times of the design process. Here is a tentative step-by-step process for our design work. </span>
            </div>

        </section >
    )
}


const Card = ({ item, index, isOpen, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef(null)
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const handleClick = () => {
        onToggle(index)
    }

    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX)
        mouse.y.set(clientY - 150);
    }


    return (
        <div
            ref={containerRef}
            className={styles.serviceSectionContainer}
            onMouseOver={() => setIsHovered(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={manageMouseMove}
            onClick={handleClick}>

            <div className={isHovered ? styles.hover_scrollingBanner : styles.scrollingBanner} >
                <motion.div
                    className={styles.scrollingTextInner}
                    animate={{ x: "-50%" }}
                    transition={{
                        x: {
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            duration: 10,
                            ease: "linear",
                        },
                    }}
                >
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={`scrolling-${i}-${i}`} className={styles.footer_content}>
                            <span className={styles.followSpam}>
                                {item.text_first}
                                {
                                    isHovered && index === 0 ? <Image src={GreenStar} alt="star" className={styles.followSymbol} />
                                        : isHovered && index === 1 ? <Image src={BlueStar} alt="star" className={styles.followSymbol} />
                                            : isHovered && index === 2 ? <Image src={RedStar} alt="star" className={styles.followSymbol} />
                                                : <Image src={Star} alt="star" className={styles.followSymbol} />
                                }
                            </span>
                            <span className={styles.followSpam}>
                                {item.text_sec}
                                {
                                    isHovered && index === 0 ? <Image src={GreenStar} alt="star" className={styles.followSymbol} />
                                        : isHovered && index === 1 ? <Image src={BlueStar} alt="star" className={styles.followSymbol} />
                                            : isHovered && index === 2 ? <Image src={RedStar} alt="star" className={styles.followSymbol} />
                                                : <Image src={Star} alt="star" className={styles.followSymbol} />
                                }
                            </span>
                        </div>
                    ))}
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={`scrolling-${i}-${i}`} className={styles.footer_content}>
                            <span className={styles.followSpam}>
                                {item.text_first}
                                <Asterisk className={styles.followSymbol} />
                            </span>
                            <span className={styles.followSpam}>
                                {item.text_sec}
                                <Asterisk className={styles.followSymbol} />
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>


            {/* Hover Modal Overlay - now follows pointer */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className={styles.hoverModalOverlay}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1, transition: { delay: 0.2 } }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            position: "fixed",
                            left: smoothMouse.x,
                            top: smoothMouse.y,
                            transform: 'translate(-50%, -50px)',
                        }}
                    >
                        <div className={styles.modalContent}>
                            <Image
                                src={item.modalPreviewImage || "/placeholder.svg"}
                                alt={`${item.modalProjectTitle} preview`}
                                width={250}
                                height={150}
                                className={styles.modalPreviewImage}
                            />
                            <h1> {index} </h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Expandable Grid */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [[.17, .67, .83, .67]] }}
                        className={styles.gridContainer}
                    >
                        <div className={styles.grid}>
                            {item.serviceLinks.map((link) => (
                                <Link key={link.name} href={link.href} className={styles.gridItem}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}
