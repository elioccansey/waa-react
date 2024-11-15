import React, { useEffect, useState } from 'react'
import Posts from '../components/posts'
import PostDetails from '../components/post/post-details'
import * as postService from '../services/postService'
import AddPost from '../components/post/add-post'
import { usePostContext } from '../context/post-context'

const Dashboard = () => {

    const { selectedPostId, setPosts, setSelectedPostId } = usePostContext()
    const [name, setName] = useState("")
    const handleChangeName = () => {
        setPosts(prevPosts => prevPosts.map(post => post.id === 111 ? { ...post, author: name } : post))
    }
    return (
        <>
            <input type="text" name="name" id="" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleChangeName}>Change Name</button>
            {selectedPostId && <PostDetails />}
        </>
    )
}

export default Dashboard