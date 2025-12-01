import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const AnimatedTextLines = ({ text, className, animate = true }) => { 
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (animate && lineRefs.current.length > 0) { 
      gsap.from(lineRefs.current, {
        y: 30, 
        opacity: 0,
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out", 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%", 
        },
      });
    }
  }, [animate, text]); 

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          className="block leading-relaxed tracking-wide text-pretty"
          style={!animate ? { opacity: 1 } : {}} 
        >
          {line}
        </span>
      ))}
    </div>
  );
};
