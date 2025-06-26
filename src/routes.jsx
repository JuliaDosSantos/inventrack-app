import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Logins";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { CadastroProduto } from "./pages/CadastroProduto";
import { EntradaSaida } from "./pages/EntradaSaida";
import { HistoricoMovimentacao } from "./pages/HistoricoMovimentacao";

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
      {
        element: <HistoricoMovimentacao />,
        path: "/historicomovimentacao",
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