import React, { useState } from 'react'

const Post = ({post, selectedPost}) => {
  const {title, author, id} = post

  return (
    <>
      <article id={id}>
        <h2> {title} </h2>
        <p>{author}</p>
      {selectedPost?.id == id && <PostDetails selectedPost={selectedPost} /> } 
      </article>
    </>
  )
}

export default Post