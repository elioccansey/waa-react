import Post from './post/post'

const Posts = ({ posts }) => {
  return <div className='container'>
    {posts.map(post => <Post key={post.id} post={post} />)}
  </div>
}

export default Posts