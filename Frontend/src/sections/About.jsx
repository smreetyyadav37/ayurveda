import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Samoha Life science Pvt Ltd is a pharmaceutical company focused on becoming the trusted partner and solution provider for holistic well-being.`;

  const aboutText = `Our endeavour is to emerge as a **trusted partner and solution provider**. We are committed to enhancing lives, ensuring happiness by our quality products. We aspire to contribute to society by elevating the quality of life through our commitment to excellence and unwavering dedication to producing **high-quality products**.

For us, **quality is the utmost important aspect**, hence our products are getting manufactured in **WHO-GMP approved plants**. We are dedicated to crafting products that not only address medical needs but also contribute to holistic well-being. From innovative formulations to time-tested remedies, our range is designed to foster a healthier and happier community.`;
  
  const imgRef = useRef(null);
  
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.98,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 90%", 
        end: "bottom 30%", 
        scrub: true,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current, start: "top 85%" }, 
    });
  });

  return (
    <section id="about" className="min-h-screen bg-accent1 rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"A Commitment to Excellence and Quality of Life"}
        title={"About Samoha"}
        text={text}
        textColor={"text-primary"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-primary/80">
        <img
          ref={imgRef}
          src="images/about.png" 
          alt="Samoha Life Science team or facility"
          className="w-md rounded-3xl object-cover h-[500px] lg:h-auto" 
        />
        <AnimatedTextLines text={aboutText} className={"w-full lg:max-w-xl"} /> 
      </div>
    </section>
  );
};

export default About;
