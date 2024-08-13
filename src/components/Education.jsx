import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { y: 50, scale: 0.8 },
  visible: { y: 0, scale: 1, transition: { duration: 0.5 } },
};

const Education = () => {
  return (
    <section id="education" className="border-b border-neutral-900 mb-4">
      <h2 className="lg:my-12 my-8 text-center text-4xl font-bold">
        Education
      </h2>
      <div>
        {EDUCATIONS.map((edu, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center py-5">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/3 lg:mr-10"
            >
              <img
                src={edu.image}
                alt={`${edu.course} from ${edu.name}`}
                className="rounded-lg lg:h-52 border border-neutral-400"
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-2/3 py-4">
              <motion.h2
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                className="mb-3 text-md font-bold text-neutral-100 tracking-wide"
              >
                {edu.course} -{" "}
                <span className="text-sm text-purple-300">{edu.year}</span>
              </motion.h2>
              <motion.h4
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                className="mb-2 text-sm font-semibold text-neutral-200"
              >
                {edu.name}
              </motion.h4>
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                className="mb-4 text-sm text-neutral-400"
              >
                {edu.description}
              </motion.p>
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                className="mt-4 flex flex-wrap gap-4"
              >
                <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-400">
                  Score: {edu.marks[1]}
                </span>
                <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-400">
                  Grade: {edu.marks[0]}
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
