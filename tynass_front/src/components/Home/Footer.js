import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: black;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Tynass. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
