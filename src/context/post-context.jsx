import { createContext, useContext, useState } from "react";

const initialPosts = [
    {
        id: 111,
        title: "Happiness",
        author: "John"

    },
    {
        id: 112,
        title: "MIU",
        author: "Dean"


    },
    {
        id: 113,
        title: " Enjoy Life",
        author: "Jasmine"

    },
]

const PostContext = createContext({ selectedPostId: null, posts: initialPosts, setPosts: () => { }, setSelectedPostId: () => { } });

const PostContextProvider = ({ children }) => {
    const [selectedPostId, setSelectedPostId] = useState(null)
    const [posts, setPosts] = useState(initialPosts)


    return <PostContext.Provider value={{ selectedPostId, setSelectedPostId, posts, setPosts }}>
        {children}
    </PostContext.Provider>
}

const usePostContext = () => useContext(PostContext)

export {
    PostContextProvider,
    usePostContext
} 