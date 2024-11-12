import React from 'react'

const PostDetails = ({selectedPost, deletePost, updatePost}) => {
  return (
    <div>
        <button onClick={()=>updatePost(selectedPost)}>Edit</button>
        <button onClick={()=>deletePost(selectedPost)}>Delete</button>
    </div>
  )
}

export default PostDetails