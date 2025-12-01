import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "./AnimatedTextLines"; 
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
}) => {
  const contextRef = useRef(null);
  
  useGSAP(() => {
    gsap.from(contextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={contextRef} className="py-16 md:py-24 bg-accent3/10 px-6 md:px-10">
      <p
        className={`text-base font-light tracking-[0.3rem] uppercase mb-4 ${textColor}`}
      >
        {subTitle}
      </p>
      <h1
        className={`banner-text-responsive font-normal ${textColor}`}
      >
        {title}
      </h1>
      <div className={`mt-8 md:mt-12 ${textColor}`}>
        <div className="w-full h-0.5 bg-accent1/50 my-4" /> 
        <div className="py-4 md:py-6 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light value-text-responsive text-dark/80 max-w-4xl ml-auto`}
            animate={false} 
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
