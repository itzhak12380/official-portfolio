import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
function Contact() {
  const [Done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_sn5w0lv",
        "template_ipnsydf",
        form.current,
        "DVbEBkWBTvmxgLT5c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" >
      <div className="w-left"></div>
      <div className="awesome">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="send" className="button" />
          <span>{Done && "Thanks for contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
