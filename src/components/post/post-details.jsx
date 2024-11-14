import React, { useEffect, useRef, useState } from 'react'
import * as postService from '../../services/postService'
import Comments from '../comments'
import { usePostContext } from '../../context/post-context'

const PostDetails = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const formRef = useRef()

  const [selectedPost, setSelectedPost] = useState(null)
  const { selectedPostId, setSelectedPostId, setPosts } = usePostContext();

  const handleSave = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const updatedTitle = formData.get("title")
    const updatedAuthor = formData.get("author")
    const updatedPost = { title: updatedTitle, author: updatedAuthor }
    await postService.updatePost(selectedPost.id, updatedPost)
    setPosts(prevPosts => prevPosts.map(post => post.id === selectedPost.id ? { ...post, title: updatedTitle, author: updatedAuthor } : post))
    setSelectedPostId(null)
    setIsEditMode(false)
  }

  const handleDeletePost = async (post) => {
    await postService.deletePost(post.id)
    setPosts(prevPosts => prevPosts.filter(p => p.id !== post.id))
    setSelectedPostId(null)
  }

  useEffect(() => {
    async function fetchPostById() {
      const post = await postService.getPostById(selectedPostId)
      setSelectedPost(post)
    }
    fetchPostById()
  }, [selectedPostId])

  if (!selectedPost) return <div>Loading...</div>

  const { id, title, author, content, comments } = selectedPost
  return (
    <div>
      {
        isEditMode ?
          <div >
            <form ref={formRef} onSubmit={handleSave}>
              <p>
                <label htmlFor="title">Title: <input type="text" name="title" id="title" defaultValue={title} /></label>
              </p>
              <p>
                <label htmlFor='author'>Author: <input type="text" name="author" id="author" defaultValue={author} /></label>
              </p>
              <button >Save</button>
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