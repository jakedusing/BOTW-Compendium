import { CategorySummary } from "../api/types/categorySummary";
import { Link } from "react-router-dom";

interface CategoryListItemProps {
  category: CategorySummary;
}

export default function CategoryListItem({ category }: CategoryListItemProps) {
  const renderedLocations = (category.common_locations || []).map(
    (common_locations) => {
      return (
        <div
          key={common_locations}
          className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
        >
          {common_locations}
        </div>
      );
    }
  );

  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Link to={`/categories/${category.name}`} className="text-xl font-bold">
          {category.name}
        </Link>
        <p className="text-sm text-gray-500">{category.description}</p>
        <div className="flex gap-1">{renderedLocations}</div>
      </div>
      <div className="mr-6 ">
        <Link
          to={`categories/${category.name}`}
          className="py-2 px-3 rounded bg-black text-white text-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
