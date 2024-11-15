import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard"
import Posts from "../components/posts";
import AddPost from "../components/post/add-post";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "posts",
                element: <Posts />
            },
            {
                path: "add-post",
                element: <AddPost />
            }
        ]
    }

])

export default router;