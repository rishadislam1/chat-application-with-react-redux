import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Inbox from "../pages/Inbox";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Conversation from "../pages/Conversation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PublicRoute>
            <Login></Login>
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register></Register>
          </PublicRoute>
        ),
      },
      {
        path: "/inbox",
        element: (
          <PrivateRoute>
            <Conversation></Conversation>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/conversation",
      //   element: (
      //     <PrivateRoute>
      //       <Conversation></Conversation>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/inbox/:id",
        element: (
          <PrivateRoute>
            <Inbox />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
