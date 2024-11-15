import { useEffect } from 'react'
import { usePostContext } from '../context/post-context'
import Post from './post/post'
import * as postService from '../services/postService'

const Posts = () => {
  const { posts, setPosts } = usePostContext()


  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await postService.getAllPosts()
      setPosts(postsData)
    }
    fetchPosts()
  }, [])

  return <>
    <h2>List of posts</h2>
    <div className='container'>{posts.map(post => <Post key={post.id} post={post} />)}</div>
  </>
}

export default Posts