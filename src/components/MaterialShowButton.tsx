import { Link } from "react-router-dom";
//import { CategoryMaterialSummary } from "../api/types/materials/categoryMaterialSummary";
import { CategorySummary } from "../api/types/categorySummary";

interface CategoryShowProps {
  name: CategorySummary;
}

export default function MaterialShowButton({ name }: CategoryShowProps) {
  return (
    <Link
      to={`/search?term=${name}`}
      className="py-2 px-3 rounded bg-black text-white text-lg"
    >
      View Materials
    </Link>
  );
}
