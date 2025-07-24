import { motion } from "framer-motion";

import { fadeIn } from "../../framerMotion/variants";

import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
const ProjectsMain = () => {
  const projects = [
    {
      name: "LMS Connect",
      year: "Full-stack MERN application enabling users to issue, renew, return, and request books; staff manage inventoryand donation requests.",
      align: "right",
      image: "images/library.webp",
      link: "https://mini-project-library-donation.vercel.app/",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
    {
      name: "Hospital Manamemant System",
      year: "Multi-role platform for patients, doctors, receptionists, and admins; features appointment booking, billing, andreporting.Integrated ratings and reviews;",
      align: "left",
      image: "images/hospital.webp",
      link: "https://hospital-frontend-btec.onrender.com/",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
    {
      name: "Event Managemant System",
      year: "Led frontend development during a college hackathon; implemented CRUD operations on events, volunteer registration & allotment, ratings and reviews.",
      align: "right",
      image: "images/library.webp",
      link: "https://github.com/Bingi-Ramesh/Event-Management-System",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
  ];

  const smallProjects = [
    {
      name: "Calculator",
      link: "https://bingi-ramesh.github.io/simple-calculator/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
    {
      name: "Stopwatch",
      link: "https://bingi-ramesh.github.io/stop-watch/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
    {
      name: "Password Hiding",
      link: "https://bingi-ramesh.github.io/password-hiding-showing/",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
    {
      name: "Password Generator",
      link: "https://github.com/Bingi-Ramesh/password-generator",
      technology: "HTML, CSS, JS",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
    {
      name: "Simple E-Commerce",
      link: "https://github.com/Bingi-Ramesh/simple-ecommerce",
      technology: "React, CSS",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
    {
      name: "Quiz App",
      link: "https://github.com/Bingi-Ramesh/quiz-app",
      technology: "React, CSS",
      github:"https://github.com/Bingi-Ramesh/simple-calculator"
    },
  ];
  const SmallProjectsSection = () => {
    return (
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-24"
      >
        <h2 className="text-4xl text-cyan mb-6 text-center">Small Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-cyan rounded-2xl p-5 bg-darkGrey hover:bg-cyan text-white hover:text-darkGrey shadow-lg hover:shadow-cyan transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-bold">{proj.name}</h3>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                    className="text-xl hover:text-black transition-colors"
                  >
                    <BsGithub />
                  </a>
                )}
              </div>
              <p className="text-sm opacity-80">{proj.technology}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-2 inline-block underline hover:text-orange"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  const ProjectsText = () => {
    return (
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Projects</h2>
        <p className="text-lg text-center">
          I have worked on a variety of web development projects, ranging from
          responsive websites for small businesses to full-stack applications
          and complex front-end interfaces.
        </p>
      </div>
    );
  };



  const SingleProject = ({ name, year, align, image, link, github }) => {
    return (
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
          align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end sm:flex-col`}
      >
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
          <h2
            className={`text-xl font-thin text-white font-special sm:text-center ${
              align === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            {year}
          </h2>
  
          <div
            className={`flex items-center gap-4 mt-2 text-cyan hover:text-orange transition-all duration-500 sm:justify-center ${
              align === "left" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              View <BsFillArrowUpRightCircleFill />
            </a>
  
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
                title="GitHub Repository"
              >
                <BsGithub />
              </a>
            )}
          </div>
        </div>
  
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
          <img src={image} alt="website image" className="w-full h-full" />
        </div>
      </motion.div>
    );
  };
  

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
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
      <SmallProjectsSection />

    </div>
  );
};

export default ProjectsMain;
