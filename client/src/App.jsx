import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
     </Routes>
    </>
  )
}

export default App
