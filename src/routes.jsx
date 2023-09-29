// pages
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import DeleteItem from "./pages/DeleteItem";

const routes = [
  {
    path: "/",
    element: <AddItem />,
  },
  {
    path: "/edit",
    element: <EditItem />,
  },
  {
    path: "/delete",
    element: <DeleteItem />,
  },
];

export default routes;
