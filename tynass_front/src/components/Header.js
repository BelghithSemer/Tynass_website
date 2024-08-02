import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* Add space between Contact button and Menu */
`;

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <HeaderContainer>
      <Logo>Tynass</Logo>
      <ButtonWrapper>
        <ContactButton>Contact Us</ContactButton>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </ButtonWrapper>
    </HeaderContainer>
  );
};

export default Header;
