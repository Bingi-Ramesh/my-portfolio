import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* Profile Image */}
      <img
        src="../../public/images/me.jpeg"
        alt="Abdelrahman Qassem"
        className="max-h-[430px] w-auto rounded-full"
      />

      {/* Animated Oval Background */}
      <div className="absolute -z-20 flex justify-center items-center">
        <div className="w-[350px] h-[480px] border-[12px] border-cyan rounded-full blur-md animate-[spin_20s_linear_infinite] animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
