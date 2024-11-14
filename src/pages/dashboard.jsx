import React, { useEffect, useState } from 'react'
import Posts from '../components/posts'
import PostDetails from '../components/post/post-details'
import * as postService from '../services/postService'
import AddPost from '../components/post/add-post'
import { usePostContext } from '../context/post-context'

const Dashboard = () => {

    const { posts, setPosts } = usePostContext()
    const { selectedPostId, setSelectedPostId } = usePostContext()
    const [name, setName] = useState("")
    const [isAddPostMode, setIsAddPostMode] = useState(true)

    const handleChangeName = () => {
        setPosts(prevPosts => prevPosts.map(post => post.id === 111 ? { ...post, author: name } : post))
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
            <h2>Add a post</h2>
            {isAddPostMode && <AddPost />}
            <h2>List of posts</h2>
            {posts && <Posts posts={posts} />}
            <input type="text" name="name" id="" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleChangeName}>Change Name</button>
            {selectedPostId && <PostDetails />}


        </>
    )
}

export default Dashboard