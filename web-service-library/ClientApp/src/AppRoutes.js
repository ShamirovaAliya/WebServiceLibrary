import Users from "./components/Administrator/Users";
import AddUser from "./components/Administrator/AddUser";

const AppRoutes = [
    {
        index: true,
        element: <Users />
    },
    {
        path: '/AddUser',
        element: <AddUser />
    }
];

export default AppRoutes;