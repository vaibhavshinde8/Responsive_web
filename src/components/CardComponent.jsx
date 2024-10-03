import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background-color: #f9f9f9;
  width: 300px;
  overflow: hidden; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 

  @media (max-width: 768px) {
    width: calc(
      100% - 20px
    ); 
    margin-right: 10px; 
  }

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
`;

const Image = styled.img`
  width: 100%; 
  height: 250px; 
  object-fit: cover; 
  border-radius: 8px; 
  transition: transform 0.3s ease; 

  ${CardContainer}:hover & {
    transform: scale(1.05); 
  }

  
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 300px; 
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  color: #333; 
`;

const Description = styled.p`
  font-size: 1em;
  color: #666; 
  line-height: 1.4; 
`;

const CardComponent = ({ title, description, imgUrl }) => {
  return (
    <CardContainer>
      <Image src={imgUrl} alt={title} loading="lazy" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default CardComponent;
