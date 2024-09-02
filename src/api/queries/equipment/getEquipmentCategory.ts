//import type { CategoryMaterialDetails } from "../../types/materials/categoryMaterialDetails";
import type { CategoryEquipmentDetails } from "../../types/equipment/categoryEquipmentDetails";

export async function getEquipmentCategory(
  name: string
): Promise<CategoryEquipmentDetails> {
  const res = await fetch(
    `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${name}`
  );
  const data = await res.json();

  return data as CategoryEquipmentDetails;
}
