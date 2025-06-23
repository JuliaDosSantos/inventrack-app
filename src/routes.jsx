import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Logins";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { CadastroProduto } from "./pages/CadastroProduto";
import { EntradaSaida } from "./pages/EntradaSaida";

export const routes = createBrowserRouter([
  {
    element: <DashboardLayout />,
    path: "/",
    children: [
      {
        element: <CadastroProduto />,
        path: "/cadastroproduto",
      },
      {
        element: <EntradaSaida />,
        path: "/entradasaida",
      },
      // {
      //   element: <Chat />,
      //   path: "/chat/:id",
      // },
    ],
  },
  {
    element: <Login />,
    path: "/login",
  },
]);