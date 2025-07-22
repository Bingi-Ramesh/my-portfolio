import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "LMS Connect",
    year: "May2025",
    align: "right",
    image: "images/library.webp",
    link: "https://mini-project-library-donation.vercel.app/",
  },
  {
    name: "Hospital Manamemant System",
    year: "January 2025",
    align: "left",
    image:"images/hospital.webp",
    link: "https://hospital-frontend-btec.onrender.com/",
  },
  {
    name: "Event Managemant System",
    year: "October2024",
    align: "right",
    image:"images/library.webp",
    link: "https://github.com/Bingi-Ramesh/Event-Management-System",
  },
 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
