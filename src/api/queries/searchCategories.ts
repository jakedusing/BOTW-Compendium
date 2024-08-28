import type { CategorySummary } from "../types/categorySummary";

interface SearchResponse {
  data: [
    data: {
      name?: string;
      category?: string;
      description?: string;
      common_locations?: string[];
    }
  ];
}

export async function searchCategories(
  term: string
): Promise<CategorySummary[]> {
  const res = await fetch(
    `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${term}`
  );
  const data: SearchResponse = await res.json();

  return data.data.map((data) => {
    return {
      name: data?.name ?? "Unknown",
      category: data?.category ?? "na",
      description: data?.description ?? "No description available",
      common_locations: data?.common_locations ?? [],
    };
  });
}
