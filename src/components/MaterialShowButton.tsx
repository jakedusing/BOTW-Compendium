import { Link } from "react-router-dom";
import { CategoryMaterialSummary } from "../api/types/categoryMaterialSummary";

interface CategoryShowProps {
  name: CategoryMaterialSummary;
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
