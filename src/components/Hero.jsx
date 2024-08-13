import profilePic from "../assets/profilePic.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf"

const containerVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: delay },
  },
});

const Hero = () => {
  return (
    <section id="home" className="border-b border-neutral-900 mb-4 lg:mb-3.5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start pt-10 lg:pt-20">
            <motion.h1
              variants={containerVariants(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Anand K C
            </motion.h1>
            <motion.span
              variants={containerVariants(0.5)}
              initial="hidden"
              animate="visible"
              className="inline-flex animate-text-gradient bg-gradient-to-r from-pink-500 via-sky-400 to-purple-500 bg-[200%_auto] bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.div
              variants={containerVariants(1)}
              initial="hidden"
              animate="visible"
              className="my-10 w-full flex lg:justify-start justify-center flex-wrap"
            >
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button
                  className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] m-2"
                  aria-label="Contact Me"
                >
                  <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                            bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  />
                  <span
                    className="inline-flex h-full w-full cursor-pointer hover:opacity-85
                            items-center justify-center rounded-full bg-gray-950 px-8 transition ease 
                            duration-300 py-1 lg:text-md text-sm font-medium text-gray-50 backdrop-blur-3xl"
                  >
                    Contact Me
                  </span>
                </button>
              </Link>
              <a download="Resume" href={resume}>
                <button
                  className="transition-background inline-flex h-14 lg:text-md
                          items-center justify-center rounded-full border border-gray-800 text-sm
                          bg-gradient-to-r from-gray-100 via-[#c7d2fe] to-[#8678f9] 
                          bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-gray-950 
                          duration-500 hover:bg-[100%_200%] m-2"
                  aria-label="Get Resume"
                >
                  Get Resume
                </button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="rounded-lg border border-slate-200"
              src={profilePic}
              alt="Anand KC"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
