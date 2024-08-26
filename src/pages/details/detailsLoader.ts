import type { Params } from "react-router-dom";
import { getMonsterCategory } from "../../api/queries/getMonsterCategory";

interface LoaderArgs {
  params: Params;
}

export async function detailsLoader({ params }: LoaderArgs) {
  const { name } = params;

  if (!name) {
    throw new Error("Name must be provided");
  }

  const details = await getMonsterCategory(name);

  return {
    details,
  };
  return "data!!";
}
