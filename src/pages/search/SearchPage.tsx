import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import CategoryListItem from "../../components/CategoryListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => {
    return <CategoryListItem category={result} key={result.name} />;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}
