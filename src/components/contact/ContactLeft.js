import React, {useRef} from 'react'
import {  FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";


const ContactLeft = () => {

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aditya Mishra</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        If you'd like to connect or have any inquiries, feel free to reach out.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8108371526</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mishraadi733@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a target='_blank' href="https://github.com/maadi7">
              <FaGithub />
              </a>
          </span>
          <span className="bannerIcon">
          <a target='_blank' href="https://www.linkedin.com/in/aditya-mishra-800222215/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
          <a target='_blank' href="https://twitter.com/madi032002">
              <FaTwitter />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft