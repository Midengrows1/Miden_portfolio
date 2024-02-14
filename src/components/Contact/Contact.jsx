import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import s from "./contact.module.css";
import { motion } from "framer-motion";
import { Button } from "@components";
import clsx from "clsx";
const Contact = ({ mainClass, variants }, ref) => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const form = useRef(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_izs2iup",
        "template_bxrurw8",
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
    setFormData({
      username: "",
      email: "",
    });
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
              value={formData.username}
              onChange={handleChange}
              className={s.form_input}
            />
            <label
              htmlFor="username"
              className={clsx(s.form_label, {
                [s.active_input]: formData.username != "",
              })}
            >
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
              value={formData.email}
              onChange={handleChange}
              className={s.form_input}
            />
            <label
              htmlFor="email"
              className={clsx(s.form_label, {
                [s.active_input]: formData.email != "",
              })}
            >
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
