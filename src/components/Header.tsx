import { Link } from "react-router-dom";
import CategoryShowButton from "./CategoryShowButton";
import MaterialShowButton from "./MaterialShowButton";
import EquipmentShowButton from "./EquipmentShowButton";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b h-14 bg-white shadow-md">
      {/* Logo/Title Section */}
      <div className="flex items-center space-x-2 text-sm font-medium">
        <Link className="text-lg font-bold" to="/">
          Legend of Zelda
        </Link>
      </div>

      {/* Navigation Buttons Section (Desktop) */}
      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <CategoryShowButton name={"monsters"} onClick={closeMenu} />
        <MaterialShowButton name={"materials"} onClick={closeMenu} />
        <EquipmentShowButton name={"equipment"} onClick={closeMenu} />
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="lg:hidden text-lg font-bold"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white shadow-lg lg:hidden transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button inside the menu */}
        <button
          type="button"
          className="absolute top-4 right-4 text-lg font-bold"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          &times; {/* Times character for close icon */}
        </button>

        <div className="flex flex-col items-center py-4 space-y-4">
          <CategoryShowButton name={"monsters"} onClick={closeMenu} />
          <MaterialShowButton name={"materials"} onClick={closeMenu} />
          <EquipmentShowButton name={"equipment"} onClick={closeMenu} />
        </div>
      </div>
    </header>
  );
}
