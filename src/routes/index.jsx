import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <ProductList /> },
      { path: "/produtos/:productId", element: <ProductDetail /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}