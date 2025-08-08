import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./index.module.css";
import { CursorContext } from "@/context/CursorContext";
import { motion, useMotionValue, useSpring } from "framer-motion";


const Cursor_Pointer = () => {
  const context = useContext(CursorContext);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - context.cursorStyle.width / 2);
    mouse.y.set(clientY - context.cursorStyle.height / 2);
  }

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [])



  return (
    <motion.div

      // animate={{ x: mousePosition.x, y: mousePosition.y }}
      // transition={{ type: "spring" }}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: context.cursorStyle.width,
        height: context.cursorStyle.height,
        backgroundColor: context.cursorStyle.color,

        mixBlendMode:
          context.cursorStyle.width == 80 && context.cursorStyle.height == 80
            ? "difference"
            : "normal",
      }}
      className={style.cursor}
    />
  );
};

export default Cursor_Pointer;
