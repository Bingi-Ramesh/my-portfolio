import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] items-center"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row gap-10 md:items-start md:text-left text-center">
          {/* About Paragraph */}
          <div className="flex-1">
            <h2 className="text-6xl text-cyan mb-10">About Me</h2>
            <p>
            I'm Bingi Ramesh, a full-stack developer with a strong interest in solving real-world problems through technology. I primarily work with the MERN stack (MongoDB, Express.js, React, Node.js) and have experience in both frontend and backend development. I’m committed to writing clean, efficient code and constantly expanding my skills through continuous learning and real-world application.
            </p>
          </div>

          {/* Education Section */}
          <div className="flex-1 mt-6 md:mt-16">
            <h3 className="text-2xl font-semibold text-orange mb-4">Education</h3>
            <ul className="list-disc ml-6 text-sm text-gray-800 space-y-2">
              <li>
                <strong>Rajiv Gandhi University of Knowledge Technologies (RGUKT), RK Valley</strong> – B.Tech in Computer Science, 2026.
              </li>
              <li>
                <strong>Rajiv Gandhi University of Knowledge Technologies (RGUKT), RK Valley</strong> – Pre-University Course (MBiPC), CGPA: 9.56
              </li>
              <li>
                <strong>Gowtham E.M High School</strong> – Scored 595/600
              </li>
            </ul>
          </div>
        </div>

        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer self-start">
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
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
