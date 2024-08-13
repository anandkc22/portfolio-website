import { CONTACT, LINKS } from "../constants";
import { ACCESS_KEY } from "../constants";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaFacebookSquare,
} from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="border-b border-neutral-900 lg:pt-14 pb-4 lg:pb-20">
      <h2 className="text-center text-4xl mb-14 font-bold">Get in Touch</h2>
      <div className="flex flex-wrap w-full lg:px-16">
        <div className="lg:w-1/2 pb-14 flex flex-col lg:justify-center">
          <motion.h1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl lg:text-3xl mb-5 font-bold bg-gradient-to-bl from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-tight"
          >
            Let's Talk
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm max-w-lg mb-5"
          >
            {CONTACT.description}
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex gap-5 my-3"
          >
            <MdEmail aria-label="Email" className="text-3xl text-slate-300" />
            <p className="text-md pt-1 inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
              {CONTACT.email}
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-5 my-3"
          >
            <BiPhone aria-label="Phone" className="text-3xl text-slate-300" />
            <p className="text-md pt-1 inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
              {CONTACT.phoneNo}
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-5 my-3"
          >
            <GoLocation aria-label="Location" className="text-3xl text-slate-300" />
            <p className="text-md pt-1 inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
              {CONTACT.address}
            </p>
          </motion.div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:w-1/2 w-full flex flex-col gap-5 lg:px-3"
        >
          <motion.label
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-slate-200 text-sm"
            htmlFor="name"
          >
            Your Name
          </motion.label>
          <motion.input
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block h-16 w-full text-sm rounded-md border border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] bg-origin-border px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
            placeholder="Enter your name"
            name="name"
            id="name"
            required
          />
          <motion.label
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-slate-200 text-sm"
            htmlFor="email"
          >
            Your Email
          </motion.label>
          <motion.input
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="block h-16 w-full text-sm rounded-md border border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] bg-origin-border px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
            required
          />
          <motion.label
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-slate-200 text-sm"
            htmlFor="message"
          >
            Your Message
          </motion.label>
          <motion.textarea
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="block w-full text-sm rounded-md border border-slate-800 bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] bg-origin-border px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
            placeholder="Enter your message"
            rows={8}
            name="message"
            id="message"
            required
          />
          <motion.button
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            type="submit"
            className="w-36 text-sm self-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-medium rounded-lg px-5 py-2.5 text-center hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50"
          >
            Submit
          </motion.button>
        </form>
      </div>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:hidden lg:hidden border-b border-slate-500 pt-8"
      />
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col w-full md:hidden lg:hidden items-center py-4"
      >
        <h3 className="text-md font-semibold pb-6">Connect with Me</h3>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <a href={LINKS.linkedin} aria-label="LinkedIn">
            <FaLinkedin className="transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </a>
          <a href={LINKS.github} aria-label="GitHub">
            <FaGithub className="transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </a>
          <a href={LINKS.facebook} aria-label="Facebook">
            <FaFacebookSquare className="transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </a>
          <a href={LINKS.instagram} aria-label="Instagram">
            <FaInstagram className="transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </a>
          <a href={LINKS.discord} aria-label="Discord">
            <FaDiscord className="transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
