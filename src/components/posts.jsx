import React, { useState } from 'react'
import Post from './post/post'

const Posts = ({posts}) => {

  // const handleShowDetails = () => {}
  const [showDetails, setShowDetais] = useState(true)
  const [selectedPost, setSelectedPost] = useState(null)

  
  return posts.map(post => <Post key={post.id} post={post}/>)
}

export default Posts