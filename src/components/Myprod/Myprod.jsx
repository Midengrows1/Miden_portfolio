import React, { forwardRef } from "react";
import s from "./myprod.module.css";
import clsx from "clsx";
import { Slider } from "@components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faPager } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Myprod = forwardRef(({}, ref) => {
  return (
    <motion.div className={s.projects_item} ref={ref}>
      <div className={s.projects_slider}>
        <Slider></Slider>
      </div>
      <div className={clsx(s.project_item_desc, "font-Syne")}>
        <h4>Personal Journal</h4>
        <p>
          A personal journal is an excellent tool for regulating your thoughts
          and memories, always at your fingertips. It's the perfect solution for
          people who enjoy jotting down notes and snippets of memories
          throughout their day, allowing them to later savor those memories.
        </p>
        <ul className={clsx(s.projects_item_links, "font-Rubik")}>
          <li>
            <a
              href="https://github.com/Midengrows1/Personal_journal"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              Source code
              <FontAwesomeIcon
                icon={faChevronRight}
                className={s.rightChevron}
                size="xs"
              />
            </a>
          </li>
          <li>
            <a
              href="https://personal-journal-client.vercel.app/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faPager} />
              View Page
              <FontAwesomeIcon
                icon={faChevronRight}
                className={s.rightChevron}
                size="xs"
              />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
});

export default Myprod;
export const Mmyprod = motion(Myprod);
