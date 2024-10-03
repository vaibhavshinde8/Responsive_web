import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent"; 
import styled from "styled-components";
import SkeletonCard from "./SkeletonCard";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px; 

  @media (max-width: 1200px) {
    justify-content: center; 
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; 
  }
`;

const GridComponent = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setCardsData([
        {
          title: "Lion",
          description:
            "The lion is a species in the family Felidae and a member of the genus Panthera.",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1024px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
        },
        {
          title: "Tiger",
          description:
            "The tiger is the largest species among the Felidae and classified in the genus Panthera.",
          imgUrl:
            "https://images.unsplash.com/photo-1506108928571-9f4b11ba3f10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Elephant",
          description:
            "Elephants are the largest existing land animals, known for their intelligence and social behavior.",
          imgUrl:
            "https://plus.unsplash.com/premium_photo-1666755275618-966ecd83bc5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Giraffe",
          description:
            "The giraffe is the tallest living terrestrial animal and the largest ruminant.",
          imgUrl:
            "https://images.unsplash.com/photo-1470073755300-6ec0f9cfa01c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Zebra",
          description:
            "Zebras are African equines with distinctive black and white striped coats.",
          imgUrl:
            "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?q=80&w=1367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Kangaroo",
          description:
            "Kangaroos are marsupials that belong to the family Macropodidae.",
          imgUrl:
            "https://plus.unsplash.com/premium_photo-1666777247057-40fd5ff166c4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Panda",
          description:
            "Giant pandas are bear species found in the mountain ranges of central China.",
          imgUrl:
            "https://images.unsplash.com/photo-1554202699-5dab023899ef?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Penguin",
          description:
            "Penguins are flightless birds that are highly adapted to life in the water.",
          imgUrl:
            "https://images.unsplash.com/photo-1462888210965-cdf193fb74de?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]);
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <GridContainer>
      {loading
        ? 
          Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : cardsData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              description={card.description}
              imgUrl={card.imgUrl}
            />
          ))}
    </GridContainer>
  );
};

export default GridComponent;
