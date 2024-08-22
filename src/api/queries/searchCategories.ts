import type { CategorySummary } from "../types/categorySummary";

interface SearchResponse {
  data: {
    data: {
      name: string;
      description: string;
      common_locations: string[] | null;
    };
  }[];
}

export async function searchCategories(
  term: string
): Promise<CategorySummary[]> {
  const res = await fetch(
    `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${term}`
  );
  const data: SearchResponse = await res.json();

  return data.data.map(({ data: { name, description, common_locations } }) => {
    return {
      name: name,
      description: description,
      common_locations: common_locations,
    };
  });
}
