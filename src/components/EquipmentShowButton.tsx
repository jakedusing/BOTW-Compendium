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
      className="inline-block py-2 px-4 rounded-lg bg-gray-800 text-gray-100 text-lg font-medium border border-gray-600 hover:bg-gray-700 hover:border-gray-500 transition-colors duration-300"
    >
      View Equipment
    </Link>
  );
}
