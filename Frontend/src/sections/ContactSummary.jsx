import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Commitment",
    "Excellence",
    "Dedication",
    "Partnering",
    "Well-being",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16 bg-primary"
    >
      <Marquee items={items} className="text-accent3 bg-primary" />

      <div className="overflow-hidden font-light text-center contact-text-responsive text-dark">
        <p>
          "Our commitment is to elevate <br />
          <span className="font-normal">the quality of life</span>
          <span className="italic"> — by becoming </span> <br />
          <span className="text-highlight">a trusted partner.</span> "
        </p>
      </div>

      <Marquee
        items={items2}
        reverse={true}
        className="text-dark bg-transparent border-y-2 border-accent3"
        iconClassName="stroke-highlight stroke-2 text-accent1"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
