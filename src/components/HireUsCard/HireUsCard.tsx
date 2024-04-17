import React from "react";

interface HireUsCardProps {
  id: number;
  title: string;
  description: string;
  handleClick: (id: number) => void; // Include handleClick prop
  selected: boolean; // Include selected prop
}

const HireUsCard: React.FC<HireUsCardProps> = ({
  id,
  title,
  description,
  handleClick,
  selected,
}) => {
  const onClick = () => {
    handleClick(id); // Call handleClick function with card id
  };

  return (
    <section>
      <div
        className={`hire-us-card ${selected ? "" : "opacity-50"}`}
        onClick={onClick}
      >
        <div className="flex px-4">
          <h3
            className={`font-bebasNeue text-5xl pt-1 ${
              selected ? "" : "opacity-50"
            }`}
          >
            {id.toString().padStart(2, "0")}
          </h3>
          <div className="font-roboto tracking-wider flex px-4">
            <h3
              className={`text-3xl font-black align-middle mt-2 ${
                selected ? "" : "opacity-50"
              }`}
            >
              {title.toUpperCase()}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireUsCard;
