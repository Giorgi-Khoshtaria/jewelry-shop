import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Components/Auth/Login";
import Registration from "./Components/Auth/Registration";
import ForgotPassword from "./Components/Auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
