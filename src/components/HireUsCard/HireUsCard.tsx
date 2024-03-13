
interface HireUsCardProps {
  id: number;
  title: string;
  description: string;
}

const HireUsCard: React.FC<HireUsCardProps> = ({ id, title, description }) => (
  <div className="flex px-4">
    <h3 className="font-bebasNeue text-5xl pt-1">{id.toString().padStart(2, "0")}</h3>
    <div className="font-roboto tracking-wider flex flex-col px-4">
      <h3 className="text-lg font-black">{title.toUpperCase()}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default HireUsCard;
