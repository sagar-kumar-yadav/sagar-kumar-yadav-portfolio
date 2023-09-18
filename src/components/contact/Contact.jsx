import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_21b6rq1",
        "template_o0o0lyn",
        form.current,
        "GKY_Wb0c_ovV1L12P"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact_con">
      <div className="contact_container">
        <div className="contact_me_section">
          <span className="contact_me_header">Contact ME</span>
          <span className="contact_me_para">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </div>

        <div className="contact_form_cont">
          <form ref={form} className="contact__form" onSubmit={sendEmail}>
            <div className="contact_form_field">
              <label className="contact_form_label">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact_form_input"
                name="user_name"
                id="name"
              />
            </div>
            <div className="contact_form_field">
              <label className="contact_form_label">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact_form_input"
                name="user_email"
                id="email"
              />
            </div>
            <div className="contact_form_field">
              <label className="contact_form_label">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                className="contact_form_input"
              ></textarea>
            </div>
            {/* <button type="submit" value="Send" className="submitButton">
              Submit
            </button> */}
            <div className="submit_btn_cont">
              <button type="submit" value="Send" className="button bg-orange-700 text-lg text-white font-bold rounded-md py-3 px-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
