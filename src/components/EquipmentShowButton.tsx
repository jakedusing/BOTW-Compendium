import { Link } from "react-router-dom";

interface CategoryShowProps {
  name: string;
  onClick: () => void;
}

export default function EquipmentShowButton({
  name,
  onClick,
}: CategoryShowProps) {
  return (
    <Link
      to={`/search?term=${name}`}
      onClick={onClick}
      className="py-2 px-3 rounded bg-black text-white text-lg"
    >
      View Equipment
    </Link>
  );
}
