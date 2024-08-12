import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { x: 100, rotateY: 90, opacity: 0 },
  visible: { x: 0, rotateY: 0, opacity: 1, transition: { duration: 1 } },
};

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 pb-4">
      <h2 className="lg:my-20 my-16 text-center text-4xl font-bold">
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center lg:gap-10"
          >
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                className="w-3/4 mb-4 rounded-lg border border-slate-500 cursor-pointer"
                src={project.image}
                alt={`Screenshot of ${project.title}`}
              />
            </motion.div>
            <div className="w-full py-5 max-w-xl lg:w-3/4">
              <motion.h6
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                className="mb-2 text-xl font-semibold text-neutral-100"
              >
                {project.title}
              </motion.h6>
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                className="mb-4 text-neutral-400"
              >
                {project.description}
              </motion.p>
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
