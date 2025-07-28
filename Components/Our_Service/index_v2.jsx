"use client"

import { setCursor } from "@/common-functions"
import { CursorContext } from "@/context/CursorContext"
import { mainTexts } from "@/utilites/data"
import { AnimatePresence, motion } from "framer-motion"
import { Asterisk } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"
import GreenStar from "../../assets/image/landingPage/big_green_star.svg"
import styles from "./index.module.css"

export default function ServiceSection() {


    const getCursorContext = useContext(CursorContext);

    const changeCursor = (changeType) => {
        const cursor = setCursor(changeType);
        getCursorContext.setCursorStyle(cursor);
    };

    return (
        <div className={styles.innovate_section} >
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
                    <Image src={GreenStar} />
                </div>
            </div>

            {mainTexts.map((item, i) => (
                <Card item={item} />
            ))}

            <div className={styles.service_v2_last_container} >
                <span> We aim to keep you at updated at all times of the design process. Here is a tentative step-by-step process for our design work. </span>
            </div>

        </div >
    )
}


const Card = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className={styles.serviceSectionContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >

            <div className={styles.scrollingBanner} >
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
                                <Asterisk className={styles.followSymbol} />
                            </span>
                            <span className={styles.followSpam}>
                                {item.text_sec}
                                <Asterisk className={styles.followSymbol} />
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

            {/* Expandable Grid */}
            <AnimatePresence>
                {isHovered && (
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
        </div>
    )
}
