import React from "react"
import "./MainButton.scss"
import { motion } from "motion/react"

const MainButton = ({ className, active = true, children, onClick, style, initial, animate, transition, ref }) => {
  return (
    <motion.button ref={ref} initial={initial} animate={animate} transition={transition} style={style} onClick={() => active ? onClick() : undefined} className={`main-btn ${!active ? "inactive" : ""} ${className ? className : ""}`}>
        { children }
    </motion.button>
  )
}

export default MainButton