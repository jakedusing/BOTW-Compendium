import type { CategoryMaterialDetails } from "../../../api/types/materials/categoryMaterialDetails";
import type { Params } from "react-router-dom";
import { getMaterialCategory } from "../../../api/queries/materials/getMaterialCategory";

interface LoaderArgs {
  params: Params;
}

export interface MaterialsDetailsLoaderResult {
  details: CategoryMaterialDetails;
}

export async function materialsDetailsLoader({
  params,
}: LoaderArgs): Promise<MaterialsDetailsLoaderResult> {
  const { name } = params;

  if (!name) {
    throw new Error("Name must be provided");
  }

  const details = await getMaterialCategory(name);

  return {
    details,
  };
}
