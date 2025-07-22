import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Skill data array
const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
];

// Single skill card component
const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

// Skills in circular layout (for large screens)
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
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
    </div>
  );
};

// Skills in grid layout (for small screens)
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

// Skills section heading and description
const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
      <p className="text-lg text-center">
        I not only work with these technologies but excel in using them with best
        practices to deliver high-quality results. I have been working with all
        these skills to build my portfolio projects.
      </p>
    </div>
  );
};

// Decorative image component (if needed elsewhere)
const SkillsCircle = () => {
  return (
    <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] border-2 border-orange overflow-hidden">
      <img src="../../public/images/skills.avif" alt="my skills" />
    </div>
  );
};

// Optional decorative image block
const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative ">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img
        src="../../public/images/subSkills.jpg"
        alt="subSkills image"
        className=""
      />
    </div>
  );
};

// Final combined component
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
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills />
        </div>

        {/* Mobile / Tablet view */}
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
