import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #343a40; 
  color: #ffffff; 
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif; 

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Link = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #ffffff; 

  &:hover {
    text-decoration: underline;
    color: #ffd700;
  }
`;

const FooterComponent = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} Vaibhav Shinde. All rights reserved.
      </p>
      <p>
        <Link href="#about">About Us</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </p>
    </FooterContainer>
  );
};

export default FooterComponent;
