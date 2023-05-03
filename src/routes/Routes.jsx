import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import ViewRecipes from "../pages/Shared/ViewRecipes/ViewRecipes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chefAllData"),
      },
      {
        path: "/view-Recipes/:id",
        element: (
          <PrivateRoutes>
            <ViewRecipes />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/chefAllData/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
