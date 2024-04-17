"use client";
import React, { useState, useRef, useEffect } from "react";
import HireUsCard from "../HireUsCard/HireUsCard";
import ScrollIntoView from "../scrollIntoView/ScrollIntoView";
import { useGSAP } from "@/components/gsap/gsap";

interface CardData {
  id: number;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    description: "adipisicing elit. In non similique placeat",
  },
  { id: 2, title: "dolor sit, amet", description: "incidunt quas , provident" },
  {
    id: 3,
    title: "consectetur adipisicing",
    description: "ad quibusdam corrupti officiis nam iure? Laudantium",
  },
  {
    id: 4,
    title: "non similique placeat",
    description: "magnam soluta aspernatur at nisi ipsum, blanditiis deleniti",
  },
];

const HireUs: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(
    cardData[0]?.id || null
  );

  const descriptionRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: descriptionRef });

  
  const handleClick = (id: number) => {
    setSelectedCard(id === selectedCard ? null : id);
    // contextSafe(() => {
    //   if (descriptionRef.current) {
    //     descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    //     // console.log("Scrolling into view...");
    //   }
    // });
  };

  return (
    <>
      <section className="container flex px-4">
        <ScrollIntoView>
          <h2 className="border-red-500 border-b-4 w-300">
            YOU SHOULD HIRE US BECAUSE
          </h2>
        </ScrollIntoView>
      </section>
      <section className="card container flex grid grid-cols-3">
        <div className="cardId ">
          <ScrollIntoView>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2 lg:gap-4 cursor-pointer">
              {cardData.map((card) => (
                <HireUsCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  handleClick={handleClick}
                  selected={selectedCard === card.id} // Pass selected prop
                />
              ))}
            </div>
          </ScrollIntoView>
        </div>
        <section className="description col-span-2 items-center align-middle">
        <ScrollIntoView>
          <div className="description-container" ref={descriptionRef}>
            <div className="description-item text-center align-middle text-3xl">
              {selectedCard !== null
                ? cardData.find((card) => card.id === selectedCard)?.description
                : ""}
            </div>
          </div>
        </ScrollIntoView>
        </section>
      </section>
    </>
  );
};

export default HireUs;


{
  /* <section>
        <ScrollIntoView>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 lg:gap-4">
            {cardData.map((card) => (
              <div key={card.id} className="flex">
                <div className="flex-initial">
                  <div>{card.id}</div>
                  <div>{card.title}</div>
                </div>
                <div className="flex-auto">
                  <div className="text-right">{card.description}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollIntoView>
      </section> */
}
