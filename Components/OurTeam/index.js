"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import { team_container, team_text, team_img, word } from "./index.module.css";
import BigGrayStar from "../../assets/image/landingPage/big_gray_star.svg";
import { paragraph } from "@/utilites/data";

const OurTeam = () => {

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end end"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], ["5deg", "90deg"])

  const words = paragraph.split(" ")

  return (
    <section ref={containerRef} className={team_container}>
      <div className="container"  >
        <motion.div className={team_img} style={{ rotate }} >
          <Image src={BigGrayStar} alt="image_star" />
        </motion.div>
        <p className={team_text}>
          {
            words.map((word, i) => {
              const start = i / words.length
              const end = start + (1 / words.length)
              return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
            })
          }
        </p>
      </div>
    </section>
  );
};

export default OurTeam;


const Word = ({ children, progress, range }) => {

  const amount = range[1] - range[0]
  const step = amount / children.length

  return (

    <span className={word}>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}



const Char = ({ children, progress, range }) => {

  const weight = useTransform(progress, range, [200, 600])

  return (
    <span>
      <motion.span style={{ fontWeight: weight }}>{children}</motion.span>
    </span>
  )
}