import logo from "../assets/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, LINKS } from "../constants";
import { Link } from "react-scroll";
import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaFacebookSquare,
} from "react-icons/fa";


const SocialIcon = ({ href, Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <Icon className="transition-transform duration-300 hover:scale-150 cursor-pointer" />
  </a>
);

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");

  const toggleMenu = () => setOpen(!open);

  const toggleActiveClass = (name) => setActive(name);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".navbar-menu")) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="lg:mb-10 flex items-center justify-between py-4">
      <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <motion.img
          initial={{ y: 0, opacity: 1, scale: 1 }}
          whileHover={{ y: -10, opacity: 0.5, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="mx-2 lg:w-36 w-24 cursor-pointer"
          src={logo}
          alt="Logo"
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <ul className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li
                onClick={() => toggleActiveClass(item.href)}
                className="hover:scale-90 transition-transform duration-300 cursor-pointer"
              >
                <p className="pb-1 text-lg">{item.label}</p>
                {item.href === active && (
                  <div className="h-[3px] animate-border-width rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>

      <div className="hidden lg:flex">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="m-8 flex items-center gap-4 lg:text-3xl"
        >
          <SocialIcon href={LINKS.linkedin} Icon={FaLinkedin} label="LinkedIn" />
          <SocialIcon href={LINKS.github} Icon={FaGithub} label="GitHub" />
          <SocialIcon href={LINKS.facebook} Icon={FaFacebookSquare} label="Facebook" />
          <SocialIcon href={LINKS.instagram} Icon={FaInstagram} label="Instagram" />
          <SocialIcon href={LINKS.discord} Icon={FaDiscord} label="Discord" />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="lg:hidden"
      >
        <motion.button
          whileTap={{ rotate: 30, scale: 0.5 }}
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-menu fixed w-1/2 top-20 right-5 z-20 backdrop-blur-3xl rounded-xl py-5 flex flex-col items-center lg:hidden"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ duration: 0.8 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <div key={index} className="text-center py-4">
                  <Link
                    activeClass="active"
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <li
                      onClick={() => {
                        toggleActiveClass(item.href);
                        setOpen(false);
                      }}
                      className="pb-1"
                    >
                      <p>{item.label}</p>
                    </li>
                    {item.href === active && (
                      <div className="h-[1px] animate-border-width rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    )}
                  </Link>
                </div>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
