import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "./contact.module.css";
import { motion } from "framer-motion";
import { Button } from "@components";
import clsx from "clsx";
const Contact = ({ mainClass, variants }, ref) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_izs2iup",
        "template_ios1j68",
        form.current,
        "clx9vMAshSregec0c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className={s.form_contact}>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amiunt: 0.1, once: true }}
        className={s.form_left}
      >
        <div className={s.form_item}>
          <div className={s.form_relative_item}>
            <input
              id="username"
              name="username"
              type="text"
              className={s.form_input}
            />
            <label for="username" className={s.form_label}>
              Name
            </label>
          </div>
        </div>
        <div className={s.form_item}>
          <div className={s.form_relative_item}>
            <input
              id="email"
              name="email"
              type="email"
              className={s.form_input}
            />
            <label for="email" className={s.form_label}>
              E-mail
            </label>
          </div>
        </div>
        <Button
          type="submit"
          value="Send"
          mainClass={clsx(mainClass, s.form_btn)}
        >
          Send
        </Button>
      </motion.div>
      <div className={s.form_right}>
        <label>Message</label>
        <textarea name="message" />
      </div>
    </form>
  );
};

export default Contact;
