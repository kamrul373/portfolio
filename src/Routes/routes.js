import Details from "../components/Details/Details";
import Blogs from "../pages/Blogs/Blogs";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "project-details/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/projectDetails/${params.id}`),
                element: <Details></Details>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    }
])
export default router;