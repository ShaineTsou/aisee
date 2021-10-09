import Particles from "react-tsparticles";
import particlesOptions from "./particles-options.json";

const ParticlesBackground = () => {
  return <Particles id="tsparticles" options={particlesOptions} />;
};

export default ParticlesBackground;
