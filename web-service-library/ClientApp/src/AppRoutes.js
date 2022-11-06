import Users from "./components/Administrator/Users";
import AddUser from "./components/Administrator/AddUser";
import AddBooks from "./components/Librarian/AddBooks";
import Books from "./components/Librarian/Books";
import Book from "./components/Client/Book";

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
        path: '/Books',
        element: <Books />
    },
    {
        path: '/AddBooks',
        element: <AddBooks />
    },
    {
        path: '/Book',
        element: <Book />
    }
];

export default AppRoutes;