import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";
import project6 from "../../Assets/Projects/project6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="https://www.terraspaces.io/"
              description="Near protocal's marketplace. I developed the smart contract with Rust. And built the website with Next.js and integrated with smart contract using near-api-js."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.terraspaces.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="https://100days.finance/"
              description="IDO launchpad for astro token. Astro token is rebase one. I developed the smart contract and exchange using traderjoe sdk. And developed the front end with React."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://100days.finance/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="https://app.croxswap.com/"
              description="Next-Gen Staking & Dual Farming Protocal. Build the website with TypeScript and developed the farm, pool, Dual Farm, Grand pool, ICO, Vpot, etc."
              demoLink="https://app.croxswap.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="https://www.privi.store/"
              description="New Age decentralized app store. Developed the front end with React and built the smart contract, integrated with ethers.js"
              demoLink="https://www.privi.store/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="https://mint.marketofzion.com/"
              description="NFT minting website on Fantom. Created and deployed the smart contract to Fantom. And built the website with wallet integration via react."
              demoLink="https://mint.marketofzion.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="https://the-devil-assassin.vercel.app/"
              description="Solana NFT minting website. Built the website with wallet integration via react and web3.js. Developed the smart contract at Solana."
              demoLink="https://the-devil-assassin.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
