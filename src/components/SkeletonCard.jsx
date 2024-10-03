import React from "react";
import styled from "styled-components";

const SkeletonCardContainer = styled.div`
  width: 300px;
  height: 400px; 
  margin: 10px;
  border-radius: 8px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 400% 100%;
  animation: shimmer 1.5s infinite;
  overflow: hidden;

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkeletonImage = styled.div`
  height: 200px;
  background: #e0e0e0;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const SkeletonText = styled.div`
  height: 20px;
  margin: 10px;
  background: #e0e0e0;
  border-radius: 4px;
`;

const SkeletonCard = () => {
  return (
    <SkeletonCardContainer>
      <SkeletonImage /> 
      <SkeletonText style={{ width: "70%" }} /> 
      <SkeletonText style={{ width: "90%" }} />{" "}
      <SkeletonText style={{ width: "80%" }} />{" "}
    </SkeletonCardContainer>
  );
};

export default SkeletonCard;
