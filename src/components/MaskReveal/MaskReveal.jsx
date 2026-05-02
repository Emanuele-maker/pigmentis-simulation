import { useState, useEffect, useCallback } from "react";
import "./MaskReveal.scss";
import originalSrc from "../../assets/ORIGINAL.jpg";
import maskSrc from "../../assets/MASK.png";
import completeSrc from "../../assets/COMPLETE.jpg";

export default function MaskReveal() {
  // 0: Original only, 1: Mask revealing over Original, 2: Complete revealing over all
  const [step, setStep] = useState(0);

  const handleKeyPress = useCallback((event) => {
    if (event.code === "Space") {
      setStep((prev) => (prev < 2 ? prev + 1 : prev));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className={`reveal-viewport step-${step}`}>
      <div className="image-stack">
        {/* Layer 1: The Base (Always there) */}
        <img src={originalSrc} alt="Original" className="img-layer base" />

        {/* Layer 2: The Mask (Wipes over Original) */}
        <img src={maskSrc} alt="Mask" className="img-layer mask" />

        {/* Layer 3: The Complete (Wipes over everything) */}
        <img src={completeSrc} alt="Complete" className="img-layer complete" />
      </div>

      {/* <div className="instructions">
        {step === 0 && "Press Space to Reveal Mask"}
        {step === 1 && "Press Space to Complete Merge"}
        {step === 2 && "Composition Complete"}
      </div> */}
    </div>
  );
}