import { useState } from "react";
import s from "./header.module.css";
import clsx from "clsx";
import { Button } from "@components";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const showTitle = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "auto",
      opacity: 1,
    },
  };
  const [menuactive, setMenuActive] = useState(false);
  // console.log(menuactive);
  return (
    <div className={s.header_container}>
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
            className={clsx(s.header_burger, { [s.burger_active]: menuactive })}
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
            exit={{ opacity: 0, height: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              type: "spring",
              mass: 0.4,
              damping: 10,
            }}
            style={{ overflow: "hidden" }}
            className={clsx(s.header_aside)}
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
                <Button mainClass={clsx(s.burger_button)}>Contact</Button>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
