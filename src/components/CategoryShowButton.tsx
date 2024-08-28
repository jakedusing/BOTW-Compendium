// import { useState } from "react";
import { Link } from "react-router-dom";
//import { CategoryMonsterSummary } from "../api/types/categoryMonsterSummary";

interface CategoryShowProps {
  name: string;
}

export default function CategoryShowButton({ name }: CategoryShowProps) {
  /* const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //navigate(`/search?term=${term}`);
  }; */

  return (
    <Link
      to={`/search?term=${name}`}
      className="py-2 px-3 rounded bg-black text-white text-lg mr-4"
    >
      View Monsters
    </Link>
    /*<form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3"></div>
        <button
          value={term}
          onClick={navigate(`/search?term=${name}`)}
          className="px-3 py-2 bg-slate-500 w-full rounded border-0 shadow-none"
        >
          Show Monsters
        </button>
      </div>
    </form> */
  );
}
