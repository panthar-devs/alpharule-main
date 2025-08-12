"use client"

import { useState } from "react"
import { ArrowUpRight, AtSign } from "lucide-react"
import styles from "./index.module.css"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Connect from "../Contact"

export default function SocialLinks() {
  const socialLinks = [
    { name: "Instagram", href: "/contact" },
    { name: "LinkedIn", href: "/contact" },
    { name: "Dribbble", href: "/contact" },
    { name: "YouTube", href: "/contact" },
    { name: "Behance", href: "/contact" },
    { name: "Twitter", href: "/contact" },
  ]
  return (
    <footer>
      <div className={styles.footer}>

        <div>
          <motion.div
            className={styles.follow_div}
            animate={{ x: ["0%", "-20%"] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={`scrolling-${i}-${i}`} className={styles.footer_content}>
                <span className={styles.followSpam}>
                  Follow Us
                  <AtSign className={styles.followSymbol} />
                </span>
                <span className={styles.circle} />
              </div>
            ))}
            {Array.from({ length: 25 }).map((_, i) => (
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
            <FlipCard key={link.name} link={link} />
          ))}
        </div>

        <div className={styles.last_div} >
          <div className={styles.innerspan} >
            <span style={{ color: "var(--gray-dark)" }} >Main Office</span>
            <h3> Gurugram, India </h3>
          </div>

          <div className={styles.mail_div} >
            info@alpharule.co
          </div>
        </div>


        <Connect />
      </div >
    </footer>
  )
}

const FlipCard = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`${styles.footer_link_wrapper} ${styles.flip} ${styles.flip_vertical}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Front face - static link */}
      <div className={`${styles.front} ${styles.footer_link_static}`}>
        {link.name}
        <ArrowUpRight className={styles.footer_icon} />
      </div>

      {/* Back face - animated scrolling content */}
      <div className={`${styles.back} ${styles.footer_animationDiv}`}>
        <motion.div
          className={styles.footer_inner}
          initial={{ scale: 0.8 }}
          animate={{ x: ["0%", "-20%"], scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 5,
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
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


// Uncomment the following code if you want to use the Scale Card component instead of FlipCard
// const Card = ({ link }) => {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <div
//       className={styles.footer_link_wrapper}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="wait">
//         {isHovered ? (
//           <motion.div
//             key="scrolling-container"
//             initial={{ opacity: 0, scaleY: 0.8 }}
//             animate={{ opacity: 1, scaleY: 1 }} // Expand to full height
//             exit={{ opacity: 0, scaleY: 0 }}
//             transition={{ duration: 0.15, ease: "easeOut" }}
//             style={{ originY: 0.5 }}
//             className={styles.footer_animationDiv}
//           >
//             {/* Inner div for continuous scroll */}
//             <motion.div
//               className={styles.footer_inner}
//               initial={{ scale: 0.8 }}
//               animate={{ x: ["0%", "-50%"], scale: 1 }}
//               exit={{ scale: 0.8 }}
//               transition={{
//                 x: {
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "loop",
//                   duration: 15,
//                   ease: "linear",
//                 },
//               }}
//             >
//               {Array.from({ length: 25 }).map((_, i) => (
//                 <Link key={`scrolling-${link.name}-${i}`} href={link.href} className={styles.footer_content}>
//                   <span className={styles.innerspan} style={{ fontWeight: "500" }}>
//                     {link.name}
//                     <ArrowUpRight className="w-5 h-5" />
//                   </span>
//                 </Link>
//               ))}
//             </motion.div>
//           </motion.div>

//         ) : (
//           <motion.a
//             key="single-link"
//             href={link.href}
//             initial={{ opacity: 1, scaleY: 1 }} // Start fully visible and scaled the outer div
//             animate={{ opacity: 1, scaleY: 1 }}
//             exit={{ opacity: 0, scaleY: 0.8 }}
//             transition={{ duration: 0.1, ease: "easeOut" }}
//             style={{ originY: 0.5 }}
//             className={styles.footer_link_static}
//           >
//             {link.name}
//             <ArrowUpRight className={styles.footer_icon} />
//           </motion.a>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }
