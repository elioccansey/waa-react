import React, { useState } from 'react'
import Posts from '../components/posts'

const initialPosts = [
    {
        id:111,
        title:"Happiness",
        author:"John"

    },
    {
        id:112,
        title:"MIU",
        author:"Dean"


    },
    {
        id:113,
        title:" Enjoy Life",
        author:"Jasmine"

    },
]

const Dashboard = () => {

    const [posts, setPosts] = useState(initialPosts)

    const handleChangeName = (name)=>{
        setPosts(posts => posts.map(post => post.id == 1 ? {...post, author:name} : post))
    }

  return (
    <>
    <Posts posts={posts}/>
    <input type="text" name="name" id="" />
    <button onClick={()=>handleChangeName(name)}>Change Name</button>
    
    </>
  )
}

export default Dashboard