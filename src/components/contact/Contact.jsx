import "./contact.css";
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset(); // ✅ Reset form after success
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSuccess(false);
          setError(true);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact">
      <div className="cSection">
        <motion.div
          ref={ref}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <form ref={form} onSubmit={sendEmail}>
            <motion.h1 variants={listVariant} className="cTitle">
              Let's Keep in Touch
            </motion.h1>

            <motion.div variants={listVariant} className="formItem">
              <label>Name</label>
              <input type="text" name="user_username" placeholder="John Doe" />
            </motion.div>

            <motion.div variants={listVariant} className="formItem">
              <label>Email</label>
              <input type="email" name="user_email" placeholder="john@gmail.com" />
            </motion.div>

            <motion.div variants={listVariant} className="formItem">
              <label>Message</label>
              <textarea
                rows={10}
                name="user_message"
                placeholder="Write your message..."
              ></textarea>
            </motion.div>

            <motion.button variants={listVariant} className="formButton">
              Send
            </motion.button>

            {success && <span>Your message has been sent! </span>}
            {error && <span>Something went wrong! </span>}
          </form>
        </motion.div>
      </div>

      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
