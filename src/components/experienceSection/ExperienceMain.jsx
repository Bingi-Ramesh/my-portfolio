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
    image: "/images/intern.jpeg",
    description:
      "Worked on MERN stack development, contributing to frontend  features and building responsive, user-friendly applications.",
  },
  {
    title: "Team Lead",
    company: "Aadhya Hackathon 2.0 ",
    duration: "2K25",
    image: "/images/lead.jpeg",
    description:
      "Led a hackathon team, managing tasks, guiding development, and ensuring timely project delivery.",
  },
  {
    title: "NSS Volunteer",
    company: "NSS",
    duration: "2 Years",
    image: "/images/nss.jpeg",
    description:
      "Served 2 years in NSS, leading community service, awareness campaigns, and volunteer activities.",
  },
  {
    title: "Representative",
    company: "Helping Hand Organisation",
    duration: "2 Years",
    image: "/images/hhohr.jpeg",
    description:
      "Organized fundraising events with Helping Hands Organization, gaining teamwork and management skills.",
  },
];

const ExperienceCard = ({ title, company, duration, image, description, index }) => (
  <div className="flex items-center gap-4">
    <motion.div
      initial="hidden"
      whileInView="show"
      whileHover={{ scale: 1.1, rotate: 2, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      variants={fadeIn("up", index * 0.2)}
      className="w-36 h-36 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl shrink-0 transition-all duration-300"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </motion.div>

    <div className="flex-1 bg-[#2d1f1b] text-white rounded-2xl p-4 shadow-md transition-all duration-300 hover:bg-[#f2913d]">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm mb-1">{company || "-"}</p>
      <p className="text-xs mb-2">{duration || "-"}</p>
      <p className="text-sm text-gray-100">{description}</p>
    </div>
  </div>
);

const ExperienceMain = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-8 md:px-16 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-cyan-600 mb-12">
        My Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceMain;
