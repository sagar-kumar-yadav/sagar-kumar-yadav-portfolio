import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import photo from "../../assets/images/contact.jpg";

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
          toast.success("Email Sent !");
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact_con">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 font-semibold dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Let's talk!
            </h2>
            <div className="">sagarkryadav31@gmail.com</div>
          </div>
          <div className=" w-64 photo_cont">
            <img src={photo} alt="img-here" className="w-[100%] h-[100%] p-4" />
          </div>
        </div>
        <form ref={form} className="space-y-6" onSubmit={sendEmail}>
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded font-semibold text-black"
              required
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              className="w-full p-3 rounded font-semibold text-black"
              required
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              className="w-full p-3 rounded font-semibold text-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-red-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
