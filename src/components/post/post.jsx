import React from 'react'
import { usePostContext } from '../../context/post-context'

const Post = ({ post }) => {
  const { id, title, author } = post
  const { selectedPostId, setSelectedPostId } = usePostContext()
  return (
    <article id={id} className='post' onClick={() => setSelectedPostId(post.id)}>
      <h2> {title} </h2>
      <p>{author}</p>
    </article>
  )
}

export default Post