import { useState } from "react";
import s from "./header.module.css";
import clsx from "clsx";
import { Button } from "@components";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const showTitle = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const [menuactive, setMenuActive] = useState(false);
  console.log(menuactive);
  return (
    <div>
      <div className={clsx(s.header, "font-Syne")}>
        <div className={s.header_left}>
          <h1 className={s.header_logo}>Midengrows</h1>
        </div>
        <div className={s.header_right}>
          <nav>
            <ul className={s.header_links}>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About me</NavLink>
              </li>
              <li>
                <NavLink to={"/projects"}>My works</NavLink>
              </li>
            </ul>
          </nav>
          <div
            className={s.header_burger}
            onClick={() => setMenuActive(!menuactive)}
          >
            <span></span>
          </div>
          <Button mainClass={s.header_button}>Contact</Button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {menuactive && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={showTitle}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              type: "spring",
              mass: 0.4,
              damping: 10,
            }}
            style={{ overflow: "hidden" }}
            className={s.header_aside}
            custom={1}
          >
            <nav>
              <ul className={s.header_links_burger}>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About me</NavLink>
                </li>
                <li>
                  <NavLink to={"/projects"}>My works</NavLink>
                </li>
              </ul>
            </nav>
            <Button mainClass={clsx(s.burger_button)}>Contact</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
