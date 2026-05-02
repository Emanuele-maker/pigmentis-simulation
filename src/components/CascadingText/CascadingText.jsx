import React, { useEffect, useRef, useState } from 'react'
import "./CascadingText.scss"

const CascadingText = ({ children, className, delay = 0, duration = 0.5 }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = ref.current
    if (!target) return
    setTimeout(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!visible && entry.isIntersecting) setVisible(true)
        })
        }, {
        threshold: 1
        })

        observer.observe(target)
    }, delay * 1000)
  }, [])

  return (
    <h1 ref={ref} className={`fade-text ${className}`} aria-label={children} role="text">
        {
          visible &&
          children.split("").map((char, i) => (
            <span key={i} className={`fade-char ${className}`} style={{ animationDelay: `${i * 0.020}s`, animationDuration: `${duration / children.split("").length}s` }}>{ char }</span>
          ))
        }
    </h1>
  )
}

export default CascadingText