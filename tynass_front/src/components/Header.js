import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ContactButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Tynass</Logo>
      <ContactButton>Contact Us</ContactButton>
    </HeaderContainer>
  );
};

export default Header;
