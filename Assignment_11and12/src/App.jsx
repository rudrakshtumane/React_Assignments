import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import Post3 from "./components/Post3"
import Post2 from "./components/Post2"
import Post1 from "./components/Post1"

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="post1" element={<Post1 />} />
        <Route path="post2" element={<Post2 />} />
        <Route path="post3" element={<Post3 />} />
        
      </Routes>
    </>

  )
}

export default App