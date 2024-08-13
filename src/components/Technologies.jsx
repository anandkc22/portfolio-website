import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiMongodb, SiRedux, SiTypescript, SiExpress, SiFirebase } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiHtml5, DiCss3, DiJavascript1, DiJava, DiMysql, DiPhp } from "react-icons/di";
import { motion } from "framer-motion";

const IconCard = ({ icon: Icon, label, color, delay }) => (
  <motion.div
    variants={iconVariants(delay)}
    initial="initial"
    animate="animate"
    className="card relative h-32 w-32 lg:h-36 lg:w-36 cursor-pointer hover:scale-105 transition-transform"
  >
    <div
      className="group relative flex flex-col h-full w-full select-none items-center justify-evenly rounded-2xl border-2 border-gray-900 bg-gradient-to-tr from-gray-950 to-gray-900 text-sm font-light text-gray-300"
      aria-label={label}
    >
      <Icon className={`text-5xl ${color}`} />
      <p className="text-sm text-slate-50">{label}</p>
    </div>
  </motion.div>
);

const iconVariants = (delay) => ({
  whileInView: { rotateY: 0 },
  animate: {
    rotateY: [180, 0],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 3,
      delay: delay,
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-4 lg:pb-24">
      <h2 className="lg:mt-16 mb-16 lg:mb-16 text-center text-4xl font-bold">Technologies</h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        animate={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center lg:px-20 justify-center gap-6"
      >
        <IconCard icon={DiHtml5} label="HTML 5" color="text-orange-600" delay={1} />
        <IconCard icon={DiCss3} label="CSS" color="text-blue-500" delay={2} />
        <IconCard icon={DiJavascript1} label="JavaScript" color="text-yellow-400" delay={3} />
        <IconCard icon={DiPhp} label="PHP" color="text-purple-400" delay={4} />
        <IconCard icon={DiMysql} label="MySQL" color="text-white" delay={5} />
        <IconCard icon={DiJava} label="Java" color="text-red-600" delay={6} />
        <IconCard icon={RiReactjsLine} label="React" color="text-cyan-400" delay={7} />
        <IconCard icon={SiTailwindcss} label="Tailwind CSS" color="text-sky-500" delay={8} />
        <IconCard icon={TbBrandFramerMotion} label="Framer Motion" color="text-gray-500" delay={9} />
        <IconCard icon={SiTypescript} label="TypeScript" color="text-blue-400" delay={10} />
        <IconCard icon={SiRedux} label="Redux" color="text-purple-500" delay={11} />
        <IconCard icon={FaNodeJs} label="Node.js" color="text-green-500" delay={12} />
        <IconCard icon={SiExpress} label="Express.js" color="text-slate-500" delay={13} />
        <IconCard icon={SiMongodb} label="MongoDB" color="text-green-500" delay={14} />
        <IconCard icon={SiFirebase} label="Firebase" color="text-yellow-400" delay={14} />
      </motion.div>
    </div>
  );
};

export default Technologies;
