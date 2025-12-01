import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AyurvedicElements } from "../components/HeroGraphic"; 

const Hero = () => {
  const text = `Samoha Life Science Pvt Ltd is dedicated to enriching lives by providing quality, WHO-GMP approved products to eradicate pain and sufferings, fostering a healthier and happier community.`;

  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen bg-primary">
      <AnimatedHeaderSection
        subTitle={"Committed to Quality. Dedicated to Life."}
        title={"SAMOHA"}
        text={text}
        textColor={"text-dark"}
      />
      
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <AyurvedicElements position={[3, 1, -2]} scale={1.2} /> 
          </Float>
          
          <Environment preset="sunset" background blur={0.5} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
