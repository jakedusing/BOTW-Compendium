import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";
import MaterialsDetailsPage from "./pages/details/materials/matertialsDetailsPage";
import { materialsDetailsLoader } from "./pages/details/materials/materialsDetailsLoader";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
