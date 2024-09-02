import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-6 py-8 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
