import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactMeMain = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_47smzfw", "template_tjxrjjp", form.current, {
        publicKey: "ySW-Hi1HJU5iDFA1O",
      })
      .then(
        () => {
          setSuccess("✅ Message sent successfully!");
          setTimeout(() => {
            setSuccess("");
            setName("");
            setEmail("");
            setMessage("");
          }, 3000);
        },
        (error) => {
          console.error("Email send failed:", error);
          setSuccess("❌ Failed to send. Try again.");
        }
      );
  };

  const SingleInfo = ({ text, Icon }) => (
    <div className="flex gap-4 items-center justify-start">
      <Icon className="text-2xl" />
      <p>{text}</p>
    </div>
  );

  const SingleContactSocial = ({ Icon, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-2xl h-12 w-12 border border-orange text-orange rounded-full flex items-center justify-center hover:bg-orange hover:text-white transition"
    >
      <Icon />
    </a>
  );

  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full">
          <div>
            <h2 className="text-orange text-3xl mb-4">Get In Touch</h2>
            <p>
              Feel free to reach out if you’d like to collaborate.
              <br />
              You are just a few clicks away!
            </p>
          </div>

          <div>
            <p className="text-cyan">{success}</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="h-12 rounded-lg bg-lightBrown px-2"
                value={name}
                onChange={handleName}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="h-12 rounded-lg bg-lightBrown px-2"
                value={email}
                onChange={handleEmail}
              />
              <textarea
                name="message"
                rows="9"
                placeholder="Message"
                required
                className="rounded-lg bg-lightBrown p-2"
                value={message}
                onChange={handleMessage}
              />
              <button
                type="submit"
                className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <img
            src="/images/email-image.png" // Ensure image is in public/images/
            alt="email"
            className="max-w-[250px]"
          />
          <div className="flex flex-col gap-4">
            <SingleInfo text="rameshyadavbingi776@gmail.com" Icon={HiOutlineMail} />
            <SingleInfo text="+91 9392612161" Icon={FiPhone} />
            <SingleInfo text="India" Icon={IoLocationOutline} />
          </div>
          <div className="flex gap-4">
            <SingleContactSocial link="https://www.linkedin.com/in/bingi-ramesh-02b754280/" Icon={FaLinkedinIn} />
            <SingleContactSocial link="https://github.com/Bingi-Ramesh" Icon={FiGithub} />
            <SingleContactSocial link="https://www.instagram.com/bingi_ramesh_yadav/" Icon={FaInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
