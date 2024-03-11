interface HireUsCardProps {
  id: number;
  title: string;
  description: string;
}

const HireUsCard: React.FC<HireUsCardProps> = ({ id, title, description }) => (
  <div className="flex px-4">
    <h3 className="text-4xl font-black pt-1">{id.toString().padStart(2, "0")}</h3>
    <div className="flex flex-col px-4">
      <h3 className="text-lg font-semibold">{title.toUpperCase()}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default HireUsCard
