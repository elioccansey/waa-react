import React, { useEffect, useState } from 'react'
import Posts from '../components/posts'
import PostDetails from '../components/post/post-details'
import * as postService from '../services/postService'

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

const Dashboard = () => {

    const [selectedPost, setSelectedPost] = useState(null)
    const [posts, setPosts] = useState(initialPosts)
    const [name, setName] = useState("")

    const handleChangeName = () => {
        setPosts(prevPosts => prevPosts.map(post => post.id === 111 ? { ...post, author: name } : post))
    }

    const handleSelectedPost = (post) => setSelectedPost(post)

    const handleDeletePost = async (post) => {
        await postService.deletePost(post.id)
        setPosts(prevPosts => prevPosts.filter(p => p.id !== post.id))
        setSelectedPost(null)
    }

    const updatePost = (updatedPost) => {
        setPosts(prevPosts => prevPosts.map(post => post.id === updatedPost.id ? { ...updatedPost } : post))
        setSelectedPost(null)
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await postService.getAllPosts()
            setPosts(postsData)
        }
        fetchPosts()
    }, [])

    return (
        <>
            <Posts posts={posts} onSelectedPost={handleSelectedPost} />
            <input type="text" name="name" id="" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleChangeName}>Change Name</button>
            {selectedPost &&
                <PostDetails
                    selectedPost={selectedPost}
                    deletePost={handleDeletePost}
                    updatePost={updatePost}
                    setSelectedPost={setSelectedPost}
                />}
        </>
    )
}

export default Dashboard