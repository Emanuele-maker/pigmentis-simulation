import React, { useEffect, useState } from "react"
import "./Animation.scss"
import { motion, useAnimate } from "motion/react"
import CascadingText from "../CascadingText/CascadingText"
import MainButton from "../MainButton/MainButton"
import ORIGINAL from "../../assets/ORIGINAL.jpg"
import MaskReveal from "../MaskReveal/MaskReveal"

const Animation = () => {
  const [subTitleScope, animateSubTitle] = useAnimate()
  const [titleScope, animateTitle] = useAnimate()
  const [startButtonScope, animateStartButton] = useAnimate()
  const [showHero, setShowHero] = useState(true)
  const [showMaskReveal, setShowMaskReveal] = useState(false)

  const startSimulation = () => {
    animateSubTitle([
      [subTitleScope.current, { scale: 0 }, { duration: .6 }]
    ])

    animateTitle([
      [titleScope.current, { y: -1000, opacity: 0 }, { duration: .6 }]
    ])

    animateStartButton([
      [startButtonScope.current, { opacity: 0 }, { duration: .6 }]
    ])

    setTimeout(() => {
      setShowHero(false)
      setShowMaskReveal(true)
    }, 400)
  }

  return (
    <div className="animation-container">
      {
        showHero &&
        <div className="hero">
          <motion.h1 ref={titleScope} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: .5, type: "spring", stiffness: 100 }} className="main-title">PIGMENTIS</motion.h1>
          <div className="sub-title-container" ref={subTitleScope}>
            <CascadingText className="sub-title">Processing fragmentary</CascadingText>
            <CascadingText className="sub-title" delay={.3}>wall paintings through</CascadingText>
            <CascadingText className="sub-title" delay={.6}>ai-based segmentation and</CascadingText>
            <CascadingText className="sub-title" delay={.9}>generative reconstruction</CascadingText>
          </div>
          <MainButton ref={startButtonScope} onClick={startSimulation} initial={{ y: 5000 }} animate={{ y: 0 }} transition={{ delay: .8, duration: .3 }} style={{ marginTop: ".75rem" }}>Inizia simulazione</MainButton>
        </div>
      }
      {
        showMaskReveal &&
        <MaskReveal />
      }
    </div>
  )
}

export default Animation