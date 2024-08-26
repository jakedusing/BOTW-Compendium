import type { CategoryMonsterDetails } from "../types/categoryMonsterDetails";

export async function getMonsterCategory(
  name: string
): Promise<CategoryMonsterDetails> {
  const res = await fetch(
    `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${name}`
  );
  const data = await res.json();

  return data as CategoryMonsterDetails;
}
