import { MaterialsDetailsLoaderResult } from "./materialsDetailsLoader";
import { useLoaderData } from "react-router-dom";

export default function MaterialsDetailsPage() {
  const { details } = useLoaderData() as MaterialsDetailsLoaderResult;
  const renderedLocations = (details.data.common_locations || []).map(
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

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-300 border-b-4 border-blue-500 pb-2 mb-4">
        {details.data.name?.toUpperCase()}
      </h1>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-300 border-b-2 border-blue-500 pb-2 mb-2">
          Description
        </h3>
        <p className="text-gray-300">{details.data.description}</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-300 border-b-2 border-blue-500 pb-2 mb-2">
          Category
        </h3>
        <p className="text-gray-300">{details.data.category}</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-300 border-b-2 border-blue-500 pb-2 mb-2">
          Common Locations
        </h3>
        <div className="flex flex-wrap gap-2">{renderedLocations}</div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-300 border-b-2 border-blue-500 pb-2 mb-2">
          Cooking Effect
        </h3>
        <div className="p-3 bg-gray-700 rounded flex justify-start flex-wrap gap-2 text-gray-300">
          {details.data.cooking_effect}
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-300 border-b-2 border-blue-500 pb-2 mb-2">
          Image
        </h3>
        <div className="p-3 bg-gray-700 rounded mb-2">
          <img
            src={`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${details.data.name}/image`}
            alt={details.data.name}
            className="w-full h-auto max-w-md mx-auto border-4 border-blue-500 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
