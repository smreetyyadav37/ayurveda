import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants"; 
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  const text = `Our operations are guided by our Core Values: Respect, Honesty, and Happiness. We are backed by a commitment to WHO-GMP standards and a mission to be your trusted solution provider.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); 

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 100,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        duration: 0.8, 
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="values" className="min-h-screen bg-accent3 rounded-t-4xl"> 
      <AnimatedHeaderSection
        subTitle={"Respect. Honesty. Happiness."}
        title={"Core Values"}
        text={text}
        textColor={"text-primary"}
        withScrollTrigger={true}
      />

      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-primary bg-accent3 border-t-2 border-primary/30" 
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 3}em)`, 
                  marginBottom: `${(servicesData.length - index - 1) * 3}rem`, 
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex items-center">
                      <span className="mr-6 text-lg text-white/30">
                        {String(itemIndex + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
