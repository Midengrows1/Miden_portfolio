import React from "react";
import s from "./projects.module.css";
import { Header, Myprod } from "@components";
import { Mmyprod } from "../../components/Myprod/Myprod";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Slides } from "../../Slides";

const Projects = () => {
  console.log(Slides);
  return (
    <div className={clsx(s.work, "container", "font-Rubik")}>
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
        className={clsx(s.projects_top, "page_top")}
      >
        <h1 className="page_title">My works</h1>
        <span className="page_subtitle">Showcase About Works</span>
      </motion.section>
      <motion.section className={s.projects_bottom}>
        {Slides.map((i, index) => {
          const { text, title, images, sourcelink, pagelink } = Slides[index];
          return (
            <Mmyprod
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: "linear",
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              text={text}
              title={title}
              sourceLink={sourcelink}
              prodLink={pagelink}
              images={images}
            ></Mmyprod>
          );
        })}
      </motion.section>
    </div>
  );
};

export default Projects;
