import { Link } from "react-router-dom";
//import { CategoryMaterialSummary } from "../api/types/materials/categoryMaterialSummary";
//import { CategorySummary } from "../api/types/categorySummary";

interface CategoryShowProps {
  name: string;
  onClick: () => void;
}

export default function MaterialShowButton({
  name,
  onClick,
}: CategoryShowProps) {
  return (
    <Link
      to={`/search?term=${name}`}
      onClick={onClick}
      className="py-2 px-3 rounded bg-black text-white text-lg"
    >
      View Materials
    </Link>
  );
}
