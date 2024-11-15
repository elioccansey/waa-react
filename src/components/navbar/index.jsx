import { Link } from "react-router-dom";
import Post from "../post/post";
import Posts from "../posts";

const Navbar = () => {

    return <nav className="navbar">
        <Link className="navbar__item" to={`/posts`}>Posts</Link>
        <Link className="navbar__item" to={`/add-post`}>New Post</Link>
    </nav>

}

export default Navbar;