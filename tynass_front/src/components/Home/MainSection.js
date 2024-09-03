import React, { useEffect } from 'react';
import styled from 'styled-components';

const MainSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  background-color: black;
  padding: 50px 20px;
  min-height: 100vh;
  color: white;

  @media (max-width: 768px) {
    padding: 20px; /* Reduce padding on mobile */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack content */
    align-items: center; /* Center align on mobile */
    margin-top: 20px; /* Reduce margin on mobile */
  }
`;

const TextContainer = styled.div`
  max-width: 50%;
  text-align: left;
  padding-right: 20px;

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on mobile */
    padding-right: 0; /* Remove padding */
    text-align: center; /* Center text on mobile */
  }
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 32px; /* Smaller font size on mobile */
  }

  span {
    color: #ff0054;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin: 20px 0;
  
  @media (max-width: 768px) {
    font-size: 16px; /* Smaller font size on mobile */
  }

  color: #888;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons on mobile */
    align-items: center; /* Center buttons */
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.bgColor || 'white'};
  color: ${(props) => (props.bgColor ? 'white' : 'black')};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width buttons on mobile */
    padding: 12px; /* Adjust padding */
  }
`;

const SplineContainer = styled.div`
  width: 60%; /* Increased width */
  height: 800px; /* Increased height */
  margin-top: -120px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    height: 500px; /* Adjust height for mobile */
    margin-top: 20px; /* Adjust margin */
  }
`;

const MainSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.0.91/build/spline-viewer.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MainSectionContainer>
      <ContentContainer>
        <TextContainer>
          <Title>
            XR <span>Experiences</span> & Custom Projects <span>Development</span>
          </Title>
          <Subtitle>
            We specialize in developing cutting-edge, customized, and innovative
            experiences for businesses. Utilizing XR for Metaverse and immersive
            Experiences.
          </Subtitle>
          <ButtonContainer>
            <Button bgColor="#ff0054">Contact</Button>
            <Button bgColor="#3b00ff">Our Business Proposal</Button>
          </ButtonContainer>
        </TextContainer>
        <SplineContainer>
          <spline-viewer url="https://prod.spline.design/Q3Cpf2pSDDj1f1UZ/scene.splinecode"></spline-viewer>
        </SplineContainer>
      </ContentContainer>
    </MainSectionContainer>
  );
};

export default MainSection;