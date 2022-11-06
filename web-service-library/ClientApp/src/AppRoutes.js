import Users from "./components/Administrator/Users";
import AddUser from "./components/Administrator/AddUser";
import AddBooks from "./components/Librarian/AddBooks";
import Books from "./components/Librarian/Books";

const AppRoutes = [
    {
        path: '/Users',
        element: <Users />
    },
    {
        path: '/AddUser',
        element: <AddUser />
    },
    {
        path: '/AddBooks',
        element: <AddBooks />
    },
    {
        path: '/Books',
        element: <Books />
    }
];

export default AppRoutes;