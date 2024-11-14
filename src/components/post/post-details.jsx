import React, { useEffect, useRef, useState } from 'react'
import { getPostById } from '../../services/postService'
import Comments from '../comments'

const PostDetails = ({ selectedPost, setSelectedPost, deletePost: handleDeletePost, updatePost }) => {
  const { id, title, author, content, comments } = selectedPost
  const [isEditMode, setIsEditMode] = useState(false)
  const formRef = useRef()

  const handleSave = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const updatedTitle = formData.get("title")
    const updatedAuthor = formData.get("author")
    updatePost({ id, title: updatedTitle, author: updatedAuthor })
    setIsEditMode(false)
  }

  useEffect(() => {
    async function fetchPostById() {
      const post = await getPostById(selectedPost.id)
      setSelectedPost(post)
    }
    fetchPostById()
  }, [selectedPost.id])

  return (
    <div>
      {
        isEditMode ?
          <div >
            <form ref={formRef}>
              <p>
                <label htmlFor="title">Title: <input type="text" name="title" id="title" defaultValue={title} /></label>
              </p>
              <p>
                <label htmlFor='author'>Author: <input type="text" name="author" id="author" defaultValue={author} /></label>
              </p>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditMode(false)}>Cancel</button>
            </form>
          </div>

          : <div className=''>
            <article id={id} className='post-detail'>
              <h2>{title}</h2>
              <p>{author}</p>
              <p>{content}</p>
              {comments && <Comments comments={comments} />}
              <button onClick={() => setIsEditMode(true)}>Edit</button>
              <button onClick={() => handleDeletePost(selectedPost)}>Delete</button>
            </article>
          </div>
      }
    </div>
  )
}

export default PostDetails