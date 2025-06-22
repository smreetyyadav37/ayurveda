import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
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
        markers: false,
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
          "Healing begins  <br />
          <span className="font-normal">in nature</span> 
          <span className="italic"> - we simply</span> <br />
          <span className="text-highlight">follow it's lead.</span> "
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
