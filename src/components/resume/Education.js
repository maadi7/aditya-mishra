import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E in Computer Science"
            subTitle="ISB&M School of Technology, 2020 - Present"
            result="pursuing"
            des="The training provided by universities in order to prepare people to work in various tech sectors around the world."
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Kendriya Vidyalya Thane(2018 - 2020)"
            result="88.8%"
            des=" It provided a nurturing environment that fostered academic excellence, personal growth, and lifelong friendships."
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Wrexa - (feb 2023 - july 2023 / 6 months)"
            result="Remote"
            des="Developed intuitive, user-friendly interfaces using UI/UX design principles and frameworks.
            Designed and implemented RESTful APIs for seamless client-server data exchange.
            Successfully designed and managed MongoDB databases for web applications."
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education