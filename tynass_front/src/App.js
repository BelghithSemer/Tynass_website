import React, { useState } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Menu from './components/Menu';
import styled from 'styled-components';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutSection from './components/AboutSection';
import ProjectCard from './components/ProjectCard';
import AnimatedSection from './components/AnimatedSection';
import StoriesSection from './components/StoriesSection';

const AppContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const projects = [
  {
    title: "Farhat Hached VR/Web Experience",
    overview: "The Farhat Hached VR gallery takes users on an immersive virtual reality journey, providing a glimpse into the life, achievements, and rare moments of Farhat Hached. Through a curated collection of rare photos and videos, users can delve into the significant events and contributions of this historical figure.",
    vision: "Immerse users in Farhat Hached's legacy through a captivating VR gallery, offering unique insight into his life and contributions, fostering appreciation and understanding.",
    buttonText: "Try Web Experience",
    imageUrl: "/assets/farhet_hached.png",
    link: "#"
  },
  // Add more projects here
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppContainer>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MainSection />
      <AboutSection/>
      <AnimatedSection></AnimatedSection>
      
      <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    <StoriesSection/>
      <Footer />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </AppContainer>
  );
}

export default App;
