import React from "react";
import s from "./about.module.css";
import clsx from "clsx";
import { Header } from "@components";
import { motion } from "framer-motion";
import "animate.css";
const About = () => {
  const showText = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.5 },
    }),
  };
  return (
    <div className={clsx(s.about, "container")}>
      <Header></Header>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0, 0.3, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 8,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
        className={clsx(s.about_title, "page_top")}
      >
        <div>
          <h1 className="  page_title">About me</h1>
          <span className="page_subtitle">Little Brief About Myself</span>
        </div>
      </motion.section>
      <section className={s.about_description}>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.2, once: true }}
          className={s.about_description_top}
        >
          <motion.h2 variants={showText} custom={1}>
            Developer with optimism, coffee with enthusiasm.
          </motion.h2>
          <motion.p variants={showText} custom={2}>
            Experienced frontend developer with 2 years of expertise in building
            websites and applications. Proficient in JavaScript (ES6), HTML,
            CSS, Tailwind, SCSS, NPM, and GIT. Well-versed in working with APIs.
            Familiar with the React and React Native environments, as well as
            knowledgeable in the Vue framework, Nuxt.js, Node.js, and MongoDB.
            In addition to technical skills, I possess a B2 pre-advanced level
            of English, as evidenced by a 6.5 overall score on the IELTS exam. I
            am committed to task completion and strive to see projects through
            to the end. I am a highly communicative and sociable individual who
            enjoys being at the forefront of events.
          </motion.p>
        </motion.div>
        <div className={s.about_description_bottom}></div>
      </section>
    </div>
  );
};

export default About;
