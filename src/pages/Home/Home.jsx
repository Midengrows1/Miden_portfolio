import s from "./home.module.css";
import { Header, Contact, Button } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Mbutton } from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const showText = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };
  const showTitle = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };
  const imgVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
      top: "3.5rem",
      right: "7rem",
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className={clsx(s.home, "container")}>
      <Header></Header>
      <div className={s.wrapper}>
        <section className={clsx(s.first_screen, "font-Syne")}>
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, position: "absolute" }}
              transition={{ duration: 1, delay: 0.3 }}
              variants={imgVariant}
              className={s.smoke}
            >
              <img src="/img/Vector 8.png" alt="" />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={showTitle}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ overflow: "hidden" }}
              className={s.first_screen_content}
            >
              <h1 initial="hidden">
                Your web, crafted by my code. Leave a mark in the online realm.
              </h1>
              <Button mainClass={s.def_btn}>
                <Link to={"/projects"}>
                  Explore works <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>
              </Button>
            </motion.div>
          </AnimatePresence>
        </section>
        <motion.section className={s.second_screen}>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            className={s.second_left}
          >
            <motion.div className={s.second_left_content}>
              <motion.h2 variants={showText} custom={1} className={s.def_title}>
                Let’s get know about me closer
              </motion.h2>
              <motion.p variants={showText} custom={2}>
                My name is Amir,I'm Frontend Developer with 2 years of
                experience. I'm a self-taught developer with a passion for
                creating beautiful and functional websites. I'm always looking
                for new challenges and opportunities to learn and grow as a
                developer.
              </motion.p>
            </motion.div>
            <Mbutton variants={showText} custom={3} mainClass={s.def_btn}>
              <Link to={"/about"}>Discover More About Me</Link>
            </Mbutton>
          </motion.div>
          <div className={s.second_right}>
            <img src="/img/MYFace2.jpg" alt="" />
          </div>
        </motion.section>
        <section className={s.third_screen}>
          <h2>
            My <strong>Stack</strong>
          </h2>
          <div className={s.third_screen_content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className={clsx(s.third_screen_stack, "font-Syne")}
            >
              <motion.ul
                variants={showText}
                custom={1}
                className={s.third_screen_left}
              >
                <li>
                  <img src="/img/html5-logo.png" alt="" />
                  Html
                </li>
                <li>
                  <img src="/img/css3-logo.png" alt="" />
                  Css
                </li>
                <li>
                  <img src="/img/javascript-logo.png" alt="" />
                  Js
                </li>
                <li>
                  <img src="/img/react-logo.png" alt="" />
                  React-Redux
                </li>
              </motion.ul>
              <motion.ul
                variants={showText}
                custom={2}
                className={s.third_screen_right}
              >
                <li>
                  <img src="/img/vue-logo.png" alt="" />
                  Vue
                </li>
                <li>
                  <img src="/img/pngwing.com.png" alt="" />
                  Tailwindcss
                </li>
                <li>
                  <img src="/img/nodejs-icon-logo.png" alt="" />
                  Node
                </li>
                <li>
                  <img src="/img/MongoDb.png" alt="" />
                  MongoDb
                </li>
              </motion.ul>
            </motion.div>
            <div className={s.third_screen_description}>
              <p>
                Extensive experience in these development technologies ensures
                the effective promotion of your business or personal website.
                Proficient in React, Vue, Tailwind CSS, JavaScript, HTML, CSS,
                Node.js, and MongoDB, I am well-equipped to create dynamic and
                innovative web applications. Ready to provide high-quality
                solutions that support your success in the online space.
              </p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ amount: 0.3, once: true }}
            className={s.contact_form}
          >
            <Contact variants={showTitle} mainClass={s.def_btn}></Contact>
            <div className={s.contact_img}>
              <img src="/img/undraw_fill_form_re_cwyf.svg" alt="" />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;
