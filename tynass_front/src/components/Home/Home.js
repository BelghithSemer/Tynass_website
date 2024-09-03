import React from 'react';
import MainSection from './MainSection'; // Import MainSection component
import AboutSection from './AboutSection'; // Import AboutSection component
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import StoriesSection from './StoriesSection';
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
const Home = () => {
  return (
    <>
      
      <MainSection />
      <AboutSection />
      <AnimatedSection />
      
      <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>


        <StoriesSection/>
       
      

    </>
  );
};

export default Home;
