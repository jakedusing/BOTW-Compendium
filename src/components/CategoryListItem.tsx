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

  console.log(category);
  let pathName = "";
  if (category.category === "monsters") {
    pathName = `/categories/${category.name}`;
  } else {
    pathName = `/materials/${category.name}`;
  }

  return (
    <div className="border p-4 rounded-lg bg-green-100 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between">
      <div className="flex flex-col gap-2 mb-4">
        <Link
          to={pathName}
          className="text-xl font-semibold text-green-800 hover:underline"
        >
          {category.name?.toUpperCase()}
        </Link>
        <p className="text-sm text-gray-800">{category.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">{renderedLocations}</div>
        <img
          src={`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${category.name}/image`}
          alt={category.name}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      <div className="flex justify-center">
        <Link
          to={pathName}
          className="block py-2 px-6 rounded bg-yellow-600 text-white text-center text-lg hover:bg-yellow-500 transition-colors duration-300 ease-in-out"
        >
          View
        </Link>
      </div>
    </div>
  );
}
