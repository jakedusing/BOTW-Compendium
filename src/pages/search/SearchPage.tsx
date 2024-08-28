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
      <h1 className="text-2xl font-bold my-6">Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {renderedResults}
      </div>
    </div>
  );
}
