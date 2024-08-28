import { Link } from "react-router-dom";
// import SearchInput from "./SearchInput";
import CategoryShowButton from "./CategoryShowButton";
import MaterialShowButton from "./MaterialShowButton";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b h-14 bg-white shadow-md">
      {/* Logo/Title Section */}
      <div className="flex items-center space-x-2 text-sm font-medium">
        <Link className="text-lg font-bold" to="/">
          Legend of Zelda
        </Link>
      </div>

      {/* Navigation Buttons Section (Desktop) */}
      <div className="hidden md:flex md:items-center md:space-x-4">
        <CategoryShowButton name={"monsters"} />
        <MaterialShowButton name={"materials"} />
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden text-lg font-bold"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white shadow-lg md:hidden transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button inside the menu */}
        <button
          type="button"
          className="absolute top-4 right-4 text-lg font-bold"
          aria-label="Close menu"
          onClick={toggleMenu}
        >
          &times; {/* Times character for close icon */}
        </button>

        <div className="flex flex-col items-center py-4 space-y-4">
          <CategoryShowButton name={"monsters"} />
          <MaterialShowButton name={"materials"} />
        </div>
      </div>
    </header>
  );
}
