import { CategorySummary } from "../api/types/categorySummary";
import { Link } from "react-router-dom";

interface CategoryListItemProps {
  category: CategorySummary;
}

export default function CategoryListItem({ category }: CategoryListItemProps) {
  const renderedLocations = (category.common_locations || []).map(
    (common_location) => {
      return (
        <div
          key={common_location}
          className="border border-blue-500 py-1 px-3 text-xs bg-gray-800 text-blue-300 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-300 ease-in-out shadow-md"
        >
          {common_location}
        </div>
      );
    }
  );

  let pathName = "";
  if (category.category === "monsters") {
    pathName = `/categories/${category.name}`;
  } else if (category.category === "materials") {
    pathName = `/materials/${category.name}`;
  } else {
    pathName = `/equipment/${category.name}`;
  }

  return (
    <div className="border border-blue-500 p-4 rounded-lg bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col justify-between">
      <div className="flex flex-col gap-4 mb-4">
        <Link
          to={pathName}
          className="text-2xl font-bold text-blue-300 hover:underline"
        >
          {category.name?.toUpperCase()}
        </Link>
        <p className="text-sm text-gray-300">{category.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">{renderedLocations}</div>
        <img
          src={`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${category.name}/image`}
          alt={category.name}
          className="w-full h-auto max-w-md border-4 border-blue-500 rounded-lg shadow-md"
        />
      </div>

      <div className="flex justify-center">
        <Link
          to={pathName}
          className="block py-2 px-6 rounded bg-blue-600 text-white text-center text-lg hover:bg-blue-500 transition-colors duration-300 ease-in-out"
        >
          View
        </Link>
      </div>
    </div>
  );
}
