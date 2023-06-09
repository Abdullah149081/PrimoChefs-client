import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
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
        loader: () => fetch("https://primo-chefs-server-abdullah149081.vercel.app/chefAllData"),
      },
      {
        path: "/view-Recipes/:id",
        element: (
          <PrivateRoutes>
            <ViewRecipes />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://primo-chefs-server-abdullah149081.vercel.app/chefAllData/${params.id}`),
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
