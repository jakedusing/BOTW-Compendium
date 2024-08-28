import type { CategorySummary } from "../../api/types/categorySummary";
import { searchCategories } from "../../api/queries/searchCategories";

export interface SearchLoaderResult {
  searchResults: CategorySummary[];
}

export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided!");
  }

  const results = await searchCategories(term);

  return {
    searchResults: results,
  };
}
