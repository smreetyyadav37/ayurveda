import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `AYUR is a modern Ayurvedic pharmaceutical company dedicated to restoring health through natural, science-backed remedies.`;
  const aboutText = `Founded in 2024, AYUR is a new-age Ayurvedic pharmaceutical company committed to delivering authentic, potent, and sustainable wellness solutions. Our team comprises seasoned Ayurvedic doctors, modern researchers, and herbal experts who are dedicated to bridging the gap between ancient Indian medicine and modern healthcare.

We are inspired by the rich legacy of Ayurveda, and we strive to adapt its timeless principles for today's lifestyle. With a focus on purity, efficacy, and transparency, we aim to redefine how the world perceives herbal medicine.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
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
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-accent1 rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Bringing Ayurveda Back to Life---One Remedy at a Time"}
        title={"About"}
        text={text}
        textColor={"text-primary"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-primary/80">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
