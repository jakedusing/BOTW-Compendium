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
    <header className="bg-gray-800 text-gray-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 h-16">
        {/* Logo/Title Section */}
        <div className="flex items-center space-x-2">
          <Link
            className="text-2xl font-bold text-blue-300 hover:text-blue-400 transition-colors"
            to="/"
          >
            Legend of Zelda
          </Link>
        </div>

        {/* Navigation Buttons Section (Desktop) */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <CategoryShowButton name="monsters" onClick={closeMenu} />
          <MaterialShowButton name="materials" onClick={closeMenu} />
          <EquipmentShowButton name="equipment" onClick={closeMenu} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-lg font-bold text-gray-200 hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 text-gray-100 shadow-lg lg:hidden transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Close Button inside the menu */}
        <button
          type="button"
          className="absolute top-4 right-4 text-lg font-bold text-gray-200 hover:text-gray-300"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          &times;
        </button>

        <div className="flex flex-col items-center py-6 space-y-6">
          <CategoryShowButton name="monsters" onClick={closeMenu} />
          <MaterialShowButton name="materials" onClick={closeMenu} />
          <EquipmentShowButton name="equipment" onClick={closeMenu} />
        </div>
      </div>
    </header>
  );
}
