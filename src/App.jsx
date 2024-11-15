import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import { PostContextProvider } from './context/post-context'

function App() {
  return (
    <PostContextProvider>
      <Navbar />
      <Outlet />
    </PostContextProvider>
  )
}

export default App
