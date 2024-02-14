import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import {  SiNextdotjs, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span  className="bannerIcon">
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <SiMongodb />
             
            </span>
            <span className="bannerIcon">
              <SiExpress/>
           
            </span>
            <span className="bannerIcon">
            <FaReact />
            
            </span>
            <span className="bannerIcon">
            <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media