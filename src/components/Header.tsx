import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import CategoryShowButton from "./CategoryShowButton";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14">
      <div className="flex items-center space-x-2 text-sm font-medium">
        <Link className="text-lg font-bold" to="/">
          Legend of Zelda
        </Link>
      </div>
      <div className="max-w-xl ml-4">
        <CategoryShowButton name={"monsters"} />
      </div>
    </div>
  );
}
