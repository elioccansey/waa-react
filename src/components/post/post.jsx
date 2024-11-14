import React, { useState } from 'react'

const Post = ({post, onSelectedPost}) => {
  const {id, title, author} = post
  return (
      <article id={id} className='post' onClick={()=>onSelectedPost(post)}>
        <h2> {title} </h2>
        <p>{author}</p>
      </article>
  )
}

export default Post