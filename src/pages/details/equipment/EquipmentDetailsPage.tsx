import type { EquipmentDetailsLoaderResult } from "./equipmentDetailsLoader";
import { useLoaderData } from "react-router-dom";

export default function EquipmentDetailsPage() {
  const { details } = useLoaderData() as EquipmentDetailsLoaderResult;
  const renderedLocations = (details.data.common_locations || []).map(
    (common_locations) => {
      return (
        <div
          key={common_locations}
          className="border py-0.5 px-1 text-xs bg-yellow-400 rounded hover:bg-yellow-300 hover:cursor-pointer transition-colors duration-300 ease-in-out"
        >
          {common_locations}
        </div>
      );
    }
  );

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4">
        {details.data.name?.toUpperCase()}
      </h1>

      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-green-100 rounded">
          {details.data.description}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold">Category</h3>
        <div className="p-3 bg-green-100 rounded">{details.data.category}</div>
      </div>

      <div>
        <h3 className="text-lg font-bold">Common Locations</h3>
        <div className="p-3 bg-green-100 rounded flex space-x-2">
          {renderedLocations}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Properties</h3>
        <div className="p-3 bg-green-100 rounded flex flex-col gap-2">
          <p className="text-sm font-medium">
            Attack - {details.data.properties.attack}
          </p>
          <p className="text-sm font-medium">
            Defense - {details.data.properties.defense}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold">Image</h3>
        <div className="p-3 bg-green-100 rounded mb-2">
          <img
            src={`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${details.data.name}/image`}
            alt={details.data.name}
            className="w-full h-auto max-w-md mx-auto object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
