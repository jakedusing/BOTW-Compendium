import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <div>
      {details.data.name} - {details.data.description}
    </div>
  );
}
