import s from "./header.module.css";
import clsx from "clsx";
import { Button } from "@components";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
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
        <Button mainClass={s.header_button}>Contact</Button>
      </div>
    </div>
  );
};

export default Header;
