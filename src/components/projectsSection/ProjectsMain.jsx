import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  const projects = [
    {
      name: "LMS Connect",
      year: "Full-stack MERN application enabling users to issue, renew, return, and request books; staff manage inventoryand donation requests.",
      align: "right",
      image: "images/library.webp",
      link: "https://mini-project-library-donation.vercel.app/",
    },
    {
      name: "Hospital Manamemant System",
      year: "Multi-role platform for patients, doctors, receptionists, and admins; features appointment booking, billing, andreporting.Integrated ratings and reviews;",
      align: "left",
      image: "images/hospital.webp",
      link: "https://hospital-frontend-btec.onrender.com/",
    },
    {
      name: "Event Managemant System",
      year: "Led frontend development during a college hackathon; implemented CRUD operations on events, volunteer registration & allotment, ratings and reviews.",
      align: "right",
      image: "images/library.webp",
      link: "https://github.com/Bingi-Ramesh/Event-Management-System",
    },
  ];

  const smallProjects = [
    {
      name: "Calculator",
      link: "https://github.com/Bingi-Ramesh/calculator",
      technology: "HTML, CSS, JS",
    },
    {
      name: "Stopwatch",
      link: "https://github.com/Bingi-Ramesh/stopwatch",
      technology: "HTML, CSS, JS",
    },
    {
      name: "Password Hiding",
      link: "https://github.com/Bingi-Ramesh/password-hiding",
      technology: "HTML, CSS, JS",
    },
    {
      name: "Password Generator",
      link: "https://github.com/Bingi-Ramesh/password-generator",
      technology: "HTML, CSS, JS",
    },
    {
      name: "Simple E-Commerce",
      link: "https://github.com/Bingi-Ramesh/simple-ecommerce",
      technology: "React, CSS",
    },
    {
      name: "Quiz App",
      link: "https://github.com/Bingi-Ramesh/quiz-app",
      technology: "React, CSS",
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
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-cyan rounded-2xl p-5 bg-darkGrey hover:bg-cyan text-white hover:text-darkGrey shadow-lg hover:shadow-cyan transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-1">{proj.name}</h3>
              <p className="text-sm opacity-80">{proj.technology}</p>
            </motion.a>
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

  const SingleProject = ({ name, year, align, image, link }) => {
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
          <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
          <h2
            className={`text-xl font-thin text-white font-special sm:text-center ${
              align === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            {year}
          </h2>
          <a
            href={link}
            className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
              align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            View <BsFillArrowUpRightCircleFill />
          </a>
        </div>
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">

        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
  <img src={image} alt="website image" className="w-full h-full" />
</div>
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
            link={project.link}
          />
        ))}
      </div>
      <SmallProjectsSection />

    </div>
  );
};

export default ProjectsMain;
