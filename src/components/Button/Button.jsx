import { forwardRef } from "react";
import s from "./button.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
const Button = forwardRef(({ mainClass, icon, children }, ref) => (
  <motion.button ref={ref} className={clsx(s.main_btn, mainClass)}>
    {children}
  </motion.button>
));
export default Button;
export const Mbutton = motion(Button);
