import { CategoryMonsterSummary } from "../api/types/categoryMonsterSummary";
import { Link } from "react-router-dom";

interface CategoryListItemProps {
  category: CategoryMonsterSummary;
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
    <div className="border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between">
      <div className="flex flex-col gap-2 mb-4">
        <Link
          to={`/categories/${category.name}`}
          className="text-xl font-semibold text-blue-600 hover:underline"
        >
          {category.name?.toUpperCase()}
        </Link>
        <p className="text-sm text-gray-600">{category.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">{renderedLocations}</div>
        <img
          src={`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${category.name}/image`}
        />
      </div>

      <div className="mr-6 ">
        <Link
          to={`categories/${category.name}`}
          className="block py-2 px-4 rounded bg-black text-white text-center text-lg hover:bg-gray-800 transition-colors duration-300 ease-in-out"
        >
          View
        </Link>
      </div>
    </div>
  );
}
