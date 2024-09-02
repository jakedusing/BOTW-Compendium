import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="bg-green-50 h-screen">
      <div className="container mx-auto px-20">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
