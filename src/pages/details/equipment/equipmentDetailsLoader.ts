import type { CategoryEquipmentDetails } from "../../../api/types/equipment/categoryEquipmentDetails";
import type { Params } from "react-router-dom";
import { getEquipmentCategory } from "../../../api/queries/equipment/getEquipmentCategory";

interface LoaderArgs {
  params: Params;
}

export interface EquipmentDetailsLoaderResult {
  details: CategoryEquipmentDetails;
}

export async function equipmentDetailsLoader({
  params,
}: LoaderArgs): Promise<EquipmentDetailsLoaderResult> {
  const { name } = params;

  if (!name) {
    throw new Error("Name must be provided");
  }

  const details = await getEquipmentCategory(name);

  return {
    details,
  };
}
