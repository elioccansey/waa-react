import { PostContextProvider } from './context/post-context'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <PostContextProvider>
      <Dashboard />
    </PostContextProvider>
  )
}

export default App
