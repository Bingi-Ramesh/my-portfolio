import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.75,
        delay,
      },
    },
  };
};

const experiences = [
  {
    title: "Web Developer Intern",
    company: "NeuroNexus Innovations",
    duration: "1 Month",
  },
  {
    title: "Team Lead",
    company: "Aadhya Hackathon2.0 2k25",
    duration: "",
  },
  {
    title: "NSS Volunteer",
    company: "NSS",
    duration: "2 Years",
  },
  {
    title: "Representative",
    company: "Helping Hand Organisation",
    duration: "2 Years",
  },
];

const ExperienceCard = ({ title, company, duration }) => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={fadeIn("up", 0.2)}
    whileHover={{ scale: 1.05 }}
    className="bg-[#2d1f1b] text-white border-4 border-orange-500 rounded-2xl p-6 transition-all duration-300 hover:bg-[#ff6a00]"
  >
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    <p className="text-sm mb-1">{company || "-"}</p>
    <p className="text-xs">{duration || "-"}</p>
  </motion.div>
);

const ExperienceMain = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-cyan-600 mb-12">My Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceMain;
