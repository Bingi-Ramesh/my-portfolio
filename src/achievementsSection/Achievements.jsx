import { motion } from "framer-motion";

const achievements = [
  {
    title: "Web Development Internship",
    description:
      "Completed internship at NeuroNexus Innovations, worked on full-stack web development using React and Node.js.",
  },
  {
    title: "DSA in Java - GeeksforGeeks",
    description:
      "Certified in Data Structures & Algorithms using Java by GeeksforGeeks.",
  },
  {
    title: "NSS Volunteer",
    description:
      "2-year contribution to National Service Scheme (NSS) activities including camps and social outreach.",
  },
  {
    title: "Smart India Hackathon 2025",
    description:
      "Participated in SIH 2025 and built a scalable solution for real-world problems using MERN stack.",
  },
  {
    title: "Solved 500+ DSA Problems",
    description:
      "Solved over 500 DSA problems in Java on GeeksforGeeks and LeetCode.",
  },
  {
    title: "Coding Contests Participation",
    description:
      "Attended various national-level online coding contests on GFG and LeetCode.",
  },
];

const fadeFrom = (direction = "left", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -150 : 150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      type: "spring",
      duration: 0.6,
    },
  },
});

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 sm:px-8 md:px-16 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-cyan-600 mb-12">
        Achievements
      </h2>
      <div className="space-y-6 flex flex-col items-center">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeFrom(index % 2 === 0 ? "left" : "right", index * 0.2)}
            className="w-2/3 mx-auto border border-gray-300 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-1">{ach.title}</h3>
            <p className="text-sm text-gray-700">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
