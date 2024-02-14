import React from 'react'
import Title from '../layouts/Title'
import { social, dechat, crypto, avax2, ui, gym } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social"
          des="Full-stack social media platform for global chatting, posting, liking, and following. Built with React, Material-UI, MongoDB, Express, Node.js, and Socket."
          src={social}
          demo="https://isocial.onrender.com"
          code="https://github.com/maadi7?tab=repositories&q=social&type=&language=&sort="
        />
        <ProjectsCard
          title="Avaxgods"
          des="Web3 NFT Card Game on Ethereum. React, TypeScript, Tailwind CSS. Multiplayer battles, Solidity, Hardhat. Create/join multiple battlegrounds."
          src={avax2}
          demo="https://web3-game.netlify.app/"
          code="https://github.com/maadi7/web3-cardGame"
        />
        <ProjectsCard
          title="DeChat"
          des="Decentralized chat on Ethereum with React. Enables secure web3 chatting via wallet addresses. Ideal for private organizations or governments."
          src={dechat}
          demo="https://chat-web3-27sh.vercel.app/"
          code="https://github.com/maadi7/chat-web3"
        />
        <ProjectsCard
          title="landing page"
          des="showcasing my UI/UX skills. Highlights include responsive design, custom React components, and user-centered principles for optimal user experience."
          src={ui}
          demo="https://modern-ui-ux-landingpage.netlify.app/"
          code="https://github.com/maadi7/modern_ui_ux"
        />
        <ProjectsCard
          title="Gym"
          des="E-gym, meticulously crafted using Rapid API, Material UI, and React. Collection of exercises and tutorials seamlessly integrated with YouTube videos."
          src={gym}
          demo="https://harmonious-llama-af97dc.netlify.app"
          code="https://github.com/maadi7/gym-api-rapid"
        />
        <ProjectsCard
          title="Crypto transfer"
          des="Users can transfer cryptocurrencies and track transactions via an intuitive interface, enhancing user experience. Built primarily with React and Solidity."
          src={crypto}
          demo="https://tradecripto.netlify.app/"
          code="https://github.com/maadi7/cryptotrade"
        />
       
      </div>
    </section>
  );
}

export default Projects