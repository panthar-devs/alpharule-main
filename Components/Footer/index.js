"use client"

import { useState } from "react"
import { ArrowUpRight, AtSign } from "lucide-react"
import styles from "./index.module.css"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Connect from "../Contact"

export default function SocialLinks() {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Dribbble", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Twitter", href: "#" },
  ]
  return (
    <footer>
      <div className={styles.footer}>

        <div>
          <motion.div
            className={styles.follow_div}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 90,
                ease: "linear",
              },
            }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`scrolling-${i}-${i}`} className={styles.footer_content}>
                <span className={styles.followSpam}>
                  Follow Us
                  <AtSign className={styles.followSymbol} />
                </span>
                <span className={styles.circle} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className={styles.footer_small_div}>
          {socialLinks.map((link) => (
            <Card key={link.name} link={link} />
          ))}
        </div>

        <div className={styles.last_div} >
          <div className={styles.innerspan} >
            <span style={{ color: "var(--gray-dark)" }} >Main Office</span>
            <h3> New Delhi, India </h3>
          </div>

          <div className={styles.mail_div} >
            info@thealpharule.com
          </div>
        </div>


        <Connect />
      </div >
    </footer>
  )
}

const Card = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    // This div acts as the persistent container for hover events
    <div
      className={styles.footer_link_wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.div
            key="scrolling-container"
            initial={{ opacity: 0, scaleX: 0.8 }} // Start slightly scaled down from center
            animate={{ opacity: 1, scaleX: 1 }} // Expand to full width
            exit={{ opacity: 0, scaleX: 0.8 }} // Collapse back
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className={styles.footer_animationDiv}
          >
            {/* Inner div for continuous scroll */}
            <motion.div
              className={styles.footer_inner}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <Link key={`scrolling-${link.name}-${i}`} href={link.href} className={styles.footer_content}>
                  <span className={styles.innerspan} style={{ fontWeight: "500" }}>
                    {link.name}
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                  <span className={styles.circle} />
                </Link>
              ))}
            </motion.div>
          </motion.div>

        ) : (
          <motion.a
            key="single-link"
            href={link.href}
            initial={{ opacity: 0, scaleX: 0.8 }} // Start slightly scaled down from center
            animate={{ opacity: 1, scaleX: 1 }} // Expand to full width
            exit={{ opacity: 0, scaleX: 0.8 }} // Collapse back
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ originX: 0.5 }} // Ensure scaling happens from the center
            className={styles.footer_link_static} // Apply specific styles for the static link
          >
            {link.name}
            <ArrowUpRight className={styles.footer_icon} />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
