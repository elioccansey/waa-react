import Post from './post/post'

const Posts = ({posts, onSelectedPost}) => {
  return <div className='container'>
      {posts.map(post => <Post key={post.id} post={post} onSelectedPost={onSelectedPost}/>)}
  </div>
}

export default Posts