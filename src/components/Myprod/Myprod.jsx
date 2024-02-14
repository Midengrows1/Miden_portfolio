import React, { forwardRef } from "react";
import s from "./myprod.module.css";
import clsx from "clsx";
import { Slider } from "@components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faPager } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Myprod = forwardRef(
  ({ text, title, sourceLink, prodLink, images }, ref) => {
    return (
      <motion.div className={s.projects_item} ref={ref}>
        <div className={s.projects_slider}>
          <Slider images={images}></Slider>
        </div>
        <div className={clsx(s.project_item_desc, "font-Syne")}>
          <h4>{title}</h4>
          <p>{text}</p>
          <ul className={clsx(s.projects_item_links, "font-Rubik")}>
            <li>
              <a href={sourceLink} target="_blank">
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
              <a href={prodLink} target="_blank">
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
  }
);

export default Myprod;
export const Mmyprod = motion(Myprod);
