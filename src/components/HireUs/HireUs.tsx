import React from "react";
import HireUsCard from "../HireUsCard/HireUsCard";
import ScrollIntoView from "../scrollIntoView/ScrollIntoView";



interface CardData {
  id: number;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  { id: 1, title: "Lorem ipsum dolor sit", description: "adipisicing elit. In non similique placeat" },
  { id: 2, title: "dolor sit, amet", description: "incidunt quas , provident" },
  { id: 3, title: "consectetur adipisicing", description: "ad quibusdam corrupti officiis nam iure? Laudantium" },
  { id: 4, title: "non similique placeat", description: "magnam soluta aspernatur at nisi ipsum, blanditiis deleniti" },
];

const HireUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <ScrollIntoView>
        <h2>YOU SHOULD HIRE US BECAUSE</h2>
        <div className="flex justify-center w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {cardData.map((card) => (
              <HireUsCard key={card.id} {...card} />
            ))}
          </div>    
        </div>
      </ScrollIntoView>
    </div>
  );  
}
export default HireUs;