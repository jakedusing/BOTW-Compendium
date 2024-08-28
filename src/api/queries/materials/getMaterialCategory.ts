import type { CategoryMaterialDetails } from "../../types/materials/categoryMaterialDetails";

export async function getMaterialCategory(
  name: string
): Promise<CategoryMaterialDetails> {
  const res = await fetch(
    `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${name}`
  );
  const data = await res.json();

  return data as CategoryMaterialDetails;
}
