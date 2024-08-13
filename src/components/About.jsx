import aboutImg from "../assets/aboutImage.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const fadeInVariants = (direction = 'left', delay = 0) => ({
  hidden: {
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: delay },
  },
});

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-900 pb-4 lg:pb-14">
      <h2 className="my-14 text-center text-4xl font-bold">
        About
        <span className="text-purple-300"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              variants={fadeInVariants('left', 0)}
              initial="hidden"
              whileInView="visible"
              className="rounded-lg border border-slate-400"
              src={aboutImg}
              alt="A picture of Anand K C"
              width={500}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              variants={fadeInVariants('right', 0)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-xl py-6 text-md text-gray-400"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
