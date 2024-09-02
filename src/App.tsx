import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";
import MaterialsDetailsPage from "./pages/details/materials/MatertialsDetailsPage";
import { materialsDetailsLoader } from "./pages/details/materials/materialsDetailsLoader";
import EquipmentDetailsPage from "./pages/details/equipment/EquipmentDetailsPage";
import { equipmentDetailsLoader } from "./pages/details/equipment/equipmentDetailsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/categories/:name",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
      {
        path: "/materials/:name",
        element: <MaterialsDetailsPage />,
        loader: materialsDetailsLoader,
      },
      {
        path: "/equipment/:name",
        element: <EquipmentDetailsPage />,
        loader: equipmentDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
