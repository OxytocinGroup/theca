"use client";

import { useState, useRef } from "react";

import animationData from "/public/lottietest.json";

import Lottie from "lottie-react";

export default AnimatedLogo = () => {
  const lottieRef = useRef(null);
  const [shouldReplay, setShouldReplay] = useState(false);

  const handleMouseEnter = () => {
    if (!shouldReplay) {
      lottieRef.current.setSpeed(1.5);
      lottieRef.current.playSegments([60, 120], false);
    }
  };

  const handleMouseLeave = () => {
    if (!shouldReplay) {
      lottieRef.current.setSpeed(1.5);
      lottieRef.current.playSegments([120, 60], false);
      setShouldReplay(true);
    }
  };

  const handleAnimationComplete = () => {
    if (shouldReplay) {
      setShouldReplay(false);
    }
  };

  const handleClickToggle = () => {
    if (!shouldReplay) {
      lottieRef.current.playSegments([61, 120], false);
      setShouldReplay(true);
    } else {
      lottieRef.current.playSegments([120, 60], false);
      setShouldReplay(false);
    }
  };

  return (
    <Lottie
      // style={{ height: "48px" }}
      lottieRef={lottieRef}
      animationData={animationData}
      loop={false}
      autoplay={false}
      initialSegment={[60, 61]}
      onClick={handleClickToggle}
      // onMouseLeave={() => {
      //   lottieRef.current.playSegments([120, 60], false);
      // }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onComplete={handleAnimationComplete}
    />
  );
};
