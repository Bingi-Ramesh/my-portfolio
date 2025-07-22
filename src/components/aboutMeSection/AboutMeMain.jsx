import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      {/* AboutMeText merged */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
          <h2 className="text-6xl text-cyan mb-10">About Me</h2>
          <p>
          I'm Bingi Ramesh, a full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). I'm passionate about building real-world applications and solving problems through clean, efficient code. I enjoy working on both front-end and back-end development, constantly learning new technologies to stay up-to-date with the ever-evolving web ecosystem. I'm driven by a desire to grow as a developer and contribute to impactful projects that make a difference.
          </p>
          <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              to="projects"
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              My Projects
            </Link>
          </button>
        </div>
      </motion.div>

      {/* AboutMeImage merged */}
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="h-[500px] w-[300px] relative">
          <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
            <img
              src="../../public/images/me.jpeg"
              alt="About Me Image"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
