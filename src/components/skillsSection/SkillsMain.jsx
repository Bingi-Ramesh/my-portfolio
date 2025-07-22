import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaTools,
} from "react-icons/fa"; // Added FaGithub and FaTools
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiExpress, SiDatabricks } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Skill data array
const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "ExpressJS", icon: SiExpress },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "ReactJS", icon: FaReact },
  { skill: "DSA", icon: SiDatabricks },
  { skill: "Java", icon: FaJava },
  { skill: "GitHub", icon: FaGithub },
  { skill: "Postman", icon: FaTools }, // Placeholder icon for Postman
];

// Core subjects array
const coreSubjects = [
  "Operating Systems",
  "Computer Networks",
  "DBMS",
  "OOPs",
  "Software Engineering",
];

// Single skill card component (without pole)
const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-6 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  );
};

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 flex-wrap max-w-[1200px] mx-auto">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          key={index}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  );
};

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
      <p className="text-lg text-center text-white">
        I not only work with these technologies but excel in using them with best
        practices to deliver high-quality results. I have been working with all
        these skills to build my portfolio projects.
      </p>
    </div>
  );
};

const CoreSubjectsSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-10 mb-20 px-4">
      <h3 className="text-4xl text-orange font-bold mb-6 text-center">
        Core Subjects
      </h3>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-white text-lg font-medium ">
        {coreSubjects.map((subject, index) => (
          <motion.li
            key={index}
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.07, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: false, amount: 0.4 }}
            className="bg-darkGrey p-4 rounded-full border-l-4 border-orange hover:bg-orange hover:text-darkGrey transition-all duration-300 cursor-pointer text-center"
          >
            {subject}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Desktop view */}
        <div className="bottom-[50px] absolute left-[42%] -translate-x-[40%] sm:hidden lg:block">
          <AllSkills />
        </div>

        {/* Mobile / Tablet view */}
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>

      {/* Core Subjects Section */}
     
      <CoreSubjectsSection />
    </div>
  );
};

export default SkillsMain;
